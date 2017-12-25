<template>
  <div id="course_studentTable">
      
      

     <!-- <el-row type="flex" justify="center"> -->
       <el-table :data="tableData" border>
         <el-table-column prop="studentNumber" label="学号" width="150">
         </el-table-column>

         <el-table-column prop="name" label="姓名" width="100">
         </el-table-column>

         <el-table-column prop="academy" label="学院" width="200">
         </el-table-column>

         <el-table-column prop="department" label="专业" width="200">
         </el-table-column>

          <el-table-column prop="class" label="班级" width="80">
          </el-table-column>

           <el-table-column prop="grade" label="成绩" width="80">
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
//import store from '../vuex/teacher/store'
export default { 
    name: 'course_studentTable',
   // store,
   data(){
       return{
           dialogFormVisible: false,
           formLabelWidth: '120px',
           form: {
               studentNumber:'',
          name: '',
          academy:'',
          department: '',
          class: '',
          grade:'',
         
        },

           
           tableData:[{
                studentNumber:'201530612804',
          name: '张三',
          academy:'软件学院',
          department: '软件工程',
          class: '4班',
          grade:'98',
               
           }]

           }

       }
   }
    
    

</script>