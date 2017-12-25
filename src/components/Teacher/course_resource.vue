<template>
  <div id="course_resource">
  

  <el-table :data="tableData" border>
         <el-table-column prop="title" label="标题" >
         </el-table-column>

         <el-table-column prop="size" label="大小" width="100">
         </el-table-column>

         <el-table-column prop="date" label="上传时间" width="200">
         </el-table-column>

         <el-table-column prop="downloadtimes" label="下载次数" width="100">
         </el-table-column>

         <el-table-column type="selection" width="50"></el-table-column>

  
       </el-table>

       <el-button type="primary" style="margin-top:20px" @click="dialogFormVisible=true">上传</el-button>
       <el-button style="margin-top:20px">下载</el-button>
       <el-button style="margin-top:20px">删除</el-button>
       
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
  </div>
</template>

<script>
//import store from '../vuex/teacher/store'
export default { 
   // name: 'course_announ'
   // store,
 
    data() {
      return {
         
           dialogFormVisible: false,
           formLabelWidth: '120px',
           form: {
          title: '',
          size:'',
          publishdate: '',
          downloadtimes: '',

         
        },

           
           tableData:[{
               title:'需求文档',
               size:'3.5M',
               date:'2017/09/12',
               downloadtimes:62,

               
           },{
               title:'概要设计',
               size:'4.3M',
               date:'2017/09/14',
               downloadtimes:55,

           }]

           }

       }
   }
    
    

</script>