<template>
  <div id="course_bank">
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

      <el-table-column label="课程名称" prop="course_name" width="150px">
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
    
    <!-- 确认下载对话框 -->
    <div>
      <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%">
      <span>开始下载！</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    </div>
  </div>
</template>

<script>
import store from '../../vuex/student/store';
export default { 
    name: 'course_bank',
   data(){
      return{
        centerDialogVisible: false,
        tableData:[],
        one_t_class_id: this.$route.params.t_class_id,
        currentRow: null
      }
       },
       mounted () {
        this.$http.post('/api/get/one_Course_allbank', {
          student_id: store.state.student_account.id,
          t_class_id: this.one_t_class_id
        },{}).then((response) => {
          console.log(response.body);
          var bank_list = response.body[0];
          // console.log(bank_list);
          for(var i in bank_list){
            var t = new Array()
            t['name']=file_list[i].bank_name;
            t['date']=file_list[i].bank_up_date;
            t['course_name']=file_list[i].course_name;
            t['file_type']='题库';
            t['size']=file_list[i].bank_size;
            t['download_num']=file_list[i].bank_download_num;
            this.tableData.push(t)
          }
        })
      }, 
       methods: {
         handleCurrentChange(val) {
        this.currentRow = val;
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