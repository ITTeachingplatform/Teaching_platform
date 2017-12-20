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
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
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
    prop="name"
    :rules="[
    ]"
  >
    <el-input prefix-icon="el-icon-search"type="name" v-model.number="numberValidateForm.name" auto-complete="off"></el-input>
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
    <el-input prefix-icon="el-icon-search"type="date" v-model.number="numberValidateForm.publish_date" auto-complete="off"></el-input>
  </el-form-item>
</el-form>
      </el-col>

  </el-row>

  <el-row type="flex" justify="center">

    <el-button style='width:150px' type="primary">搜索</el-button>
    <el-button style='width:150px;margin-left:40px'>重置</el-button>

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
  </el-col>
</el-row>
  </el-tab-pane>


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
          radio: '1',
          numberValidateForm: {
            title: '',
            writer: '',
            publish_date: '',
            brief_content: '',
          },
        dialogFormVisible: false,
        form: {
          title: '',
          announce_type: '',
        },
        formLabelWidth: '120px',
        time: '00:00:00',
        content: '在此处修改公告内容',
        author: '管理员/老师'
        }
      },
      computed: {
         tableData:{
          get:function(){
              return store.state.announce_info
          }
         }
      },
      mounted () {
        store.dispatch('get_announce_item', {'Help_text': '此处获取公告信息'});
      },     
    methods: {
      handleEdit(index, row) {
        this.dialogFormVisible = true;
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
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
      }
    }
  }
</script>