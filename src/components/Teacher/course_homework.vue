<template>
  <div id="course_homework">
      
      

     <!-- <el-row type="flex" justify="center"> -->
       <el-table :data="tableData" border>
         <el-table-column prop="title" label="标题" width="150">
         </el-table-column>

         <el-table-column prop="publishdate" label="发布日期" width="200">
         </el-table-column>

         <el-table-column prop="duedate" label="截止日期" width="200">
         </el-table-column>

         <el-table-column prop="publisher" label="发布人" width="100">
         </el-table-column>

          <el-table-column prop="totalnum" label="总人数" width="80">
          </el-table-column>

           <el-table-column prop="handlenum" label="提交人数" width="80">
           </el-table-column>

           <el-table-column type="selection" width="50"></el-table-column>

  
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
//import store from '../vuex/teacher/store'
export default { 
    name: 'course_homework',
   // store,
   data(){
       return{
           dialogFormVisible: false,
           formLabelWidth: '120px',
           form: {
          name: '',
          content:'',
          date1: '',
          date2: '',
         
        },

           
           tableData:[{
               title:'第1章作业',
               publishdate:'2017/09/15',
               duedate:'2017/9/22',
               publisher:'李红',
               totalnum:'87',
               handlenum:58
               
           },{
               title:'第2章作业',
               publishdate:'2017/09/14',
               duedate:'2017/9/25',
               publisher:'李红',
               totalnum:87,
               handlenum:0

           }]

           }

       }
   }
    
    

</script>