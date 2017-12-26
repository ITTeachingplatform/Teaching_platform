<template>
  <div id="course_bank">
    <el-table :data="tableData" >
      <el-table-column prop="announce" label="通知" width="300"></el-table-column>
      <el-table-column prop="date" label="日期" width="500"></el-table-column>
      <el-table-column label="操作" >
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.$index,scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    
    <!-- 查看每个公告的对话框 -->
    <el-dialog title="查看公告" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="公告名称" :label-width="formLabelWidth">
          <el-input v-model="form.title" auto-complate="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible=false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default { 
    name: 'course_bank',
   data(){
       return{
          dialogFormVisible: false,
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
           this.dialogFormVisible=true;
           console.log(index,row);
         },
       }
   }
</script>