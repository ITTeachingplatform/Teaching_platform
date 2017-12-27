<template>
  <div id="course_resource">
  

  <el-table :data="tableData" border>
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

         <el-table-column type="selection" width="50"></el-table-column>

  
       </el-table>

       <el-button type="primary" style="margin-top:20px" @click="dialogFormVisible=true">上传</el-button>
       <el-button style="margin-top:20px" @click="centerDialogVisible = true">下载</el-button>
       <el-button style="margin-top:20px">删除</el-button>
    <!-- 确认下载对话框 -->
    <div>
      <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%">
      <span>开始下载！</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    </div>

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
        centerDialogVisible:false,
           dialogFormVisible: false,
           formLabelWidth: '120px',
           form: {
          title: '',
          size:'',
          publishdate: '',
          downloadtimes: '',

         
        },
           tableData:[]

           }

       },
       mounted () {
        this.$http.post('/api/get/one_Course_allres', {
          student_id: '',
          t_class_id: this.$route.params.t_class_id
        },{}).then((response) => {
          console.log(response.body);
          var file_list = response.body[0];
          console.log(file_list);
          for(var i in file_list){
            var t = new Array()
            t['name']=file_list[i].resource_name;
            t['date']=file_list[i].resource_date;
            // t['course_name']=file_list[i].course_name;
            // t['file_type']='教学资源';
            t['size']=file_list[i].resource_size;
            t['download_num']=file_list[i].resource_downloads;
            this.tableData.push(t)
          }
        })
      }, 

   }
    
    

</script>