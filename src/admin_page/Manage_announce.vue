<template>
<div id="announce_table">
      <Admin activeIndex='3'> </Admin>
  <el-row style="font-size:50px;margin-top:20px">
        公告列表
</el-row>
 <router-link to="/admin/publish_announcement"><el-button round style="margin-left:600px;margin-bottom:20px">发布公告</el-button></router-link>
        
<el-row type="flex" justify="center" style="margin-left:50px;margin-right:50px">
          <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>搜索框</span>
    <el-button style="float: right; padding: 3px 0" type="text" @click="show_all">查看全部公告</el-button>
  </div>

  <el-row type="flex" justify="start">
      <el-col>
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="150px" class="demo-ruleForm">
  <el-form-item
    label="公告关键词"
    prop="id_word"
    :rules="[
    ]"
  >
    <el-input prefix-icon="el-icon-search" type="id_word" v-model.number="numberValidateForm.id_word" auto-complete="off"></el-input>
  </el-form-item>
</el-form>
      </el-col>

<el-col>
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="250px" class="demo-ruleForm">
  <el-form-item
    label="公告发布者(教师名称/编号/管理员)"
    prop="writer"
    :rules="[
    ]"
  >
    <el-input prefix-icon="el-icon-search" type="name" v-model.number="numberValidateForm.writer" auto-complete="off"></el-input>
  </el-form-item>
</el-form>
      </el-col>

  </el-row>

  <el-row type="flex" justify="start">
<el-col>
 <el-radio v-model="radio" label="1">管理员公告/系统公告</el-radio>
  <el-radio v-model="radio" label="2">教师公告/教学公告</el-radio>
</el-col>
 <el-col>
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="150px" class="demo-ruleForm">
  <el-form-item
    label="公告发布时间"
    prop="publish_date"
    :rules="[
    ]"
  >

                    <el-date-picker type="date" v-model="numberValidateForm.publish_date" value-format="yyyy-MM-dd" @change="dateChange" auto-complete="off"></el-date-picker>


  </el-form-item>
</el-form>
      </el-col>

  </el-row>

  <el-row type="flex" justify="center">

    <el-button style='width:150px' type="primary" @click="search_announcement">搜索</el-button>
    <el-button style='width:150px;margin-left:40px' @click="reset_form">重置</el-button>

  </el-row>

</el-card>

      </el-row>
           
<el-row type="flex" justify="center" style="margin-left:11%">
          <el-table
    :data="tableData"
    style="width: 100%;margin-top:20px">
    <el-table-column
      label="公告标题"
      width="280px">
      <template slot-scope="scope">
        <span style="margin-left: 10px" @click="show_announce(scope.$index)">{{ scope.row.title }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="发布者"
      width="150px">
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

      <el-table-column label="发布时间(年月日)" width="150px">
         <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.publish_date }}</span>
      </template>
      </el-table-column>

            <el-table-column label="内容摘要" width="280px">
               <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.brief_content }}</span>
      </template>
            </el-table-column>

    <el-table-column label="操作" width="150px">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
   </el-row>



<!-- 修改公告对话框 -->
<el-dialog title="修改公告" :visible.sync="dialogFormVisible" :before-close="handleClose">
  <el-form :model="form">
    <el-form-item label="公告名称" :label-width="formLabelWidth">
      <el-input v-model="form.title" auto-complete="off"></el-input>
    </el-form-item>
    <el-row type="flex"  justify="start">
    <el-col :span="10"><el-form-item label="发布者"  :label-width="formLabelWidth">{{author}}</el-form-item></el-col>
    <el-form-item label="发布时间"  :label-width="formLabelWidth">{{time}}</el-form-item>
    </el-row>
    <el-form-item label="公告类型(标签)" :label-width="formLabelWidth">
      <el-select v-model="form.announce_type" placeholder="请选择公告类型(标签)" style="margin-right:65%;width:300px">
        <el-option label="系统公告" value="system"></el-option>
        <el-option label="课程公告" value="lesson"></el-option>
      </el-select>
    </el-form-item>
    <el-input
  type="textarea"
  :rows="10"
  placeholder="请输入内容"
  v-model="content">
</el-input>

  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">修 改</el-button>
  </div>

</el-dialog>


</div>
</template>


