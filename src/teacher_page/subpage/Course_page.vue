<template>
  <div id="course_page">
    <Teacher></Teacher>
    <div align="center">
      <div class="container">
        <el-row type="flex" justify="center" style="font-size:40px;margin-top:20px;margin-bottom:10px;">项目管理</el-row>
        <el-progress :percentage="100" :show-text="false"></el-progress>
        <!-- 选项卡 -->
        <div>
          <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="课程介绍" name="first"><Introduction></Introduction></el-tab-pane>
            <el-tab-pane label="管理通知" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="教学资源" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="作业" name="fourth">定时任务补偿</el-tab-pane>
            <el-tab-pane label="题库" name="fifth">定时任务补偿</el-tab-pane>
            <el-tab-pane label="班级成员" name="sixth">定时任务补偿</el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Teacher from '../../components/Teacher/Teacher.vue';
import Course_introduction from '../../components/Teacher/Course_introduction'
export default {
    name: 'Course_page',
    components: {
      'Teacher':Teacher,
      'Introduction':Course_introduction
    },
    data() {
      return {
        activeName2: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }

}
</script>

<style>
.container{
  width:900px;
}
</style>
