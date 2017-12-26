<template>
<div id='publish_announce'>
          <Admin activeIndex='3'> </Admin>
  <el-row style="font-size:50px;margin-top:20px">
        发布公告
</el-row>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="margin-left:20%;margin-right:20%;margin-top:15px">
  <el-form-item label="标题" prop="title">
    <el-input v-model="ruleForm.title"></el-input>
  </el-form-item>
  <el-form-item label="公告类型" prop="announce_type">
    <el-select v-model="ruleForm.announce_type" placeholder="请选择公告类型" style="width:100%">
      <el-option label="系统公告/XXX公告" value="0"></el-option>
      <el-option label="教学公告" value="1"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="课程ID">
    <el-input v-model="ruleForm.course_ID"></el-input>
  </el-form-item>
  <el-form-item label="正文" prop="announcement">
    <el-input type="textarea" :rows="14" v-model="ruleForm.announcement"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即发布</el-button>
    <el-button @click="resetForm('ruleForm')">清空</el-button>
     <router-link to="/admin/manage_announce"><el-button>返回</el-button></router-link>
  </el-form-item>
</el-form>
</div>  
</template>
<script>
import Admin from '../Admin'
export default {
    name: 'publish_announce',
    components: {
        'Admin': Admin
    },
    data() {
      return {
        ruleForm: {
          title: '',
          announce_type: '0',
          announcement: '',
          content: '',
          course_ID:'CO000003',
        },
        course_Visible:false,
        rules: {
          title: [
            { required: true, message: '请输入标题名称', trigger: 'blur' },
            { min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur' }
          ],
          announce_type: [
            { required: true, message: '请选择公告类型', trigger: 'change' }
          ],
          announcement: [
            { required: true, message: '请填写正文内容', trigger: 'blur' },
            { min: 20, max: 200, message: '长度在 20 到 200 个字符', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           this.$confirm('确认发布公告？')
          .then(_ => {
            // done();
           this.add_ann();
          })
          .catch(_ => {});
          } else {
            alert('请填写完整的相关信息！');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
            add_ann(){
              console.log(this.ruleForm)
          this.$http.post('/api/add_announcement', {
          //  announcement_title,announcement_date,sys_ann_publisher
                    publisher_ID: 'AD000001',
                    flag:this.ruleForm.announce_type,
                    title:this.ruleForm.title,
                    content:this.ruleForm.announcement,
                    course_ID: this.ruleForm.course_ID
                  },{}).then((response) => {
                      var result = response.body;
                      if(result[1]===0){
                        alert('发表公告成功，新增ID号为：'+result[0]);
                        this.$router.push({path:'/admin/manage_announce'});
                      }
                      else{
                        alert('公告发表失败，请确认填写信息是否完整！');
                      }

                    })
      }
    }
  }

</script>
