<template>
<div id='index'>
<Admin activeIndex='1'></Admin>
<el-row type='flex' justify="center">
  <div class="block" style="width:900px;margin-top:20px">
    <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
  </div>
</el-row>
<el-row type="flex" justify="center" style="font-size:40px;margin-top:10px;margin-bottom:10px;">平台信息</el-row>
<Info></Info>
</div>
</template>

<script>
import Admin from '../components/Admin.vue';
import Info_bar from '../components/Info_bar.vue';

export default {
      name: 'index',
      components: {
        'Admin': Admin,
        'Info': Info_bar
      }
}
</script>

<style scope>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
