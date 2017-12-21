<template>
<div id="add_class">
  <Admin activeIndex='5'> </Admin>
  <el-row style="font-size:50px;margin-top:20px">
        添加课程(教学班)
</el-row>

  <el-card class="box-card" style="margin-left:20%;margin-right:20%;margin-top:15px">
  <div slot="header" class="clearfix">
    <span>课程基本信息</span>
    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
  </div>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-row type="flex" justify="start">  
      <el-form-item label="课程名称" prop="subject">
    <el-input v-model="ruleForm.subject"></el-input>
  </el-form-item>

    <el-form-item label="任课老师" prop="teacher">
    <el-select v-model="ruleForm.teacher" placeholder="请选择老师">
      <el-option label="李红" value="LiHong"></el-option>
      <el-option label="林连南" value="LinLiannan"></el-option>
    </el-select>
  </el-form-item>

    <el-form-item label="开设学院" prop="school">
    <el-select v-model="ruleForm.school" placeholder="请选择学院">
      <el-option label="软件学院" value="Software"></el-option>
      <el-option label="计算机学院" value="ComputerScience"></el-option>
    </el-select>
  </el-form-item>
  </el-row>
  <el-form-item label="课程介绍" prop="introduce">
    <!-- <el-row type="flex" justify="end"><el-button round size="small" style="margin-bottom:5px">上传word文档</el-button></el-row> -->
    <el-row><el-input type="textarea" :rows="5" v-model="ruleForm.introduce"></el-input></el-row>
  </el-form-item>
  <el-form-item label="教学大纲" prop="plan">
   <!-- <el-row type="flex" justify="end"><el-button round size="small" style="margin-bottom:5px">上传word文档</el-button></el-row> -->
    <el-row><el-input type="textarea" :rows="5" v-model="ruleForm.plan"></el-input></el-row>
  </el-form-item>
</el-form>
  </el-card>


  <el-card class="box-card" style="margin-left:20%;margin-right:20%;margin-top:15px">
  <div slot="header" class="clearfix">
    <span>课程学生列表</span>
    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
  </div>

<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-row type="flex" justify="start">
    <el-form-item label="所属学院" prop="belong_school">
    <el-select v-model="ruleForm.belong_school" placeholder="请选择学院">
      <el-option label="软件学院" value="Software"></el-option>
      <el-option label="计算机学院" value="Computering"></el-option>
    </el-select>
  </el-form-item>

    <el-form-item label="所属年级" prop="belong_grade">
    <el-select v-model="ruleForm.belong_grade" placeholder="请选择年级">
      <el-option label="2014级" value="2014"></el-option>
      <el-option label="2015级" value="2015"></el-option>
    </el-select>
  </el-form-item>
  </el-row>

  <el-row type="flex" justify="start">
      <el-form-item label="所属班级" prop="belong_class">
    <el-select v-model="ruleForm.belong_grade" placeholder="请选择班级">
      <el-option label="1班" value="1"></el-option>
      <el-option label="2班" value="2"></el-option>
    </el-select>
  </el-form-item>
  <el-button round style="margin-bottom:4%;margin-left:2%">预览学生列表</el-button>
  <el-button round  style="margin-bottom:4%">批量添加学生</el-button>
  <el-button round  style="margin-bottom:4%">重置搜索条件</el-button>
  </el-row>
</el-form>
<Student_table></Student_table>
  <!-- <el-button round  style="margin-bottom:4%">添加单个学生</el-button> -->
  <el-button round style="margin-bottom:4%">删除学生</el-button>
  </el-card>
    <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
</div>  
</template>
<script>
import Admin from '../Admin'
import Student_table from './Student_table'
export default {
   name: 'add_class',
    components: {
        'Admin': Admin,
        'Student_table':Student_table
    },
    data() {
      return {
        ruleForm: {
          
        },
        rules: {

        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('成功添加课程！');
          } else {
            alert('请填写完整的相关信息！');
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

