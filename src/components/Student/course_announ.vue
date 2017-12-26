<template>
  <div id="course_announ">
    <el-table :data="tableData" style="width: 100%;margin-top:20px;text-align:left;">
          <el-table-column label="公告标题" width="300px">
            <template slot-scope="scope">
              <span style="margin-left: 10px"  >{{ scope.row.announcement_title }}</span>
              </template>
          </el-table-column>
          <el-table-column label="发布者" width="100px">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>公告者: {{ scope.row.ann_publisher }}</p>
                <p>info: 可以显示额外信息</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.ann_publisher }}</el-tag></div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="发布时间(年月日)" width="200px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.announcement_date }}</span></template>
          </el-table-column>
          <el-table-column label="内容摘要" width="300px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.brief_content }}</span></template>
          </el-table-column>
          <el-table-column label="操作" >
            <template slot-scope="scope">
              <el-button @click="showDialog(scope.$index)" type="primary" size="mini" round>查看</el-button>
            </template>
         </el-table-column>
        </el-table>
    
    <!-- 查看每个公告的对话框 -->
    <div>
      <el-form :data="dialogForm">
        <el-dialog  :visible.sync="centerDialogVisible" width="80%" center>
        <el-row><h1 align=center>{{dialogForm.title}}</h1></el-row>
        <el-row>发布者：{{dialogForm.ann_publisher}}</el-row>
        <el-row>发布时间：{{dialogForm.publish_date}}</el-row>
        <el-row style="margin:15px">{{dialogForm.content}}</el-row>
        <span slot="footer" class="dialog-footer">
          <!-- <el-button @click="centerDialogVisible=f alse">取 消</el-button> -->
          <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button></span>
      </el-dialog>
      </el-form>
    </div>
  </div>
</template>

<script>
import store from '../../vuex/student/store';
export default { 
    name: 'course_announ',
   data(){
      return{
        centerDialogVisible: false,
        tableData:[],
        dialogForm:{
          title:'',
          content:'',
          publish_date: '',      
        },
        one_course_ID: this.$route.params.course_id,
      }
       },
       mounted () {
        this.$http.post('/api/get/one_Course_allann', {
          course_ID: this.one_course_ID
        },{}).then((response) => {
          console.log(response.body);
          var ann_list = response.body[0];
          // console.log(ann_list);
          for(var i in ann_list){
            var t = new Array()
            t['announcement_title']=ann_list[i].announcement_title;
            t['ann_publisher']=ann_list[i].cou_ann_publisher;
            t['announcement_date']=ann_list[i].announcement_date;
            t['brief_content']=ann_list[i].announcement_content;
            this.tableData.push(t)
          }
        })
      }, 
       methods: {
         showDialog(index){
        this.centerDialogVisible=true;
        this.dialogForm.title=this.tableData[index].announcement_title;
        this.dialogForm.publish_date=this.tableData[index].announcement_date;
        this.dialogForm.content=this.tableData[index].brief_content;
        this.dialogForm.ann_publisher=this.tableData[index].ann_publisher;
        
      },
       }
   }
</script>