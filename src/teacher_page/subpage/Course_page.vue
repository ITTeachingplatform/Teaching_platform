<template>
  <div id="course_page">
    <Teacher></Teacher>
    <div align="center">
      <div class="container">
        <el-row type="flex" justify="center" style="font-size:40px;margin-top:20px;margin-bottom:10px;">课程:{{lesson_name}}</el-row>
        <el-progress :percentage="100" :show-text="false"></el-progress>
        <!-- 选项卡 -->
        <div>
          <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="课程介绍" name="first"><Introduction></Introduction></el-tab-pane>
            <el-tab-pane label="管理通知" name="second"><course_announ></course_announ></el-tab-pane>
            <el-tab-pane label="教学资源" name="third"><course_resource></course_resource></el-tab-pane>
            <el-tab-pane label="作业" name="fourth"><course_homework></course_homework></el-tab-pane>
            <el-tab-pane label="题库" name="fifth"><course_bank></course_bank></el-tab-pane>
            <el-tab-pane label="班级成员" name="sixth"><course_studentTable></course_studentTable></el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Teacher from '../../components/Teacher/Teacher.vue';
import Course_introduction from '../../components/Teacher/Course_introduction'
import course_announ from '../../components/Teacher/course_announ'
import course_resource from '../../components/Teacher/course_resource'
import course_homework from '../../components/Teacher/course_homework'
import course_bank from '../../components/Teacher/course_bank'

import course_studentTable from '../../components/Teacher/course_studentTable'
export default {
    name: 'Course_page',
    components: {
      'Teacher':Teacher,
      'Introduction':Course_introduction,
      'course_announ':course_announ,
      'course_resource':course_resource,
      'course_homework':course_homework,
      'course_bank':course_bank,
      'course_studentTable':course_studentTable,
    },
    data() {
      return {
        lesson_name:'项目管理',
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