<script>
import Admin from '../components/Admin'
import store from '../vuex/admin/store'
  export default {
      name: 'announce_table',
      components: {
        'Admin': Admin
      },
    store,  
      data() {
        return {
          tableData: [],
          radio: '1',
          numberValidateForm: {
            id_word: '',
            writer: '',
            publish_date: '',
            brief_content: '',
          },
        dialogFormVisible: false,
        form: {
          title: '',
          announce_type: 'system',
        },
        formLabelWidth: '120px',
        time: '00:00:00',
        content: '在此处修改公告内容',
        author: '管理员/老师',
        search_date: ''
        }
      },
      // computed: {
      //    tableData:{
      //     get:function(){
      //         return store.state.announce_info
      //     }
      //    }
      // },
      // mounted () {
      //   store.dispatch('get_announce_item', {'Help_text': '此处获取公告信息'});
      // },     
      mounted () {
          this.show_all()
      },     
    methods: {
      handleEdit(index, row) {
        this.time = this.tableData[index].publish_date,
        this.content=this.tableData[index].brief_content,
        this.author=this.tableData[index].writer,
        this.form = {
          title:this.tableData[index].title ,
          announce_type: 'system',
        },
        this.dialogFormVisible = true;
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
         this.$confirm('确认删除这条公告？')
          .then(_ => {
            // done();
            this.tableData.splice(index,1);
        alert('成功删除该公告！')
          })
          .catch(_ => {});
      },
      show_announce(index){
        console.log(index);
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
      handleClose(done) {
        this.$confirm('确认修改公告？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      search_announcement(){
         this.tableData=[];
         this.$http.post('/api/search_announcement', {
          //  announcement_title,announcement_date,sys_ann_publisher
                    announcement_title: this.numberValidateForm.id_word,
                    announcement_date: this.search_date,
                    sys_ann_publisher:this.numberValidateForm.writer,
                  },{}).then((response) => {
                    // console.log(response.body[0]);
                    var ann_list = response.body[0];
                    for(var i in ann_list){

                      var t = new Array()

                      t['title']=ann_list[i].announcement_title;

                      t['writer']=ann_list[i].sys_ann_publisher;

                      t['publish_date']=ann_list[i].announcement_date;

                      t['brief_content']=ann_list[i].announcement_content;
                      if(this.radio === '1' && ann_list[i].sys_announcement_ID)
                          this.tableData.push(t)
                      if(this.radio === '2' && ann_list[i].cou_announcement_ID){
                          t['writer']=ann_list[i].cou_ann_publisher;
                          this.tableData.push(t)
                      }
                    }
                    this.search_date=''
                  })
      },
      //重置表格
      reset_form(){
      this.numberValidateForm={
            title: '',
            writer: '',
            publish_date: '',
            brief_content: '',
          }
      },
      //日期格式化
      dateChange(val){
        var origin = val.replace(/-/g,'');
        origin = parseInt(origin) + 1;
        this.search_date = origin.toString();
      },
      show_all(){
        this.tableData=[]
        this.$http.post('/api/search_announcement', {
          //  announcement_title,announcement_date,sys_ann_publisher
                    announcement_title: '',
                    announcement_date: '',
                    sys_ann_publisher:'',
                  },{}).then((response) => {

                    // console.log(response.body);

                    var ann_list = response.body[0];

                    // console.log(ann_list);

                    for(var i in ann_list){

                      var t = new Array()

                      t['title']=ann_list[i].announcement_title;

                      t['writer']=ann_list[i].sys_ann_publisher;

                      t['publish_date']=ann_list[i].announcement_date;

                      t['brief_content']=ann_list[i].announcement_content;
                      if(ann_list[i].cou_announcement_ID){
                          t['writer']=ann_list[i].cou_ann_publisher;
                      }
                          this.tableData.push(t)

                    }

                  })
      },
      // add_one_announcement(publisher_ID,flag,title,content,course_ID,result)
      // add_ann(){
      //     this.$http.post('/api/add_announcement', {
      //     //  announcement_title,announcement_date,sys_ann_publisher
      //               publisher_ID: 'AD000001',
      //               flag: '',
      //               title:'',
      //               content:'',
      //               course_ID:'CO000003'
      //             },{}).then((response) => {
      //                 var result = response.body;
      //                 if(result[1]===0){
      //                   alert('发表公告成功，新增ID号为：'+result[0]);
      //                 }
      //                 else{
      //                   alert('公告发表失败，请确认填写信息是否完整！');
      //                 }

      //               })
      // }
    }
  }
</script>