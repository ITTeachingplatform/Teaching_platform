<template>
    <div id="post" >
        <el-row type='flex' justify="center">
            <div style="width:900px;">
               <!-- <el-card class="box-card" style="margin-top:10px">
                <div slot="header" class="clearfix">
                    <span style="float:left">卡片名称</span>
                    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                <!-- </div> -->
                <!-- <div class="text item">
                    <el-col>
                        <el-row>XXX</el-row>
                    </el-col>
                    <el-col>
                        <span>XXXXXXXXXXXXXXXXXX</span>
                    </el-col>
                </div>
                </el-card>  -->
                <div id="topic">
                    <el-container>
                        <!-- 帖子标题、标签 -->
                        <el-header><strong>{{post_title}}</strong><el-tag>{{post_label}}</el-tag></el-header>
                        <el-container>
                            <!-- 个人信息 -->
                            <el-aside width="200px">{{post_starter}}</el-aside>
                            <el-container>
                                <!-- 帖子内容 -->
                                <el-main>Main</el-main>
                                <!-- 回复数、浏览数、发帖时间 -->
                                <el-footer>回复数：{{post_reply_num}} 浏览数：{{post_browse_num}} {{post_time}}</el-footer>
                            </el-container>
                        </el-container>
                    </el-container>
                </div>
                <div>
                    <el-container>
                        <!-- <el-header>Header</el-header> -->
                        <!-- <el-container> -->
                            <el-aside width="200px">Aside</el-aside>
                            <el-container>
                                <el-main>Main</el-main>
                                <el-footer>Footer</el-footer>
                            </el-container>
                        <!-- </el-container> -->
                    </el-container>
                </div>
                <!-- 编辑器 -->
                <editor></editor>
            </div>
        </el-row>
    </div>
</template>

<script>
import Editor from './Editor'
export default {
    components: {
        Editor,
    }
}
</script>

<style>
.text {
    font-size: 14px;
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
    width: 100%;
  }

   .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: left;
    line-height: 60px;
  }
  .el-footer,.el-aside {
      margin-bottom:18px; 
  }
  .el-footer{
      text-align: right;
      background-color: #E9EEF3;
      color: #333;
      line-height: 60px;
      font-size: 12px;
}
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
