<template>
  <div id="teacher_announce">
    <Teacher activeIndex='2'></Teacher>
    <el-row style="font-size:50px">公告列表
      <!-- <el-button v-on="back; flag:false" style="float: right; padding: 3px 0;font-size:20px;" type="text">返回</el-button> --></el-row>
    <el-row type='flex' justify="center">
      <div class="block" style="width:900px;margin-top:10px">
        <el-progress :percentage="100" :show-text="false"></el-progress>
        <el-row type="flex" justify="center">
          <el-card class="box-card" style='width:900px'>
            <div slot="header" class='clearfix'>
              <span>搜索框</span></div>
                <el-form :model="validateForm" ref="validateForm" label-width="150px" class="demo-ruleForm">             
            <el-row type="flex" justify="start">
              <el-col>
                  <el-form-item label="公告关键词:" prop="keyword" :rules="[]">
                    <el-input type="keyword" v-model="validateForm.keyword" auto-complete="off"></el-input>
                  </el-form-item>
              </el-col>
              <el-col>
                  <el-form-item label="公告发布者" prop="ann_publisher" :rules="[]">
                    <el-input type="cou_ann_publisher" v-model="validateForm.ann_publisher" auto-complete="off"></el-input>
                  </el-form-item>
              </el-col>
            </el-row>
            <el-row type="flex" justify="start">
              <el-col>
                  <el-form-item label="公告类型" prop="type" >
                    <el-radio v-model="validateForm.type" label="1">系统公告</el-radio>
                    <el-radio v-model="validateForm.type" label="2">教学公告</el-radio>
                    <!-- <el-select v-model="validateForm.type" placeholder="公告类型"> -->
                      <!-- <el-option label="系统公告" value="system_announcement"></el-option> -->
                      <!-- <el-option label="教学公告" value="course_announcement"></el-option> -->
                    <!-- </el-select> -->
                  </el-form-item>
              </el-col>
              <el-col>
                  <el-form-item label="公告发布时间" prop="publish_date" :rules="[]">
                    <el-date-picker type="date" v-model="validateForm.publish_date" value-format="yyyy-MM-dd" @change="dateChange" auto-complete="off"></el-date-picker>
                  </el-form-item>
              </el-col>
            </el-row>
                </el-form>
            <el-row type="flex" justify="center">
              <el-button style='width:150px' type="primary" @click="search_announcement">搜索</el-button>
              <el-button style='width:150px;margin-left:40px' v-on:click="reset_form()">重置</el-button></el-row>
          </el-card>
        </el-row>
        <el-progress :percentage="100" :show-text="false"></el-progress>
      </div>
    </el-row>
    <!--列表-->
    <el-row type='flex' justify="center">
      <div class="b" style="width:900px;margin-top:10px">
        <el-table :data="tableData" style="width: 100%;margin-top:20px;text-align:left;">
          <el-table-column label="公告标题" width="300px">
            <template slot-scope="scope">
              <router-link to=""><span style="margin-left: 10px"  @click="showDialog(scope.$index)">{{ scope.row.announcement_title }}</span></router-link>
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
        </el-table>
        <el-progress :percentage="100" :show-text="false"></el-progress>
        <!--ww--></div>
    </el-row>
    <!-- </el-col>
    </el-row> -->
    <!-- Dialog -->
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
    <!-- END Dialog --></div>
</template>

<script>
import Teacher from '../components/Teacher/Teacher.vue';
import store from '../vuex/teacher/store';
export default {
    name: 'teacher_announce',
      components: {
        'Teacher': Teacher
      },
      // store,
      data() {
      return {
        centerDialogVisible: false,
        search_date: '',
        tableData:[],
        validateForm: {
          keyword: '',
          ann_publisher: '',
          publish_date: '',
          brief_content: '',
          type: '1',         
        },   
        dialogForm:{
          title:'',
          content:'',
          publish_date: '',      
        }
      }
    },
    computed: {
        //  tableData:{
        //   get:function(){
        //       return store.state.announce_info
        //   }
        //  },
      },
      mounted () {
                this.$http.post('/api/get', {
                    type: 'all_sys_announcement'
                  },{}).then((response) => {
                    console.log(response.body);
                    var ann_list = response.body[0];
                    // console.log(ann_list);
                    for(var i in ann_list){
                      var t = new Array()
                      t['announcement_title']=ann_list[i].announcement_title;
                      t['ann_publisher']=ann_list[i].sys_ann_publisher;
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
            submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    reset_form(){
      this.validateForm={
            keyword: '',
            ann_publisher: '',
            publish_date: '',
            brief_content: '',
            type:'1'
          }
        this.search_date=''
      },
      //前端 Manage_announce.vue
search_announcement(){
         this.tableData=[];
         console.log(this.search_date);
         console.log(this.validateForm.ann_publisher)
         this.$http.post('/api/search_announcement', {
          //  announcement_title,announcement_date,sys_ann_publisher
                    announcement_title: this.validateForm.keyword,
                    announcement_date: this.search_date,
                    sys_ann_publisher:this.validateForm.ann_publisher,
                  },{}).then((response) => {
                    console.log(response.body[0]);
                    var ann_list = response.body[0];
                    for(var i in ann_list){
                      var t = new Array()
                      t['announcement_title']=ann_list[i].announcement_title;
                      t['ann_publisher']=ann_list[i].sys_ann_publisher;
                      t['announcement_date']=ann_list[i].announcement_date;
                      t['brief_content']=ann_list[i].announcement_content;
                      if(this.validateForm.type === '1' && ann_list[i].sys_announcement_ID)
                          this.tableData.push(t)
                      if(this.validateForm.type === '2' && ann_list[i].cou_announcement_ID)                        
                          {
                            t['ann_publisher']=ann_list[i].cou_ann_publisher;
                            this.tableData.push(t)
                          }
                    }
                  })
      },
      //日期格式化
      dateChange(val){
        console.log(val)
        var origin = val.replace(/-/g,'');
        origin = parseInt(origin) + 1;
        this.search_date = origin.toString();
      },
    }
  }
</script>