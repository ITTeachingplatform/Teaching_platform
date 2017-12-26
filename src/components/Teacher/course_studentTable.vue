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

        <el-button type="primary" style="margin-top:20px" @click="dialogFormVisible=true">导出</el-button>
       
       <!-- 导出学生对话框 -->
          <el-dialog title="导出学生" :visible.sync="dialogFormVisible">
            <span>是否导出学生?</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible=false">取消</el-button>
              <el-button type="primary" @click="dialogFormVisible=false">确定</el-button>
            </span>
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