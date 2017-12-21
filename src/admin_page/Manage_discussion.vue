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
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
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
    <el-input prefix-icon="el-icon-search"type="id_word" v-model.number="numberValidateForm.id_word" auto-complete="off"></el-input>
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
    <el-input prefix-icon="el-icon-search"type="name" v-model.number="numberValidateForm.name" auto-complete="off"></el-input>
  </el-form-item>
</el-form>
      </el-col>

  </el-row>

  <el-row type="flex" justify="start">
       <el-col>
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="80px" class="demo-ruleForm">
  <el-form-item
    label="其他条件"
    prop="other_condition"
    :rules="[
    ]"
  >
    <el-input prefix-icon="el-icon-search"type="other_condition" v-model.number="numberValidateForm.other_condition" auto-complete="off"></el-input>
  </el-form-item>
</el-form>
      </el-col>
        <el-col>
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="80px" class="demo-ruleForm">
  <el-form-item
    label="其他条件"
    prop="other_condition"
    :rules="[
    ]"
  >
    <el-input prefix-icon="el-icon-search"type="other_condition" v-model.number="numberValidateForm.other_condition" auto-complete="off"></el-input>
  </el-form-item>
</el-form>
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

            <el-table-column label="支持数" width="100px">
               <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.sup_num }}</span>
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
          numberValidateForm: {
            id_word: '',
            writer: '',
            publish_date: '',
            other_condition: '',
          }
        }
      },
      mounted () {
        store.dispatch('get_discussion_item', {'Help_text': '此处获取讨论区信息'});
      },      
      computed: {
         tableData:{
          get:function(){
              return store.state.discussion_info
          }
         }
      },
    methods: {
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
      }
    }
  }
</script>