<template>
  <div id="course_homework">
      
      

     <!-- <el-row type="flex" justify="center"> -->
       <el-table :data="tableData" border>
          <el-table-column label="标题" width="250px">
            <template slot-scope="scope">
              <span style="margin-left: 10px"  >{{ scope.row.homework_name }}</span>
              </template>
          </el-table-column>
          <el-table-column label="发布人" width="150px">
            <template slot-scope="scope">
              <!-- <span style="margin-left: 10px">{{ scope.row.homework_t_class_belong }}</span> -->
              </template>
          </el-table-column>
          <el-table-column label="发布时间(年月日)" width="150px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.homework_up_date }}</span></template>
          </el-table-column>
          <el-table-column label="截止时间(年月日)" width="150px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.homework_down_date }}</span></template>
          </el-table-column>
          <el-table-column label="总人数" width="100px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.s_homework_score }}</span></template>
          </el-table-column>
          <el-table-column label="提交人数" width="100px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.s_homework_score }}</span></template>
          </el-table-column>
          <!-- <el-table-column label="操作" >
            <template slot-scope="scope">
              <el-button @click="showDialog(scope.$index)" type="primary" size="mini" round>查看详细</el-button>
            </template>
         </el-table-column> -->

           <!-- <el-table-column type="selection" width="50"></el-table-column> -->

          <el-table-column label="操作">
            <template slot-scope="scope">
               <router-link to="/teacher/homework"><el-button type="text" size="small">查看</el-button></router-link>
            </template>
          </el-table-column>

       </el-table>

       <el-button type="primary" style="margin-top:20px" @click="dialogFormVisible=true">发布</el-button>
       
       



       <el-dialog title="发布作业" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="标题" :label-width="formLabelWidth">
      <el-input v-model="form.name" auto-complete="off"></el-input>
    </el-form-item>

    <el-form-item label="发布日期" :label-width="formLabelWidth">
      <el-date-picker type="date" placeholder="选择" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-form-item>

    <el-form-item label="截止日期" :label-width="formLabelWidth">
      <el-date-picker type="date" placeholder="选择" v-model="form.date2" style="width: 100%;"></el-date-picker>
    </el-form-item>

    <el-form-item label="发布人" :label-width="formLabelWidth">
      <el-input v-model="form.name" auto-complete="off"></el-input>
    </el-form-item>
      

    <el-form-item label="内容" :label-width="formLabelWidth">
    <el-input v-model="form.content" auto-complete="off"></el-input>
    </el-form-item>

    
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>


        
    
       


      
       <!-- <el-button style="margin-top:20px">删除</el-button> -->
    <!-- </el-row>    -->
  </div>
</template>


<script>
import store from '../../vuex/teacher/store'
export default { 
    name: 'course_homework',
   // store,
   data(){
       return{
         course_ID:'',
           dialogFormVisible: false,
           formLabelWidth: '120px',
           form: {
          name: '',
          content:'',
          date1: '',
          date2: '',
         
        },
           tableData:[]

           }

       },
       mounted () {  
        this.$http.post('/api/get/one_teacher_one_Course_allhomework', {
          teacher_id: store.state.teacher_account.id,
          course_ID: this.$route.params.course_id
        },{}).then((response) => {
          console.log(response.body);
          var homework_list = response.body[0];
          console.log(homework_list);
          for(var i in homework_list){
            var t = new Array()
            t['homework_name']=homework_list[i].homework_name;
            t['homework_up_date']=homework_list[i].homework_up_date;
            t['homework_down_date']=homework_list[i].homework_down_date;
            // t['homework_t_class_belong']=homework_list[i].homework_t_class_belong;
            t['homework_content']=homework_list[i].homework_content;
            t['s_homework_content']=homework_list[i].s_homework_content;
            // t['s_homework_score']=homework_list[i].s_homework_score;
            this.tableData.push(t)
          }
        })
      }, 
      
   }
    
    

</script>