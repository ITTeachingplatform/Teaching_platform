<template>
  <div id="course_announ">
      

     <!-- <el-row type="flex" justify="center"> -->
       <el-table :data="tableData" >
         <el-table-column prop="announce" label="通知" width="300">
              <template slot-scope="scope">
              <span style="margin-left: 10px" >{{ scope.row.announcement_title }}</span>
              </template>
         </el-table-column>

         <el-table-column prop="date" label="日期" width="500">
              <template slot-scope="scope">
              <span style="margin-left: 10px" >{{ scope.row.announcement_date }}</span>
              </template>
         </el-table-column>

         <el-table-column label="操作" >
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.$index,scope.row)" type="text" size="small">查看</el-button>
          </template>
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
    <el-dialog title="" :visible.sync="lookVisible">
      <el-form :model="dialogForm">
        <el-row><h1 align=center>{{dialogForm.title}}</h1></el-row>
        <el-row>发布时间：{{dialogForm.publish_date}}</el-row>
        <el-row style="margin:15px">{{dialogForm.content}}</el-row>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="lookVisible=false">取消</el-button>
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
           t_class_id:'',
           course_ID:'',
           formLabelWidth: '120px',
           dialogForm: {
              title: '',
              publish_date:'',
              content: '',       
           },
           form: {
              title: '',
              content: '',       
           },
           tableData:[],

        }

       },
       methods: {
         handleClick(index,row) {
           this.lookVisible=true;
           console.log(index,row);
        this.dialogForm.title=this.tableData[index].announcement_title;
        this.dialogForm.publish_date=this.tableData[index].announcement_date;
        this.dialogForm.content=this.tableData[index].brief_content;
           
         },
       },
    mounted (){
      this.t_class_id=this.$route.params.t_class_id;
      this.$http.post('/api/get/one_Course_allann', {
        course_ID: this.$route.params.course_id,
      },{}).then((response) => {
                    console.log(response.body);
                    var ann_list = response.body[0];
                    // console.log(ann_list);
                    for(var i in ann_list){
                      var t = new Array()
                      t['announcement_title']=ann_list[i].announcement_title;
                      // t['ann_publisher']=ann_list[i].sys_ann_publisher;
                      t['announcement_date']=ann_list[i].announcement_date;
                      t['brief_content']=ann_list[i].announcement_content;
                     this.tableData.push(t)
            }
            console.log('finish loading course list');
        // console.log(this.CourseInfo);
      })
    },
           
   }
    
    

</script>