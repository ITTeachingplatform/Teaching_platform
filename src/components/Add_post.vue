// 发布帖子
<template>
    <div id="add_post">
        <el-row type='flex' justify="center">
            <div style="width:900px">
                <el-row style="font-size:50px;margin-top:20px">发布讨论</el-row>
                <el-progress :percentage="100" :show-text="false"></el-progress>
                <!-- Form -->
                <el-form :model="form" :rules="rules" ref="form" style="margin-top:20px" class="demo-ruleForm">
                    <el-row >
                        <el-form-item label="标题" prop="title" :label-width="formLabelWidth" style="float:left">
                        <el-input v-model="form.title" auto-complete="off" style="width:300px"></el-input>
                        </el-form-item>
                        <el-form-item label="标签" prop="tab" :label-width="formLabelWidth"style="float:left">
                        <el-input v-model="form.tab" auto-complete="off" style="width:300px"></el-input>
                        </el-form-item>                       
                    </el-row>
                    <el-row>
                        <el-form-item label="内容" prop="content" :label-width="formLabelWidth">
                        <el-input v-model="form.content" auto-complete="off" type="textarea":rows="6"></el-input>
                        </el-form-item>                        
                    </el-row>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('form')">发 布</el-button>
                        <el-button @click="back">取 消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-row>
    </div>
</template>

<script>
export default {
    name:'Add_post',
    props:['path'],
    data() {
      return {
        form: {
          title: '',
          tab: '',
          content:''
        },
        rules: {
          title: [
          ],
          tab: [
            { required: true, message: '请填写标签', trigger: 'change' }
          ],
          content: [
            { required: true, message: '请填写正文内容', trigger: 'blur' },
            { min: 20, max: 200, message: '长度在 20 到 200 个字符', trigger: 'blur' }
          ],
        },
        formLabelWidth: '120px',
      };
    },
    methods:{
        back(){
                this.$router.go(-1);    //相当于浏览器的后退
            ;
        },
        submitForm(formName){
            this.$refs[formName].validate((valid) => {
            if (valid) {
                 // add_one_post(post_label,post_title,post_content,post_starter,result)
           this.$http.post('/api/add_post', {
                   post_title: this.form.title,
                    post_content:this.form.content,
                    post_label: this.form.tab,
                    post_starter:'管理员'
                  },{}).then((response) => {
                    var result = response.body;
                    if(result[1] === 0){
                        alert('成功发布讨论，ID号为：' + result[0]);
                        this.$router.push({path:'/admin/manage_discussion'});
                    }
                    else{
                        alert('发布讨论失败，请确认信息是否填写正确！');
                    }
                    return true;
                  })
            } else {
                alert('请填写完整的信息再发布！');
                return false;
            }
            });
            
        },
    },
}
</script>

<style>

</style>
