<template>
  <div id="teacher_platform">
      <Teacher activeIndex='6'></Teacher>
      <el-row type="flex" justify="center" style="font-size:40px;margin-top:20px;margin-bottom:10px;">平台信息</el-row>
<el-row type='flex' justify="center">
  <div class="block" style="width:900px;margin-top:10px">
      <el-progress :percentage="100" :show-text="false"></el-progress>
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">当前位置：平台信息</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">当前位置：版本特性</el-tab-pane>
        <el-tab-pane label="用户手册" name="third">当前位置：用户手册</el-tab-pane>    
      </el-tabs>
  </div>
</el-row>







  </div>
</template>

<script>
import Teacher from '../components/Teacher/Teacher.vue';
export default {
    name: 'teacher_platform',
      components: {
        'Teacher': Teacher,
      }   
}
</script>

<style>

</style>