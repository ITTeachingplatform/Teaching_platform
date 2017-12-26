// 发布帖子
<template>
    <div id="homework">
        <el-row type='flex' justify="center">
            <div style="width:900px">
                <el-row style="font-size:40px;margin-top:20px;">2017:{{homeworkName}}</el-row>
                
                <!-- Form -->
                <el-form :model="form" :rules="rules" ref="form" style="margin-top:20px;float:left" class="demo-ruleForm">
                    <el-row style="float:left">
                        <el-form-item label="截止时间" prop="title" :label-width="formLabelWidth" style="float:left">
                        <el-input v-model="form.tital" auto-complete="off" ></el-input>
                        </el-form-item>                               
                    </el-row>

                    <el-row>
                        <el-form-item label="内容" prop="content" :label-width="formLabelWidth" style="float:left">
                        <el-input v-model="form.content" auto-complete="off" type="textarea":rows="6" style="width:500px"></el-input>
                        </el-form-item>                        
                    </el-row>
                    
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('form')">修改</el-button>
                        <el-button @click="back">返回</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-row>
    </div>
</template>

<script>
export default {
    name:'homework',
    props:['path'],
    data() {
      return {
        form: {
          title: '',
          tab: '',
          type: [],
          content:''
        },
        rules: {
          title: [
            { required: true, message: '请输入标题', trigger: 'blur' },
            { min: 5, max: 25, message: '长度在 5 到 25 个字符', trigger: 'blur' }
          ],
          tab: [
            { required: true, message: '请选择标签', trigger: 'change' }
          ],
          content: [
            { required: true, message: '请填写正文内容', trigger: 'blur' },
            { min: 20, max: 200, message: '长度在 20 到 200 个字符', trigger: 'blur' }
          ],
        },
        formLabelWidth: '120px',
        homeworkName:"第一章作业",
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
                alert('成功发布讨论！');
            } else {
                alert('请填写完整的信息！');
                return false;
            }
            });
            
        },
    },
}
</script>

<style>

</style>
