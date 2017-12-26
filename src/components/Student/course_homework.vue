<template>
  <div id="course_homework">
    <el-table :data="tableData" style="width: 100%;margin-top:20px;text-align:left;">
          <el-table-column label="标题" width="250px">
            <template slot-scope="scope">
              <span style="margin-left: 10px"  >{{ scope.row.homework_name }}</span>
              </template>
          </el-table-column>
          <el-table-column label="所属课程" width="150px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.homework_t_class_belong }}</span></template>
          </el-table-column>
          <el-table-column label="发布时间(年月日)" width="150px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.homework_up_date }}</span></template>
          </el-table-column>
          <el-table-column label="截止时间(年月日)" width="150px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.homework_down_date }}</span></template>
          </el-table-column>
          <el-table-column label="课程分数" width="100px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.s_homework_score }}</span></template>
          </el-table-column>
          <el-table-column label="操作" >
            <template slot-scope="scope">
              <el-button @click="showDialog(scope.$index)" type="primary" size="mini" round>查看详细</el-button>
            </template>
         </el-table-column>
        </el-table>
    
    <!-- 查看每个作业的对话框 -->
    <div>
      <el-dialog  :visible.sync="centerDialogVisible" width="80%" center>
        <el-form label-width="100px" :data="dialogForm">
          <el-row><h1 align=center>{{dialogForm.title}}</h1></el-row>
          <div style="margin: 20px 0;"></div>
          <el-form-item label="所属课程">
            <el-input type="text" id="textcolor" :disabled="true" v-model="dialogForm.class_belong"></el-input>
          </el-form-item>
          <div style="margin: 20px 0;"></div>
          <el-form-item label="发布时间">
            <el-input type="text" id="textcolor" :disabled="true" v-model="dialogForm.up_date"></el-input>
          </el-form-item>
          <div style="margin: 20px 0;"></div>
          <el-form-item label="截止时间">
            <el-input type="text" id="textcolor" :disabled="true" v-model="dialogForm.down_date"></el-input>
          </el-form-item>
          <div style="margin: 20px 0;"></div>
          <el-form-item label="作业内容">
            <el-input type="textarea" id="textcolor" autosize :disabled="true" v-model="dialogForm.content"></el-input>
          </el-form-item>
          <div style="margin: 20px 0;"></div>
          <el-form-item label="作答内容">
            <el-input type="textarea" autosize v-model="dialogForm.s_content"></el-input>
          </el-form-item>
          <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible=false">取 消</el-button>
            <el-button type="primary" @click="centerDialogVisible = false">提交作业</el-button>
          </span>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import store from '../../vuex/student/store';
export default { 
    name: 'course_homework',
   data(){
      return{
        centerDialogVisible: false,
        tableData:[],
        dialogForm:{
          title:'',
          content:'',
          s_content:'',
          up_date: '',
          down_date: '', 
          class_belong: '', 

        },
        one_course_ID: this.$route.params.course_id,
      }
       },
       mounted () {
        this.$http.post('/api/get/one_Course_allhomework', {
          student_id: store.state.student_account.id,
          course_ID: this.one_course_ID
        },{}).then((response) => {
          console.log(response.body);
          var homework_list = response.body[0];
          // console.log(homework_list);
          for(var i in homework_list){
            var t = new Array()
            t['homework_name']=homework_list[i].homework_name;
            t['homework_up_date']=homework_list[i].homework_up_date;
            t['homework_down_date']=homework_list[i].homework_down_date;
            t['homework_t_class_belong']=homework_list[i].homework_t_class_belong;
            t['homework_content']=homework_list[i].homework_content;
            t['s_homework_content']=homework_list[i].s_homework_content;
            t['s_homework_score']=homework_list[i].s_homework_score;
            this.tableData.push(t)
          }
        })
      }, 
       methods: {
         showDialog(index){
        this.centerDialogVisible=true;
        this.dialogForm.title=this.tableData[index].homework_name;
        this.dialogForm.up_date=this.tableData[index].homework_up_date;
        this.dialogForm.down_date=this.tableData[index].homework_down_date;
        this.dialogForm.content=this.tableData[index].homework_content;
        this.dialogForm.s_content=this.tableData[index].s_homework_content;
        this.dialogForm.class_belong=this.tableData[index].homework_t_class_belong;
      },
       }
   }
</script>

<style>
.text {
    font-size: 14px;
}

.item {
  padding: 18px 0;
}
#textcolor{
  background-color: white;
  color: black;
}
</style>