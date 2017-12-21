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
                        <el-input v-model="form.tital" auto-complete="off" style="width:300px"></el-input>
                        </el-form-item>
                        <el-form-item label="标签" prop="tab" :label-width="formLabelWidth"style="float:left">
                        <el-select v-model="form.tab" placeholder="请选择标签">
                            <el-option label="课程1" value="tab1"></el-option>
                            <el-option label="课程2" value="tab2"></el-option>
                        </el-select>
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
