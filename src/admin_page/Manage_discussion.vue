<template>
<div id="manage_dicussion">
    <Admin activeIndex='4'> </Admin>
<el-row style="font-size:50px;margin-top:20px">
        讨论区列表
</el-row>
<router-link to="/admin/publish_post">
 <el-button round style="margin-left:600px;margin-bottom:20px">发布讨论</el-button>
</router-link>
  <el-row type="flex" justify="center">
          <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>搜索框</span>
    <el-button style="float: right; padding: 3px 0" type="text" @click="show_all">查看所有讨论</el-button>
  </div>

  <el-row type="flex" justify="start">
      <el-col>
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
  <el-form-item
    label="讨论区关键词"
    prop="id_word"
    :rules="[
    ]"
  >
    <el-input prefix-icon="el-icon-search" type="id_word" v-model.number="numberValidateForm.id_word" auto-complete="off"></el-input>
  </el-form-item>
</el-form>
      </el-col>

<el-col>
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="220px" class="demo-ruleForm">
  <el-form-item
    label="讨论区发布者(教师/学生/管理员)"
    prop="name"
    :rules="[
    ]"
  >
    <el-input prefix-icon="el-icon-search" type="name" v-model.number="numberValidateForm.name" auto-complete="off"></el-input>
  </el-form-item>
</el-form>
      </el-col>

  </el-row>

  <el-row type="flex" justify="start">
       <el-col>
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="80px" class="demo-ruleForm">
  <el-form-item
    label="标签"
    prop="label"
    :rules="[
    ]"
  >
    <el-input prefix-icon="el-icon-search" type="other_condition" v-model.number="numberValidateForm.label" auto-complete="off"></el-input>
  </el-form-item>
</el-form>
      </el-col>

 <el-col>
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="150px" class="demo-ruleForm">
  <el-form-item
    label="发布时间"
    prop="publish_date"
    :rules="[
    ]"
  >
      <el-date-picker type="date" v-model="numberValidateForm.publish_date" value-format="yyyy-MM-dd" @change="dateChange" auto-complete="off"></el-date-picker>
       <!-- <el-input prefix-icon="el-icon-search"type="date"  @change="dateChange" v-model.number="numberValidateForm.publish_date" auto-complete="off"></el-input> -->
  </el-form-item>
</el-form>
      </el-col>

  </el-row>

  <el-row type="flex" justify="center">

    <el-button style='width:150px' type="primary" @click="search_post">搜索</el-button>
    <el-button style='width:150px;margin-left:40px' @click="reset_form">重置</el-button>

  </el-row>

</el-card>

      </el-row>
         
  <el-row type="flex" justify="center" style="margin-left:9%">
          <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="讨论主题"
      width="100px">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.topic }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="发布者"
      width="120px">
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

      <el-table-column label="发布时间" width="150px">
         <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.publish_date }}</span>
      </template>
      </el-table-column>

            <el-table-column label="标签" width="200px">
               <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.tag }}</span>
      </template>
            </el-table-column>

            <el-table-column label="最后评论者" width="100px">
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

    <el-table-column label="操作" width="150px">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
   </el-row>


    
</div>
</template>


<script>
import Admin from '../components/Admin';
import store from '../vuex/admin/store';
  export default {
      name: 'manage_dicussion',
      components: {
      'Admin': Admin
      },
      store,
      data() {
        return {
          radio: '1',
          search_date: '',
          numberValidateForm: {
            id_word: '',
            writer: '',
            publish_date: '',
            label: '',
          },
          tableData:[]
        }
      },
      mounted () {
        // store.dispatch('get_discussion_item', {'Help_text': '此处获取讨论区信息'});
                this.$http.post('/api/get', {
                    type: 'discuss_list'
                  },{}).then((response) => {
                    // console.log(response.body);
                    var dis_list = response.body;
                    for(var i=0;i<dis_list[0].length;i++){
                      var t = new Array()
                      t['topic']=dis_list[0][i].post_title;
                      t['writer']=dis_list[0][i].post_starter;
                      t['publish_date']=dis_list[0][i].post_date;
                      t['tag']=dis_list[0][i].post_label;
                      t['final_changer']=dis_list[0][i].post_last_reviser;
                      t['vis_num']=dis_list[0][i].post_browse_num;
                      t['anw_num']=dis_list[0][i].post_reply_num;
                     this.tableData.push(t)
                    }
                  })
      },      
      // computed: {
      //    tableData:{
      //     get:function(){
      //         return store.state.discussion_info
      //     }
      //    }
      // },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
         this.$confirm('确认删除这条讨论？')
          .then(_ => {
            // done();
            this.tableData.splice(index,1);
        alert('成功删除该讨论！')
          })
          .catch(_ => {});
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
      //讨论区搜索
      search_post(){
        if(this.numberValidateForm.id_word===''&&this.search_date===''&&this.numberValidateForm.writer===''&&this.numberValidateForm.label==='')
          return;
         this.tableData=[];
            //  find_post_by(post_title,post_date,post_starter_ID,result)
          console.log(this.search_date)
         this.$http.post('/api/search_post', {
          // post_title,post_starter,post_label,post_date
                   post_title: this.numberValidateForm.id_word,
                   post_date: this.search_date,
                    post_starter:this.numberValidateForm.writer,
                    post_label: this.numberValidateForm.label
                  },{}).then((response) => {
                    // console.log(response.body[0]);
                    var dis_list = response.body[0];
                    for(var i in dis_list){
                      var t = new Array()
                      t['topic']=dis_list[i].post_title;
                      t['writer']=dis_list[i].post_starter;
                      t['publish_date']=dis_list[i].post_date;
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
      this.numberValidateForm={
            id_word: '',
            writer: '',
            publish_date: '',
            label: '',
          }
        this.search_date = ''
      },
      //日期格式化
      dateChange(val){
        var origin = val.replace(/-/g,'');
        origin = parseInt(origin) + 1;
        this.search_date = origin.toString();
      },
      show_all(){
        this.tableData =[]
                this.$http.post('/api/get', {
                    type: 'discuss_list'
                  },{}).then((response) => {
                    // console.log(response.body);
                    var dis_list = response.body;
                    for(var i=0;i<dis_list[0].length;i++){
                      var t = new Array()
                      t['topic']=dis_list[0][i].post_title;
                      t['writer']=dis_list[0][i].post_starter;
                      t['publish_date']=dis_list[0][i].post_date;
                      t['tag']=dis_list[0][i].post_label;
                      t['final_changer']=dis_list[0][i].post_last_reviser;
                      t['vis_num']=dis_list[0][i].post_browse_num;
                      t['anw_num']=dis_list[0][i].post_reply_num;
                     this.tableData.push(t)
                    }
                  })
      }
    }
  }
</script>