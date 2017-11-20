<template>
<div id="info_bar">
<el-row type="flex" justify="center">
<el-row type="flex" justify="center">

<el-col>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span style="font-size:30px">近期公告</span>
    <el-button style="float: right; padding: 3px 0;font-size:20px;" type="text">管理公告</el-button>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'通知 ' + o + "  XXXXXXXXXXXXXXXXXXXXXXXX"}}
  </div>
</el-card>
</el-col>

<el-col>
<el-card class="box-card"  style="margin-left:20px">
  <div slot="header" class="clearfix">
    <span style="font-size:30px">课程信息</span>
    <el-button style="float: right; padding: 3px 0;font-size:20px;" type="text">管理课程</el-button>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'通知 ' + o + "  XXXXXXXXXXXXXXXXXXXXXXXX"}}
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
    <el-button style="float: right; padding: 3px 0;font-size:20px;" type="text">管理讨论区</el-button>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'讨论 ' + o + "  XXXXXXXXXXXXXXXXXXXXXXXX" }}
  </div>
</el-card>
</el-col>

<el-col>
<el-card class="box-card" style="margin-left:20px">
  <div slot="header" class="clearfix">
    <span style="font-size:30px">异常信息</span>
    <el-button style="float: right; padding: 3px 0;font-size:20px;" type="text">下载文本记录</el-button>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'异常信息 ' + o + "  XXXXXXXXXXXXXXXXXXXXXXXX"}}
  </div>
</el-card>
</el-col>

</el-row>
</el-row>

</div>
  
</template>

<script>
    export default{
        name: 'Info_bar',
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