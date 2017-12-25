<template>
  <div id='login'>
      <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
    <el-row type="flex" justify="start">
  <el-form-item label="账号" prop="account">
    <el-input  v-model="ruleForm2.account" style="width:200px" auto-complete="off"></el-input>
  </el-form-item>
    </el-row>

  <el-row type="flex" justify="start">
  <el-form-item label="密码" prop="checkPwd">
    <el-input type="password" v-model="ruleForm2.checkPwd" style="width:200px" auto-complete="off"></el-input>
  </el-form-item>
  </el-row>

  <el-row type="flex" justify="start">
  <el-form-item label="验证码" prop="code">
    <el-input v-model="ruleForm2.code" style="width:100px"></el-input>
  </el-form-item>
</el-row>

  <el-row type="flex" justify="start">
  <el-col :span='13'>
    <el-button style='width:150px' type="primary" round @click="submitForm('ruleForm2')">登录</el-button>
    </el-col>
    <el-col :span='4'>
    <el-button  style='width:150px' round @click="resetForm('ruleForm2')">重置</el-button>
    </el-col>
  </el-row>

</el-form>
  </div>
</template>

<script>
  import communication from '../assets/communication';
  import store from '../vuex/admin/store'
  // import AdminService from '../../../ServiceModule/AdminService'
  export default {
    name: 'Login',
    data() {
      var checkCode = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'));
        }
        setTimeout(() => {
          if (value.length !==4) {
            callback(new Error('请输入四位验证码'));
          } else {
              callback();
          }
        }, 100);
      };
      var validateAccount = (rule, value, callback) => {
        let regExp = /^.+$/;
        if (value === '') {
          callback(new Error('请输入账号'));
        } else if(regExp.test(value) === false) {
            callback(new Error('请输入正确格式的账号'));
          }
        else {
        if (this.ruleForm2.checkPwd !== '') {
          this.$refs.ruleForm2.validateField('checkPwd')
        }
          callback();
     }
      };
      var validatePwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } 
        else {
          callback();
        }
      };
      return {
        ruleForm2: {
          account: '',
          checkPwd: '',
          code: ''
        },
        rules2: {
          account: [
            { validator: validateAccount, trigger: 'blur' }
          ],
          checkPwd: [
            { validator: validatePwd, trigger: 'blur' }
          ],
          code: [
            { validator: checkCode, trigger: 'blur' }
          ]
        }
      };
    },
    store,
    methods: {
      submitForm(formName) {
        var vm = this.ruleForm2;
        console.log(this.role);
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var check = -1;
            if(vm.code !== 'aaaa'){
              alert('验证码输入错误！');
            }
            else if(this.role === 'student'){
              console.log('Student login');
              this.$http.post('/api/check', {
                student_id: vm.account,
                student_password: vm.checkPwd,
                type: this.role
              },{}).then((response) => {
                check = response.body[1];
                if(check === 0){
                  alert('学生成功登录');
                  store.state.student_id = vm.account;
                  this.$router.push({path:'/student_index'});
                }
                else{
                  alert('账号或密码错误');
                }
                console.log(check);
              })
            }
            else if(this.role === 'teacher'){
              console.log('Teacher login');
              this.$http.post('/api/check', {
                teacher_id: vm.account,
                teacher_password: vm.checkPwd,
                type: this.role
              },{}).then((response) => {
                check = response.body[1];
                if(check === 0){
                  alert('教师成功登录');
                  store.state.teacher_id = vm.account;
                  this.$router.push({path:'/teacher_index'});
                }
                else{
                  alert('账号或密码错误');
                }
                console.log(check);
              })
            }
            else if(this.role === 'admin'){
              console.log('Admin login');
              this.$http.post('/api/check', {
                  admin_id: vm.account,
                  admin_password: vm.checkPwd,
                  type: this.role
              },{}).then((response) => {
                check = response.body[1];
                if(check === 0){
                  alert('管理员成功登录');
                  store.state.admin_id = vm.account;
                  this.$router.push({path:'/admin_index'});
                }
                else{
                  alert('账号或密码错误');
                }
                console.log(check);
              })
            }
            else {
              alert('error submit!!');
              console.log('error submit!!');
            }
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted(){
        var self = this;
        communication.$on("role_choice", function(role){
            self.role=role;
        })
}

  }
</script>