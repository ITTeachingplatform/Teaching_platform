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

  <!-- <el-row type="flex" justify="start">
  <el-form-item label="验证码" prop="code">
    <el-input v-model="ruleForm2.code" style="width:100px"></el-input>
  </el-form-item>
</el-row> -->

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
            //   console.log(vm.account + ' ' + vm.checkPwd + ' ' + vm.code);
            vm.code='aaaa'
            if(vm.code !== 'aaaa'){
                alert('验证码输入错误！');
                return false;
            }
            if(this.role === 'student' && vm.account === '11111' && vm.checkPwd === '12345'){
                alert('成功登录学生入口!');
                return true;
            }
            else if(this.role === 'teacher' && vm.account === '22222' && vm.checkPwd === '12345'){
                alert('成功登录教师入口');
                return true;
            }
            else if(this.role === 'admin'){
                //测试一下state的获取
                // var Admin = new AdminService();
                // var Admin_arr = [];
                // Admin.load_admin(Admin_arr);
                // console.log(Admin_arr);
                console.log('Testing');
                var check = -1;
                this.$http.post('/api/check', {
                    admin_id: vm.account,
                    admin_password: vm.checkPwd
                  },{}).then((response) => {
                    // console.log(response.body[0]);
                    check = response.body[1];
                     if(check === 0){
                  alert('成功登录管理员入口');
                  store.state.admin_id = vm.account;
                  this.$router.push({path:'/admin_index'});
                }
                    console.log(check);
                  })
          
            }
          } else {
            console.log('error submit!!');
            return false;
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