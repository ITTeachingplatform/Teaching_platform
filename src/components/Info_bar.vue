<template>
<div id="info_bar">
<el-row type="flex" justify="center">
<el-row type="flex" justify="center">

<el-col>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span style="font-size:30px">近期公告</span>
    <router-link to="/admin/manage_announce">
    <el-button style="float: right; padding: 3px 0;font-size:20px;" type="text">管理公告</el-button>
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
    <span style="font-size:30px">课程信息</span>
    <router-link to="/admin/manage_lesson">
    <el-button style="float: right; padding: 3px 0;font-size:20px;" type="text">管理课程</el-button>
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

</el-row>
</el-row>


<el-row type="flex" justify="center" style="margin-top:20px">
<el-row type="flex" justify="center">
<el-col>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span style="font-size:30px">近期讨论区</span>
    <router-link to="admin/manage_discussion">
    <el-button style="float: right; padding: 3px 0;font-size:20px;" type="text">管理讨论区</el-button>
    </router-link>
  </div>
  <div class="text item">
   {{d_1}}
  </div>
    <div class="text item">
   {{d_2}}
  </div>
    <div class="text item">
   {{d_3}}
  </div>
    <div class="text item">
   {{d_4}}
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
        mounted(){
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
               var c = response.body;
               try {
                 this.c_1=c[0][0].announcement_title;
               } catch (error) {
                 
               }
               try {
                 this.c_2=c[0][1].announcement_title;
               } catch (error) {
                 
               }
               try {
                 this.c_3=c[0][2].announcement_title;
               } catch (error) {
                 
               }
               try {
                 this.c_4=c[0][3].announcement_title; 
               } catch (error) {
                 
               }         
            }),
           this.$http.post('/api/get', {
                   type: 'latest_discussion'
              },{}).then((response) => {
                console.log(response.body);
               var d = response.body;
               try {
                 this.d_1=d[0][0].post_title;
               } catch (error) {
                 
               }
               try {
                 this.d_2=d[0][1].post_title;
               } catch (error) {
                 
               }
               try {
                 this.d_3=d[0][2].post_title;
               } catch (error) {
                 
               }
               try {
                 this.d_4=d[0][3].post_title; 
               } catch (error) {
                 
               }         
            })                        
        },
        data(){
          return {
            a_1:'',
            a_2:'',
            a_3:'',
            a_4:'',
            c_1:'',
            c_2:'',
            c_3:'',
            c_4:'',            
            d_1:'',
            d_2:'',
            d_3:'',
            d_4:'',            
          }
        }
    }
</script>
<style scoped>
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