<template>
    <div id="post" >
        <el-row type='flex' justify="center">
            <div style="width:900px;">
                <div id="topic" :data="postData">
                    <el-container>
                        <!-- 帖子标题、标签 -->
                        <el-header><strong>{{postData.post_title}}</strong><div style="float:right;"><el-tag>{{postData.post_label}}</el-tag></div></el-header>
                        <el-container>
                            <!-- 个人信息 -->
                            <el-aside width="200px">
                                <el-row><img src="../assets/head.jpg" width="120px" height="120px"></el-row>
                                <el-row style="color:#000">{{postData.post_starter}}</el-row>
                            </el-aside>
                            <el-container>
                                <!-- 帖子内容 -->
                                <el-main>{{postData.post_content}}</el-main>
                                <!-- 回复数、浏览数、发帖时间 -->
                                <el-footer>回复数：{{postData.post_reply_num}}&nbsp; 浏览数：{{postData.post_browse_num}}&nbsp;&nbsp;&nbsp; {{postData.post_date}}</el-footer>
                            </el-container>
                        </el-container>
                    </el-container>
                </div>
                <el-table id="reply" :data="replyData">
                    <!-- <div v-for="i in replyData" :key="i.index"> -->
                <el-table-column>
                    <template slot-scope="scope">
                        <el-container>
                         <el-aside width="200px">
                            <span style="margin-left: 10px;color:#000">{{ scope.row.reply_sender }}</span>
                         </el-aside>
                        <!-- 回复内容 -->
                        <el-main>{{ scope.row.reply_content }}</el-main>
                        <el-footer>{{ scope.row.reply_time }}</el-footer>
                        </el-container>
                    </template>
                </el-table-column>
                        <!-- </el-container> -->
                    <!-- </div> -->
                </el-table>
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
    },
    data(){
        return{
            postData:{
                post_ID:'',
                post_title:'',
                post_label:'',
                post_content:'',
                post_date:'',
                post_starter:'',
                post_reply_num:'',
                post_browse_num:'',
                post_last_reviser:'',
            },
            replyData:[]
        }
    },
    computed: {
        // dynamicSegment () {
        //         return this.$route.params.post_id
        //     },
    },
    mounted(){
        this.postData.post_ID=this.$route.params.post_id;
          this.$http.post('/api/view_post', {
          post_id: this.$route.params.post_id
          },{}).then((response) => {
          console.log(response.body);
          var post_mes = response.body[0];
          try {
              this.postData.post_title= post_mes.post_title;
              this.postData.post_label= post_mes.post_label;
              this.postData.post_content = post_mes.post_content;
              this.postData.post_starter = post_mes.post_starter;
              this.postData.post_content = post_mes.post_content;
              this.postData.post_reply_num = post_mes.post_reply_num;
              this.postData.post_browse_num = post_mes.post_browse_num;
              this.postData.post_last_reviser = post_mes.post_last_reviser;
              this.postData.post_date = post_mes.post_date;
            console.log('finish loading the post');
          } catch (error) {
            console.log('Error when loading the post!!' + error)
          }                       
          })
          this.$http.post('/api/post_replay', {
          post_id: this.$route.params.post_id
          },{}).then((response) => {
          console.log(response.body);
          var replay_list = response.body[0];
          try {
            for(var i in replay_list){
              var t = new Array();
              t['reply_ID'] = replay_list[i].reply_ID;
              t['reply_belong'] = replay_list[i].reply_belong;
              t['reply_content'] = replay_list[i].reply_content;
              t['reply_sender'] = replay_list[i].reply_sender;
              t['reply_time'] = replay_list[i].reply_time;
              this.replyData.push(t);
            }
            console.log('Loading the replay!!' + error)
            }
          catch (error) {
            console.log('Error when loading the replay!!' + error)
          }                       
          })
          
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
    /* line-height: 100px; */
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
