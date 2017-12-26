<!--教师首页的公告卡片-->
<template>
  <div id="info_bar_teacher">
    <el-row type="flex" justify="center" style="font-size:40px;margin-top:10px;margin-bottom:10px;">教学信息</el-row>
    <el-row type="flex" justify="center">
      <el-row type="flex" justify="center">
      <el-col>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size:30px">近期系统公告</span>
            <router-link to="/teacher_announce">
            <el-button style="float: right; padding: 3px 0;font-size:20px;" type="text">查看更多</el-button>
            </router-link>
          </div>
          <div v-for="i in sysann_list_num" :key="i" v-if="i < a.length">
              <router-link to="#">
                <el-button style="float: center; padding: 3px 0;font-size:20px;margin-bottom:10px;" type="text" @click="show_sysannounnce(a[i])">{{get_sysannounnce_title(i)}}</el-button>
              </router-link>
            </div>
        </el-card>
      </el-col>
      <el-col>
        <el-card class="box-card"  style="margin-left:20px">
          <div slot="header" class="clearfix">
            <span style="font-size:30px">近期课程信息</span>
            <router-link to="/teacher_courses">
            <el-button style="float: right; padding: 3px 0;font-size:20px;" type="text">查看更多</el-button>
            </router-link>
          </div>
          <div v-for="i in couann_list_num" :key="i" v-if="i < b.length">
              <router-link to="#">
                <el-button style="float: center; padding: 3px 0;font-size:20px;margin-bottom:10px;" type="text" @click="show_couannounnce(b[i])">{{get_couannounnce_title(i)}}</el-button>
              </router-link>
          </div>
        </el-card>
      </el-col>
      </el-row>
    </el-row>

    <el-row type="flex" justify="center" style="margin-top:20px">
      <el-row type="flex" justify="center">
        <el-col>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span style="font-size:30px">近期讨论区</span>
              <router-link to="/teacher_discussion">
                <el-button style="float: right; padding: 3px 0;font-size:20px;" type="text">查看更多</el-button>
              </router-link>
            </div>
            <div v-for="i in discus_list_num" :key="i" v-if="i < c.length">
              <router-link to="#">
                <el-button style="float: center; padding: 3px 0;font-size:20px;margin-bottom:10px;" type="text" @click="show_discussion(c[i])">{{get_discussion_title(i)}}</el-button>
              </router-link>
            </div>
          </el-card>
        </el-col>
<el-col>
<el-card class="box-card" style="margin-left:20px">
  <div slot="header" class="clearfix">
    <span style="font-size:30px">批改提示</span>
    <router-link to="/teacher_courses">
    <el-button style="float: right; padding: 3px 0;font-size:20px;" type="text">批改作业</el-button>
    </router-link>
  </div>
  <div v-for="i in homework_list_num" :key="i" v-if="i < d.length">
     <router-link to="#">
        <el-button style="float: center; padding: 3px 0" type="text;font-size:20px;margin-bottom:10px;" @click="show_homework(d[i])">{{get_homework_title(i)}}</el-button>
      </router-link>
  </div>
</el-card>
</el-col>

</el-row>
</el-row>
    <!-- Dialog -->
    <div>
      <el-form :data="dialogForm">
        <el-dialog  :visible.sync="centerDialogVisible" width="80%" center>
        <el-row><h1 align=center>{{dialogForm.title}}</h1></el-row>
        <el-row>发布者：{{dialogForm.publisher}}</el-row>
        <el-row>发布时间：{{dialogForm.date}}</el-row>
        <el-row style="margin:15px">{{dialogForm.content}}</el-row>
        <span slot="footer" class="dialog-footer">
          <!-- <el-button @click="centerDialogVisible=f alse">取 消</el-button> -->
          <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button></span>
      </el-dialog>
      </el-form>
    </div>
    <!-- END Dialog -->
</div>
  
