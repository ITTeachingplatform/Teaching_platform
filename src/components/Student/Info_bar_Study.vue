<!--学习中心的教学资讯卡片-->
<template>
  <div id="Info_bar_Study">
    <el-row type="flex" justify="center" style="font-size:40px;margin-top:10px;margin-bottom:10px;">教学资讯</el-row>
    <el-row type="flex" justify="center" style="margin-top:10px;margin-bottom:10px">
      <el-row type="flex" justify="center">
        <el-col>
            <el-card class="box-card"  style="margin-left:20px">
            <div slot="header" class="clearfix">
              <span style="font-size:30px">近期课程信息</span>
            </div>
            <div v-for="i in couann_list_num" :key="i" v-if="i < a.length">
                <router-link to="#">
                  <el-button style="float: center; padding: 3px 0;font-size:20px;margin-bottom:10px;" type="text" @click="show_couannounnce(a[i])">{{get_couannounnce_title(i)}}</el-button>
                </router-link>
            </div>
          </el-card>
        </el-col>

        <el-col>
          <el-card class="box-card" style="margin-left:20px">
            <div slot="header" class="clearfix">
              <span style="font-size:30px">最新作业</span>
            </div>
            <div v-for="i in homework_list_num" :key="i" v-if="i < b.length">
              <router-link to="#">
                <el-button style="float: center; padding: 3px 0" type="text;font-size:20px;margin-bottom:10px;" @click="show_homework(b[i])">{{get_homework_title(i)}}</el-button>
              </router-link>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-row>

    <div>
      <el-form :data="dialogForm">
        <el-dialog  :visible.sync="centerDialogVisible" width="80%" center>
        <el-row><h1 align=center>{{dialogForm.title}}</h1></el-row>
        <el-row>发布者：{{dialogForm.publisher}}</el-row>
        <el-row>发布时间：{{dialogForm.date}}</el-row>
        <el-row style="margin:15px">{{dialogForm.content}}</el-row>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button></span>
      </el-dialog>
      </el-form>
    </div>
  </div>
</template>

<script>
  import store from '../../vuex/student/store';
  export default{
    name: 'Info_bar_Study',
    data(){
      return{
        centerDialogVisible:false,
        dialogForm:{
          title:'',
          publisher:'',
          date:'',
          content:''
        },
        a:[],
        couann_list_num : 4,
        b:[],
        homework_list_num: 4,
      }
    },
    mounted () {
      this.$http.post('/api/get', {
        type: 'cou_announce'
      },{}).then((response) => {
        // console.log(response.body);
        var couann_list = response.body[0];
        try {
          for(var i in couann_list){
          var t = new Array();
          t['announcement_title'] = couann_list[i].announcement_title;
          t['ann_publisher'] = couann_list[i].cou_ann_publisher;
          t['announcement_date'] = couann_list[i].announcement_date;
          t['announcement_content'] = couann_list[i].announcement_content;
          this.a.push(t);
          }
          console.log('finish loading course_ann list');
          // console.log(this.b);
        } catch (error) {
          console.log('Error when loading course_ann list!!' + error)
        }
      }),
      this.$http.post('/api/get/one_student_unfinishHomework', {
        student_id: store.state.student_account['id']
      },{}).then((response) => {
        // console.log(response.body);
        var homework_list = response.body[0];
        try {
          for(var i in homework_list){
            var t = new Array();
            t['homework_name'] = homework_list[i].homework_name;
            t['homework_up_date'] = homework_list[i].homework_up_date;
            t['homework_content'] = homework_list[i].homework_content;
            this.b.push(t);
          }
          console.log('finish loading homework list');
        } catch (error) {
          console.log('Error when loading homework list!!' + error)
        }       
      })
    },
    methods: {
      get_couannounnce_title(index){
        return this.a[index].announcement_title;
      },
      show_couannounnce(temp){
        this.centerDialogVisible=true;
        this.dialogForm.title=temp.announcement_title;
        this.dialogForm.publisher=temp.ann_publisher;
        this.dialogForm.date=temp.announcement_date;
        this.dialogForm.content=temp.announcement_content;            
      },
      get_homework_title(index){
        return this.b[index].homework_name;
      },
      show_homework(temp){
        this.centerDialogVisible=true;
        this.dialogForm.title=temp.homework_name;
        this.dialogForm.publisher='None';
        this.dialogForm.date=temp.homework_up_date;
        this.dialogForm.content=temp.homework_content;            
      },
    },
  }
</script>
<style>
  .text {
    font-size: 20px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 440px;
  }
</style>