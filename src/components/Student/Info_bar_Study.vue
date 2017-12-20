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
              <router-link to="/student_courses">
                <el-button style="float: right; padding: 3px 0;font-size:20px;" type="text">查看更多</el-button>
              </router-link>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'通知' + o + "  XXXXXXXXXXXXXXXXXXXXXXXX"}}
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