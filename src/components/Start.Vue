<template>
<div id="start">
          <el-row style="font-size: 50px; margin-bottom: 50px">(IT项目管理)教学平台</el-row>
<el-row type="flex" justify="center">
  <el-tabs v-model="activeName2" style="width:380px" type="border-card" @tab-click="handleClick">
    <el-tab-pane label="学生" name="student"><Login></Login></el-tab-pane>
    <el-tab-pane label="教师" name="teacher"><Login></Login></el-tab-pane>
    <el-tab-pane label="管理员" name="admin"><Login></Login></el-tab-pane>
  </el-tabs>
</el-row>
</div>
</template>
<script>
 import Login from './Login.vue'
  import communication from '../assets/communication'
  export default {
    components: {
      'Login': Login  
    },
    data() {
      return {
        activeName2: 'student'
      };
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
        // console.log(this.activeName2);
        communication.$emit("role_choice", this.activeName2)
      }
    }
  };
</script>