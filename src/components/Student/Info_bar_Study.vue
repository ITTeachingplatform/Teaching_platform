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
            <router-link to="/student/courses_view">
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
          <el-card class="box-card" style="margin-left:20px">
            <div slot="header" class="clearfix">
              <span style="font-size:30px">最新作业</span>
              <router-link to="/student_courses">
                <el-button style="float: right; padding: 3px 0;font-size:20px;" type="text">查看更多</el-button>
              </router-link>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'科目' + o + "  作业XXXXXXXXXXXXXXXXXXXX"}}
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
  export default{
    name: 'Info_bar_Study',
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
      }
    },
    mounted () {
      this.$http.post('/api/get', {
        type: 'cou_announce'
      },{}).then((response) => {
        console.log(response.body);
        var b = response.body;
        try {
          this.a_1=b[0][0].announcement_title;
        } catch (error) {
          
        }
        try {
          this.a_2=b[0][1].announcement_title;
        } catch (error) {
          
        }
        try {
          this.a_3=b[0][2].announcement_title;
        } catch (error) {
          
        }
        try {
          this.a_4=b[0][3].announcement_title; 
        } catch (error) {
          
        }         
      })
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