</template>
<script>
import store from '../../vuex/teacher/store'
      export default{
        name: 'Info_bar_teacher',
        component:{
        },
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
        sysann_list_num : 4,
        b:[],
        couann_list_num : 4,
        c:[],
        discus_list_num : 4,
        d:[],
        homework_list_num: 4,
          }
        },
        methods: {
      get_sysannounnce_title(index){
        // console.log(this.a[index]);
        // console.log(this.a[index].announcement_title);
        return this.a[index].announcement_title;
      },
      show_sysannounnce(temp){
        this.centerDialogVisible=true;
        this.dialogForm.title=temp.announcement_title;
        this.dialogForm.publisher=temp.ann_publisher;
        this.dialogForm.date=temp.announcement_date;
        this.dialogForm.content=temp.announcement_content;            
      },
      get_couannounnce_title(index){
        return this.b[index].announcement_title;
      },
      show_couannounnce(temp){
        this.centerDialogVisible=true;
        this.dialogForm.title=temp.announcement_title;
        this.dialogForm.publisher=temp.ann_publisher;
        this.dialogForm.date=temp.announcement_date;
        this.dialogForm.content=temp.announcement_content;            
      },
      get_discussion_title(index){
        return this.c[index].post_title;
      },
      show_discussion(temp){
        this.centerDialogVisible=true;
        this.dialogForm.title=temp.post_title;
        this.dialogForm.publisher=temp.post_starter;
        this.dialogForm.date=temp.post_date;
        this.dialogForm.content=temp.post_content;            
      },
      get_homework_title(index){
        return this.d[index].homework_name;
      },
      show_homework(temp){
        this.centerDialogVisible=true;
        this.dialogForm.title=temp.homework_name;
        this.dialogForm.publisher='None';
        this.dialogForm.date=temp.homework_up_date;
        this.dialogForm.content=temp.homework_content;            
      },
        },
        mounted () {
        this.$http.post('/api/get', {
          type: 'sys_announce'
        },{}).then((response) => {
          // console.log(response.body);
          var sysann_list = response.body[0];
          try {
            for(var i in sysann_list){
            var t = new Array();
            t['announcement_title'] = sysann_list[i].announcement_title;
            t['ann_publisher'] = sysann_list[i].sys_ann_publisher;
            t['announcement_date'] = sysann_list[i].announcement_date;
            t['announcement_content'] = sysann_list[i].announcement_content;
            this.a.push(t);
            }
            console.log('finish loading sys_ann list');
          } catch (error) {
            console.log('Error when loading sys_ann list!!' + error)
          }    
        }),
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
            this.b.push(t);
            }
            console.log('finish loading course_ann list');
            // console.log(this.b);
          } catch (error) {
            console.log('Error when loading course_ann list!!' + error)
          }
        }),
        this.$http.post('/api/get', {
          type: 'latest_discussion'
        },{}).then((response) => {
          // console.log(response.body);
          var discuss_list = response.body[0];
          try {
            for(var i in discuss_list){
              var t = new Array();
              t['post_title'] = discuss_list[i].post_title;
              t['post_starter'] = discuss_list[i].post_starter;
              t['post_date'] = discuss_list[i].post_date;
              t['post_content'] = discuss_list[i].post_content;
              this.c.push(t);
            }
            console.log('finish loading discussion list');
          } catch (error) {
            console.log('Error when loading discussion list!!' + error)
          }
        }),
        this.$http.post('/api/get_UnCorrectHomework_one_teacher', {
          teacher_id: store.state.teacher_account['id']
        },{}).then((response) => {
          // console.log(response.body);
          var homework_list = response.body[0];
          console.log(homework_list);
          try {
            for(var i in homework_list){
              var t = new Array();
              t['homework_name'] = homework_list[i].homework_name;
              t['homework_up_date'] = homework_list[i].homework_up_date;
              t['homework_content'] = homework_list[i].homework_content;
              this.d.push(t);
            }
            console.log('finish loading homework list');
          } catch (error) {
            console.log('Error when loading homework list!!' + error)
          }       
        })
                       

        }
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
    height: 280px;
  }
</style>