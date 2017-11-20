<template>
<div id="manage_lesson">
      <Admin activeIndex='5'> </Admin>
<el-row style="font-size:50px;margin-top:20px">
        课程列表
</el-row>
 <el-button round style="margin-left:600px;margin-bottom:20px">添加课程</el-button> 
  
<el-row type="flex" justify="center" style="margin-left:50px;margin-right:50px">
          <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>搜索框</span>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div>

  <el-row type="flex" justify="start">
      <el-col>
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
  <el-form-item
    label="课程名称"
    prop="lesson_name"
    :rules="[
    ]"
  >
    <el-input type="lesson_name" v-model.number="numberValidateForm.lesson_name" auto-complete="off"></el-input>
  </el-form-item>
</el-form>
      </el-col>

<el-col>
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="220px" class="demo-ruleForm">
  <el-form-item
    label="任课老师"
    prop="name"
    :rules="[
    ]"
  >
    <el-input type="name" v-model.number="numberValidateForm.name" auto-complete="off"></el-input>
  </el-form-item>
</el-form>
      </el-col>

  </el-row>

  <el-row type="flex" justify="start">
       <el-col>
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="80px" class="demo-ruleForm">
  <el-form-item
    label="开设学院"
    prop="pub_department"
    :rules="[
    ]"
  >
    <el-input type="pub_department" v-model.number="numberValidateForm.pub_department" auto-complete="off"></el-input>
  </el-form-item>
</el-form>
      </el-col>
        <el-col>
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="80px" class="demo-ruleForm">
  <el-form-item
    label="备选"
    prop="other_condition"
    :rules="[
    ]"
  >
    <el-input type="other_condition" v-model.number="numberValidateForm.other_condition" auto-complete="off"></el-input>
  </el-form-item>
</el-form>
      </el-col>
 <el-col>
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="150px" class="demo-ruleForm">
  <el-form-item
    label="开设年份"
    prop="publish_year"
    :rules="[
    ]"
  >
    <el-input type="publish_year" v-model.number="numberValidateForm.publish_year" auto-complete="off"></el-input>
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
<el-row type="flex" justify="center" style="margin-left:21%">
         
          <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="课程名称"
      width="150px">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.lesson_name }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="开设学院"
      width="150px">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>学院: {{ scope.row.pub_department }}</p>
          <p>info: 可以显示额外信息</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.pub_department }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>

      <el-table-column label="开设年份" width="150px">
         <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.publish_year }}</span>
      </template>
      </el-table-column>

            <el-table-column label="任课老师" width="150px">
               <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
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
import Admin from '../components/Admin'
import store from '../vuex/admin/store'
  export default {
      name: 'manage_lesson',
      components: {
        'Admin': Admin
      },
      store,
      data() {
      return {
        numberValidateForm: {
          lesson_name: '',
          name: '',
          pub_department: '',
          other_condition: '',
          publish_year: ''
        }
      }
    },
     computed: {
         tableData:{
          get:function(){
              return store.state.lesson_info
          }
         }
      },
    mounted () {
        store.dispatch('get_lesson_item', {'Help_text': '此处获取课程信息'});
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