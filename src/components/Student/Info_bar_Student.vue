<!--学生首页的公告卡片-->
<template>
  <div id="info_bar_student">
    <el-row type="flex" justify="center" style="font-size:40px;margin-top:10px;margin-bottom:10px;">学习信息</el-row>
    <el-row type="flex" justify="center">
      <el-row type="flex" justify="center">
      <el-col>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size:30px">近期系统公告</span>
            <router-link to="/student_announce">
            <el-button style="float: right; padding: 3px 0;font-size:20px;" type="text">查看更多</el-button>
            </router-link>
          </div>
          <div class="text item">
            {{a_1}}
          </div>
          <div class="text item">
            {{a_2}}
          </div>
          <div class="text item">
            {{a_3}}
          </div>
          <div class="text item">
            {{a_4}}
          </div>
        </el-card>
      </el-col>
      <el-col>
        <el-card class="box-card"  style="margin-left:20px">
          <div slot="header" class="clearfix">
            <span style="font-size:30px">近期课程信息</span>
            <router-link to="/student/courses_view">
            <el-button style="float: right; padding: 3px 0;font-size:20px;" type="text">查看更多</el-button>
            </router-link>
          </div>
          <div class="text item">
            {{b_1}}
          </div>
          <div class="text item">
            {{b_2}}
          </div>
          <div class="text item">
            {{b_3}}
          </div>
          <div class="text item">
            {{b_4}}
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
              <router-link to="/student_discussion">
              <el-button style="float: right; padding: 3px 0;font-size:20px;" type="text">查看更多</el-button>
              </router-link>
            </div>
            <div class="text item">
              {{c_1}}
            </div>
            <div class="text item">
              {{c_2}}
            </div>
            <div class="text item">
              {{c_3}}
            </div>
            <div class="text item">
              {{c_4}}
            </div>
          </el-card>
        </el-col>
        <el-col>
          <el-card class="box-card" style="margin-left:10px">
            <div slot="header" class="clearfix">
              <span style="font-size:30px">最新作业</span>
              <router-link to="/student/courses_view">
                <el-button style="float: right; padding: 3px 0;font-size:20px;" type="text">查看更多</el-button>
              </router-link>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'教学班' + o + "  作业XXXXXXXXXXXXXXXXXXXX"}}
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
  export default{
    name: 'Info_bar_Student',
    data(){
      return{
        a_1:'',
        a_2:'',
        a_3:'',
        a_4:'',
        b_1:'',
        b_2:'',
        b_3:'',
        b_4:'',
        c_1:'',
        c_2:'',
        c_3:'',
        c_4:'',  
        d_1:'',
        d_2:'',
        d_3:'',
        d_4:'',
      }
    },
    mounted () {
        this.$http.post('/api/get', {
          type: 'sys_announce'
        },{}).then((response) => {
          console.log(response.body);
          var a = response.body;
          try {
            this.a_1=a[0][0].announcement_title;
          } catch (error) {
            
          }
          try {
            this.a_2=a[0][1].announcement_title;
          } catch (error) {
            
          }
          try {
            this.a_3=a[0][2].announcement_title;
          } catch (error) {
            
          }
          try {
            this.a_4=a[0][3].announcement_title; 
          } catch (error) {
            
          }         
        }),
        this.$http.post('/api/get', {
          type: 'cou_announce'
        },{}).then((response) => {
          console.log(response.body);
          var b = response.body;
          try {
            this.b_1=b[0][0].announcement_title;
          } catch (error) {
            
          }
          try {
            this.b_2=b[0][1].announcement_title;
          } catch (error) {
            
          }
          try {
            this.b_3=b[0][2].announcement_title;
          } catch (error) {
            
          }
          try {
            this.b_4=b[0][3].announcement_title; 
          } catch (error) {
            
          }         
        }),
        this.$http.post('/api/get', {
          type: 'latest_discussion'
        },{}).then((response) => {
          console.log(response.body);
          var c = response.body;
          try {
            this.c_1=c[0][0].post_title;
          } catch (error) {
            
          }
          try {
            this.c_2=c[0][1].post_title;
          } catch (error) {
            
          }
          try {
            this.c_3=c[0][2].post_title;
          } catch (error) {
            
          }
          try {
            this.c_4=c[0][3].post_title; 
          } catch (error) {
            
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