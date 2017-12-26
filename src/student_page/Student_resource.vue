<template>
  <div id="student_resource"  align="center">
    <Student activeIndex='3'></Student>
    <div class="container">
      <el-row style="font-size:50px;margin-top:20px">课程资源</el-row>
      <el-row type="flex" justify="center" >
        <div class="block" style="width:900px;margin-top:10px;margin-bottom:10px">
          <el-card class="box-card" style='width:900px'>
          <div slot="header" class="clearfix">
            <span>搜索框</span>
          </div>
          <el-form :model="validateForm" ref="validateForm" :rules="rules" label-width="100px" class="demo-ruleForm">
            <!--row 1-->
            <el-row type="flex" justify="start" :gutter="20">
              <el-col :span="16">
                <el-form-item label="文件关键词" prop="keyword" :rules="[]">
                  <el-input type="keyword" v-model="validateForm.keyword" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="资源类型" prop="file_type" :rules="[{required:true}]">
                  <el-radio v-model="validateForm.file_type" label="1">题库</el-radio>
                  <el-radio v-model="validateForm.file_type" label="2">教学资源</el-radio>
                </el-form-item>
              </el-col>
            </el-row>
            <!--row 2-->
            <el-row type="flex" justify="start" :gutter="20">
              <el-col :span="14">
                <el-form-item label="课程名称" prop="course_name" :rules="[]">
                  <el-input type="course_name" v-model="validateForm.course_name" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="发布时间" prop="date" :rule="[]">
                  <el-date-picker type="date" v-model="validateForm.date" placeholder="选择日期" value-format="yyyy-MM-dd" @change="dateChange" auto-complete="off"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>

          <el-row type="flex" justify="center">
            <el-button style='width:150px' type="primary" @click="search_file">搜索</el-button>
            <el-button style='width:150px;margin-left:40px' @click="resetForm(validateForm)">重置</el-button>
          </el-row>
          </el-card>
        </div>
      </el-row>
      <el-progress :percentage="100" :show-text="false"></el-progress>
      <!--Category bar-->
      <el-row type="flex" justify="center" >
        <div class="b" style="width:900px;margin-top:10px">
          <el-table ref="singleTable" :data="tableData"  tooltip-effect="dark" style="width:100%margin-top:20px;text-align:left;" highlight-current-row @current-change="handleCurrentChange">
            
            <el-table-column label="标题" width="200px">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.name  }}</span>
              </template>
            </el-table-column>
            <el-table-column label="上传时间" width="150px">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>

            <el-table-column label="课程名称" prop="course_name" width="180px">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.course_name }}</span>
              </template>
            </el-table-column>

            <el-table-column label="类别" prop="file_type" width="100px">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.file_type }}</span>
              </template>
            </el-table-column>

            <el-table-column label="文件大小" prop="size" width="100px">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.size }}</span>
              </template>
            </el-table-column>

            <el-table-column label="下载数" prop="download_num" width="100px">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.download_num }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" >
              <template slot-scope="scope">
                <el-button @click="centerDialogVisible = true" type="primary" size="mini" round>下载</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-row>
    </div>
    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%">
      <span>开始下载！</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Student from '../components/Student/Student.vue';
import store from '../vuex/student/store';
export default {
    name: 'student_resource',
      components: {
        'Student': Student,
      },
    data() {
      return {
        centerDialogVisible: false,
        rules: {

        },
        search_date: '',
        validateForm: {
          keyword: '',
          file_type: '1',
          date: '',
          course_name: '',
        },
        tableData: [],
        currentRow: null
      }
    },
    mounted (){
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.search_date=''
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      },
      search_file(){
        this.tableData=[];
         console.log(this.search_date);
         this.$http.post('/api/get/search_file', {
            student_id: store.state.student_account.id,
            file_name: this.validateForm.keyword,
            date: this.search_date,
            course_name: this.validateForm.course_name,
            type: this.validateForm.file_type
          },{}).then((response) => {
            console.log(response.body[0]);
            var file_list = response.body[0];
            if(this.validateForm.file_type === '1'){
              for(var i in file_list){
                var t = new Array()
                t['name']=file_list[i].bank_name;
                t['date']=file_list[i].bank_up_date;
                t['course_name']=file_list[i].course_name;
                t['file_type']='题库';
                t['size']=file_list[i].bank_size;
                t['download_num']=file_list[i].bank_download_num;
                this.tableData.push(t);
              }
            }
            else{
              for(var i in file_list){
                var t = new Array()
                t['name']=file_list[i].resource_name;
                t['date']=file_list[i].resource_date;
                t['course_name']=file_list[i].course_name;
                t['file_type']='教学资源';
                t['size']=file_list[i].resource_size;
                t['download_num']=file_list[i].resource_downloads;
                this.tableData.push(t)
                }
            }
          })
      },
      dateChange(val){
        console.log(val)
        var origin = val.replace(/-/g,'');
        origin = parseInt(origin) + 1;
        this.search_date = origin.toString();
      },
    }

}
</script>

<style scoped>
  .container {
    width:900px;
  }
</style>