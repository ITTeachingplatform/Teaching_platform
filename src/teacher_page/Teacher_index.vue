<template>
<div id='teacher_index'>
<Teacher activeIndex='1'></Teacher>
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
<el-row type="flex" justify="center" style="font-size:40px;margin-top:10px;margin-bottom:10px;">教学信息</el-row>
<Info></Info>
</div>
</template>

<script>
import Teacher from '../components/Teacher/Teacher.vue';
import Info_bar_teacher from '../components/Teacher/Info_bar_teacher.vue';

export default {
      name: 'teacher_index',
      components: {
        'Teacher': Teacher,
        'Info': Info_bar_teacher
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
