<template>
  <div id="teacher_personal">
      <Teacher activeIndex='5'></Teacher>
      <el-row type="flex" justify="center" style="font-size:40px;margin-top:20px;margin-bottom:10px;">个人中心</el-row>
      <el-row type='flex' justify="center">
        <div class="block" style="width:900px;margin-top:10px">
          <el-progress :percentage="100" :show-text="false"></el-progress>
          <el-row type="flex" class="row-bg"  style="margin-top:15px;">
            <el-col :span="8">

                </el-col>
            <el-col :span="10">
              <div class="grid-content">
                <!-- 表单 -->
                <el-form ref="form" :model="form" label-width="80px">
                  <el-form-item label="姓名"><div align="left">{{form.name}}</div></el-form-item>
                  <el-form-item label="工号"><div align="left">{{form.id}}</div></el-form-item>
                  <el-form-item label="院系"><div align="left">{{form.faculty}}</div></el-form-item>
                  <el-form-item label="邮箱" prop="email">
                    <el-input v-model="form.email" placeholder="请输入邮箱" :disabled=dis></el-input>
                  </el-form-item>
                  <el-form-item label="个人简介" prop="introduction">
                    <el-input
                      type="textarea"
                      :rows="5"
                      :disabled=dis
                      placeholder="请输入个人简介"
                      v-model="form.introduction">
                    </el-input>
                  </el-form-item>
                </el-form>
                <div v-if="dis">
                  <el-button type="primary" style="margin-top:5px;" @click="dis = false">修改资料</el-button>
                  <el-button style="margin-top:5px;" @click="changePassword">修改密码</el-button>
                </div>
                <div v-else>
                  <el-button type="primary" style="margin-top:5px;" @click="saveMessage">保 存</el-button>
                  <el-button style="margin-top:5px;" @click="cancelChangeMessage()">取 消</el-button>                  
                </div>
                </div>
                </el-col>
          </el-row>
        </div>
      </el-row>
      <!-- 修改密码 -->
      <div id="changePassword">
        <el-dialog title="修改密码" :visible.sync="dialogFormVisible">
          <el-form :model="passwordForm" ref="passwordForm" :rules="rules" class="demo-ruleForm">
            <el-form-item label="原密码" :label-width="formLabelWidth" prop="old_password">
              <el-input type="password" v-model="passwordForm.old_password" placeholder="请输入原密码" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="新密码" :label-width="formLabelWidth" prop="new_password1"> 
              <el-input type="password" v-model="passwordForm.new_password1" placeholder="请输入新密码" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认新密码" :label-width="formLabelWidth" prop="new_password2">
              <el-input type="password" v-model="passwordForm.new_password2" placeholder="请输入新密码" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="cancelChangePassword">取 消</el-button>
            <el-button type="primary" @click="submitForm('passwordForm')">确 定</el-button>
          </div>
        </el-dialog>
      </div>
  </div>
</template>

<script>
import Teacher from '../components/Teacher/Teacher.vue';
import store from '../vuex/teacher/store'
export default {
    name: 'teacher_personal',
    data() {
       var checkPassword = (rule, value, callback) => {
          this.$http.post('/api/load_one_teacher', {
              teacher_id: store.state.teacher_account.id
              },{}).then((response) => {
                    // console.log(store.state.teacher_account.id);
              var t = response.body[0];
              var pw =t.passwd;
              // console.log(t.passwd);              
              if (!value) {
                return callback(new Error('密码不能为空'));
              }else {
              if(value !== pw){
                console.log('密码：'+pw);
                return callback(new Error('密码不正确！'))
              }else
              callback();
          }              
        })
      };
        var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.passwordForm.new_password2 !== '') {
            this.$refs.passwordForm.validateField('new_password2');
          }
          callback();
        }
      };
       var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.passwordForm.new_password1) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        dialogFormVisible:false,
        form: {
          name:'',
          id:'',
          faculty:'',
          email: '',
          introduction: '',
        },
        passwordForm:{
          old_password:'',
          new_password1:'',
          new_password2:'',
        },
        dis:true,
        password:'',
        final_password:'',
        formLabelWidth: '120px',
        rules:{
          old_password: [
            { validator: checkPassword, trigger: 'blur' }
          ],
          new_password1: [
            { validator: validatePass, trigger: 'blur' }
          ],
          new_password2: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
      }
    },
    mounted(){
                this.$http.post('/api/load_one_teacher', {
                    teacher_id: store.state.teacher_account.id
                  },{}).then((response) => {
                    console.log(response.body);
                    console.log(store.state.teacher_account.id);
                    var teacher_mes = response.body[0];
                    this.form.name=teacher_mes.teacher_name;
                    this.form.id=teacher_mes.teacher_ID;
                    this.form.faculty=teacher_mes.faculty_working;
                    this.form.introduction=teacher_mes.teacher_introduction;
                    this.form.email=teacher_mes.teacher_email;
                    // this.password=teacher_mes.passwd;
                  })
    },
    components: {
        'Teacher': Teacher,
    },
    methods: {
      cancelChangeMessage(){
        this.dis=true;
        // this.$refs[formName].resetFields();
      },
          saveMessage(){
            this.dis=true;
                    this.$http.post('/api/modify_one_teacher', {
                    teacher_id: store.state.teacher_account.id,
                    teacher_password:'',
                    teacher_emal:this.form.email,
                    teacher_introduction:this.form.introduction,
                  },{}).then((response) => {
                    // console.log(response.body);
                    // console.log(store.state.teacher_account.id);
                    // var teacher_mes = response.body[0];
                    // this.form.name=teacher_mes.teacher_name;
                    // this.form.id=teacher_mes.teacher_ID;
                    // this.form.faculty=teacher_mes.faculty_working;
                    // this.form.introduction=teacher_mes.teacher_introduction;
                    // this.form.email=teacher_mes.teacher_email;
                  })        
                  alert("修改信息成功！");  
          },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      changePassword(){
        this.dialogFormVisible=true;
      },
      cancelChangePassword(){
        this.dialogFormVisible=false
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
                    this.$http.post('/api/modify_one_teacher', {
                    teacher_id: store.state.teacher_account.id,
                    teacher_password:this.passwordForm.new_password1,
                    teacher_emal:'',
                    teacher_introduction:'',
                  },{}).then((response) => {
                  })
            this.dialogFormVisible=false; 
            this.$refs[formName].resetFields();       
            alert('修改密码成功!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
   },
   }
      
</script>

<style scpoed>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
