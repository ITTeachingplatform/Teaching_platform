<template>
<div id="teacher_table">
        
  <el-row>
          <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>搜索框</span>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div>

  <el-row type="flex" justify="start">
      <el-col>
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="50px" class="demo-ruleForm">
  <el-form-item
    label="工号"
    prop="id"
    :rules="[
      { type: 'number', message: '工号必须为数字值'}
    ]"
  >
    <el-input prefix-icon="el-icon-search"type="id" v-model.number="numberValidateForm.id" auto-complete="off"></el-input>
  </el-form-item>
</el-form>
      </el-col>

<el-col>
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="50px" class="demo-ruleForm">
  <el-form-item
    label="姓名"
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
            <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="50px" class="demo-ruleForm">
  <el-form-item
    label="学院"
    prop="department"
    :rules="[
    ]"
  >
    <el-input prefix-icon="el-icon-search"type="department" v-model.number="numberValidateForm.department" auto-complete="off"></el-input>
  </el-form-item>
  <!-- <el-form-item>
    <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
    <el-button @click="resetForm('numberValidateForm')">重置</el-button>
  </el-form-item> -->
</el-form>
      </el-col>

            <el-col>
            <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="50px" class="demo-ruleForm">
  <el-form-item
    label="课程"
    prop="major"
    :rules="[
    ]"
  >
    <el-input prefix-icon="el-icon-search"type="major" v-model.number="numberValidateForm.major" auto-complete="off"></el-input>
  </el-form-item>
  <!-- <el-form-item>
    <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
    <el-button @click="resetForm('numberValidateForm')">重置</el-button>
  </el-form-item> -->
</el-form>
      </el-col>

 <el-col>
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
  <el-form-item
    label="入职时间"
    prop="take_job_date"
    :rules="[
    ]"
  >
    <el-input prefix-icon="el-icon-search"type="class" v-model.number="numberValidateForm.take_job_date" auto-complete="off"></el-input>
  </el-form-item>
</el-form>
      </el-col>

  </el-row>

  <el-row type="flex" justify="center">

    <el-button style='width:150px' type="primary">提交</el-button>
    <el-button style='width:150px;margin-left:40px'>重置</el-button>

  </el-row>

</el-card>

      </el-row>
   <el-row style="margin-top:20px">
          <el-table
    :data="tableData"
    style="width: 100%">
           
    <el-table-column
      label="工号"
      width="180px">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.id }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="姓名"
       width="150px">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>info: 可以显示额外信息</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>

      <el-table-column label="学院"  width="150px">
         <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.department }}</span>
      </template>
      </el-table-column>

            <el-table-column label="课程"  width="150px">
               <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.major }}</span>
      </template>
            </el-table-column>

            <el-table-column label="入职时间"  width="150px">
               <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.take_job_date }}</span>
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
    
</div>
</template>


<script>
import store from '../vuex/admin/store'
  export default {
      name: 'teahcer_table',
      store,
      computed: {
         tableData:{
          get:function(){
              return store.state.teacher_info
          }
         }
      },
      data() {
      return {
        numberValidateForm: {
          id: '',
          name: '',
          department: '',
          major: '',
          take_job_date: ''
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
    // 用于测试
  }
</script>