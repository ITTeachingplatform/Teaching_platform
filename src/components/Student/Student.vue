<!--学生的主菜单和头像右边的账号姓名-->
<template>
<div id="Student">
  <el-row type="flex" justify="start">
  <el-col :span="10" :offset="4" style="font-size:40px">(IT项目管理)课程管理平台</el-col>
  <!-- <el-input icon="el-icon-picture-outline" style="width: 200px"></el-input> -->

  <el-col :span="2" :offset="1">
<Avatar></Avatar>
  </el-col>

  <el-col :span="1">
    <el-row>
<el-tag id='student_id' class="tag_style">学生账号：{{student_id}}</el-tag>
    </el-row>
    <el-row>
<el-tag id='student_name' class="tag_style">学生姓名：{{student_name}}</el-tag>
    </el-row>
  </el-col>
  </el-row>
  
  <div class="line"></div>
  <el-row type="flex" justify="center">
<el-menu  :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <router-link to="/student_index"> <el-menu-item index="1" class="guide_font">首页</el-menu-item></router-link>
  <!-- <el-submenu index="2"> -->
    <!-- <template slot="title">子菜单</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
  </el-submenu> -->
  <router-link to="/student_study"><el-menu-item index="2" class="guide_font">学习中心</el-menu-item></router-link>
  <router-link to="/student_resource"><el-menu-item index="3" class="guide_font">资源中心</el-menu-item></router-link>
  <router-link to="/student_discussion"><el-menu-item index="4" class="guide_font">讨论区</el-menu-item></router-link>
  <router-link to="/student_personal"><el-menu-item index="5" class="guide_font">个人中心</el-menu-item></router-link>
  <router-link to="/student_platform"><el-menu-item index="6" class="guide_font">平台介绍</el-menu-item></router-link>
</el-menu>
  </el-row>
  <!-- <router-view></router-view>   -->
</div>
</template>
<script>
import Avatar from '../Avatar.vue' 
import store from '../../vuex/student/store'
export default {
      name: 'Student',
      props: ['activeIndex'],
      components: {
        'Avatar': Avatar
      },
      data() {
      return {
        student_id: store.state.student_account['id'],
        student_name: store.state.student_account['name'],
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style scope>
.guide_font{
  font-size: 30px;
}
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .tag_style{
    margin-left: 5px;
    width:140px;
    margin-top:5px;
  }
</style>