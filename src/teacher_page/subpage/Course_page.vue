<template>
  <div id="course_page">
    <Teacher></Teacher>
    <div align="center">
      <div class="container">
        <el-row type="flex" justify="center" style="font-size:40px;margin-top:20px;margin-bottom:10px;">课程:{{CourseInfo.course_name}}</el-row>
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
        t_class_id:'',
        activeName2: 'first',
          CourseInfo:{
          course_name:'',
          teacher_name:'',
          faculty_name:'',
          course_introduction:'',
          sysllabus:''
        },

      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    mounted(){
      this.t_class_id=this.$route.params.t_class_id;
      // console.log(this.$route.params);
      // console.log(this.t_class_id);
      this.$http.post('/api/get/one_Course_allInfo', {
        t_class_ID: this.$route.params.t_class_id
      },{}).then((response) => {
        console.log(response.body[0]);
        this.CourseInfo.course_name = response.body[0][0].course_name;
        console.log(this.CourseInfo.course_name);
        // this.CourseInfo.teacher_name = response.body[0][0].teacher_name;
        // this.CourseInfo.faculty_name = response.body[0][0].faculty_name;
        // this.CourseInfo.course_introduction = response.body[0][0].course_introduction;
        // this.CourseInfo.sysllabus = response.body[0][0].sysllabus;
        // console.log(this.CourseInfo);
      })
    }
}
</script>

<style>
.container{
  width:900px;
}
</style>
