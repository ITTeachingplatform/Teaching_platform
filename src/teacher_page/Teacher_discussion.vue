<template>
  <div id="teacher_discussion"  align="center">
      <Teacher activeIndex='3'></Teacher>
      <div class="container">
      <el-row style="font-size:50px;margin-top:20px">讨论区列表</el-row>
      <router-link to="/teacher/publish_post"><el-button round style="margin-left:600px;margin-bottom:20px"  >发布讨论</el-button></router-link>
      <el-progress :percentage="100" :show-text="false"></el-progress>
      <el-row type="flex" justify="center" >
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>搜索框</span>
            <!-- <el-button style="float: right;padding: 3px 0" type="text">操作按钮</el-button> -->
          </div>
          <el-row type="flex" justify="start">
          <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <!--row 1-->
            <el-row type="flex" justify="start" :gutter="20">
              <el-col :span="16">
                <el-form-item label="主题关键词" prop="keyword"  :rules="[]">
                  <el-input type="keyword" v-model="ruleForm.keyword" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="发布者ID" prop="post_starter" :rules="[]">
                  <el-input type="post_starter" v-model="ruleForm.post_starter" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <!--row 2-->
            <el-row type="flex" justify="start" :gutter="20">
              <el-col :span="14">
                <el-form-item label="类别标签" prop="post_label" :rules="[]">
                  <el-input type="post_label" v-model="ruleForm.post_label" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="发布时间" prop="post_date" :rule="[]">
                  <el-date-picker type="date" v-model="ruleForm.post_date" value-format="yyyy-MM-dd" placeholder="选择日期" @change="dateChange" auto-complete="off"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          </el-row>

          <el-row type="flex" justify="center">
            <el-button style='width:150px' type="primary" @click="search_post">搜索</el-button>
            <el-button style='width:150px;margin-left:40px' v-on:click="resetForm('ruleForm')">重置</el-button>
          </el-row>
        </el-card>
      </el-row>
      <el-progress :percentage="100" :show-text="false"></el-progress>

      <el-row type="flex" justify="center" >
        <el-table
        :data="tableData"
        style="width:100%">
        <el-table-column
          label="讨论主题"
          width="200px">
          <template slot-scope="scope">
            <span style="margin-left: 10px">
              <!-- @click="toPost(scope.$index)" -->
              <router-link :to="{name:'teacher_post',params:{post_id:scope.row.id}}">{{scope.row.topic }}</router-link>
            </span>
          </template>
        </el-table-column>

        <el-table-column
          label="发布者"
          width="70px">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>公告者: {{ scope.row.writer }}</p>
              <p>info: 可以显示额外信息</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.writer }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="发布时间" width="180px">
          <template slot-scope="scope">
            <span style="margin-left:10px">{{ scope.row.post_date }}</span>
          </template>
        </el-table-column>

        <el-table-column label="标签" width="100px">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.tag }}</span>
          </template>
        </el-table-column>

        <el-table-column label="最后修改者" width="100px">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.final_changer }}</span>
          </template>
        </el-table-column>

        <el-table-column label="浏览数" width="100px">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.vis_num}}</span>
          </template>
        </el-table-column>

        <el-table-column label="回复数" width="100px">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.anw_num }}</span>
          </template>
        </el-table-column>
        </el-table>
      </el-row>
    </div>
  </div>
</template>

<script>
import Teacher from '../components/Teacher/Teacher.vue';
export default {
    name: 'teacher_discussion',
      components: {
        'Teacher': Teacher,
      },
      data() {
      return {
        radio: '1',
        ruleForm: {
          keyword: '',
          post_starter: '',
          post_date: '',
          post_label: '',
          },
        tableData: [],
        search_date:'',
      }
    },
          mounted () {
        // store.dispatch('get_discussion_item', {'Help_text': '此处获取讨论区信息'});
                this.$http.post('/api/get', {
                    type: 'discuss_list'
                  },{}).then((response) => {
                    console.log(response.body);
                    var dis_list = response.body;
                    for(var i=0;i<dis_list[0].length;i++){
                      var t = new Array()
                      t['id']=dis_list[0][i].post_ID;
                      t['topic']=dis_list[0][i].post_title;
                      t['writer']=dis_list[0][i].post_starter;
                      t['post_date']=dis_list[0][i].post_date;
                      t['tag']=dis_list[0][i].post_label;
                      t['final_changer']=dis_list[0][i].post_last_reviser;
                      t['vis_num']=dis_list[0][i].post_browse_num;
                      t['anw_num']=dis_list[0][i].post_reply_num;
                     this.tableData.push(t)
                    }
                  })
      },      
    methods: {
      search_post(){
        if(this.ruleForm.keyword===''&&this.search_date===''&&this.ruleForm.post_starter===''&&this.ruleForm.post_label==='')
          return;
         this.tableData=[];
            //  find_post_by(post_title,post_date,post_starter_ID,result)
          console.log(this.search_date)
         this.$http.post('/api/search_post', {
          // post_title,post_starter,post_label,post_date
                   post_title: this.ruleForm.keyword,
                   post_date: this.search_date,
                    post_starter:this.ruleForm.post_starter,
                    post_label: this.ruleForm.post_label
                  },{}).then((response) => {
                    // console.log(response.body[0]);
                    var dis_list = response.body[0];
                    for(var i in dis_list){
                      var t = new Array()
                      t['id']=dis_list[i].post_ID;
                      t['topic']=dis_list[i].post_title;
                      t['writer']=dis_list[i].post_starter;
                      t['post_date']=dis_list[i].post_date;
                      t['tag']=dis_list[i].post_label;
                      t['final_changer']=dis_list[i].post_last_reviser;
                      t['vis_num']=dis_list[i].post_browse_num;
                      t['anw_num']=dis_list[i].post_reply_num;
                     this.tableData.push(t)
                    }
                  })
      },
      //重置表格
      reset_form(){
      this.ruleForm={
            keyword: '',
            post_starter: '',
            post_date: '',
            post_label: '',
          }
        this.search_date = ''
      },
      //日期格式化
      dateChange(val){
        var origin = val.replace(/-/g,'');
        origin = parseInt(origin) + 1;
        this.search_date = origin.toString();
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
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
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    }

}
</script>

<style scoped>
  .container {
    width:900px;
  }
  .box-card{
    width:100%;
  }
</style>