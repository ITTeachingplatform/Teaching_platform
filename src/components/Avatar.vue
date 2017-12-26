<template>
<div id="avatar">
    <el-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
    <el-button type="primary" :loading="true" style="height:85px">头像</el-button>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="a">XX设置</el-dropdown-item>
    <el-dropdown-item command="b">XX设置</el-dropdown-item>
    <el-dropdown-item command="c">退出</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
</div>
</template>
<script>
export default {
    name: 'Avatar',
    methods:{
    handleCommand(command) {
        if(command==='c')
         this.$router.replace('/')
      }
    }
     }
</script>
