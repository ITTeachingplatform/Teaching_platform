// 发布帖子
<template>
    <div id="homework">
        <el-row type='flex' justify="center">
            <div style="width:900px">
                <el-row style="font-size:40px;margin-top:20px;float:left">2017:{{homeworkName}}</el-row>
                
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


<!-- 作业 -->
        <el-row type='flex' justify="center">
            <div style="width:900px">
                <el-row style="font-size:40px;margin-top:20px;float:left">作业批改</el-row>
                <el-table :data="tableData" style="100%">
                    <el-table-column prop="name" label="姓名" >
                    </el-table-column>

                    <el-table-column prop="academy" label="学院">
                    </el-table-column>

                    <el-table-column prop="major" label="专业">
                    </el-table-column>

                    <el-table-column prop="class" label="班级">
                    </el-table-column>

                    <el-table-column prop="boolPub" label="是否提交">
                    </el-table-column>

                    <el-table-column prop="grade" label="成绩">
                    </el-table-column>

                    <el-table-column type="selection" ></el-table-column>

                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.$index,scope.row)" type="text" size="small">查看</el-button>
                        </template>
                    </el-table-column>
                </el-table>

<!-- 查看每个作业 -->
                <el-dialog title="查看作业" :visible.sync="lookVisible">
                    <!-- <el-form :model="form">
                        
                        <el-form-item label="公告名称" :label-width="formLabelWidth">
                            <el-input v-model="form.title" auto-complate="off" style="width:300px;;float:left"></el-input>
                        </el-form-item>

                        <el-form-item label="公告内容" :label-width="formLabelWidth">
                            <el-input type="textarea" :rows="6" v-model="textarea" style="width:400px;;float:left"></el-input>
                        </el-form-item>
                    </el-form>

                    <div slot="footer" class="dialog-footer">
                        <el-button @click="lookVisible=false">取消</el-button>
                        <el-button type="primary" @click="dialogFormVisible=false">修改</el-button>
                    </div> -->
               </el-dialog>

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
          lookVisible:false,
        form: {
          title: '',
          tab: '',
          type: [],
          content:''
        },
        tableData:[{
            name:'张三',
            academy:'软件学院',
            major:'软件工程',
            class:'15级4班',
            boolPub:true,
            grade:89,
        },{
            name:'李四',
            academy:'软件学院',
            major:'软件工程',
            class:'15级4班',
            boolPub:false,
            grade:'',
        }],
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
        handleClick(index,row){
            this.lookVisible=true;
            console.log(index,row);
        },
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
