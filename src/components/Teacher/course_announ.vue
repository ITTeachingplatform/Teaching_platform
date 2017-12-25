<template>
  <div id="course_announ">
      

     <!-- <el-row type="flex" justify="center"> -->
       <el-table :data="tableData" >
         <el-table-column prop="announce" label="通知" width="300">
         </el-table-column>

         <el-table-column prop="date" label="日期" width="500">
         </el-table-column>

         <el-table-column label="操作" >
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.$index,scope.row)" type="text" size="small">查看</el-button>
          </template>
         </el-table-column>

         </el-table-column>
       </el-table>
    <!-- </el-row>    -->
    <el-button type="primary" style="margin-top:20px" @click="dialogFormVisible=true">新建通知</el-button>
    

    <!-- 新建通知的对话框 -->
    <el-dialog title="新建通知" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input v-model="form.title" auto-complete="off"></el-input>
        </el-form-item> 
        <el-form-item label="正文" :label-width="formLabelWidth">
          <el-input v-model="form.content" auto-complete="off"></el-input>
        </el-form-item>        
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 查看每个公告的对话框 -->
    <el-dialog title="查看公告" :visible.sync="lookVisible">
      <el-form :model="form">
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
      </div>


    </el-dialog>



  
  
  </div>
</template>


<script>
//import store from '../vuex/teacher/store'
export default { 
    name: 'course_announ',
   // store,
   data(){
       return{
           dialogFormVisible: false,
           lookVisible:false,
           formLabelWidth: '120px',
           form: {
          title: '',
          content: '',       
           },
           tableData:[{
               announce:'国庆调课通知',
               date:'2017/09/15',
           },{
               announce:'教室调整通知',
               date:'2017/09/20',
           }]

        }

       },
       methods: {
         handleClick(index,row) {
           this.lookVisible=true;
           console.log(index,row);
         },
       }
   }
    
    

</script>