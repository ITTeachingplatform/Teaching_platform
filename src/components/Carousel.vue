<template>
    <el-row type='flex' justify="center">
  <div class="block" style="width:900px;margin-top:20px">
    <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
    <el-carousel height="250px">
      <el-carousel-item v-for="item in 4" :key="item">
         <el-row type="flex" justify="end">
        <el-button round style="margin-right: 20px; margin-top:20px">查看更多</el-button>
        </el-row>
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</el-row>
</template>

<script>
export default {
    name:'carousel',

}
</script>

<style>
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
