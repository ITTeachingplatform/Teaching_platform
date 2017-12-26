<template>
  <div id="student_courses_view">
    <Student activeIndex='2'></Student>
    <div style="margin: 10px;"></div>
    <div align="center">
      <el-card class="box-card" id="card_size">
          <div slot="header" class="clearfix">
            <span>课程基本信息</span>
          </div>
          <el-form label-width="100px" :model="CourseInfo">
            <el-form-item label="课程名称">
              <el-input type="text" id="textcolor" :disabled="true" v-model="this.CourseInfo.course_name"></el-input>
            </el-form-item>
            <div style="margin: 20px 0;"></div>
            <el-form-item label="任课教师">
              <el-input type="text" id="textcolor" :disabled="true" v-model="CourseInfo.teacher_name"></el-input>
            </el-form-item>
            <div style="margin: 20px 0;"></div>
            <el-form-item label="开设学院">
              <el-input type="text" id="textcolor" :disabled="true" v-model="CourseInfo.faculty_name"></el-input>
            </el-form-item>
            <div style="margin: 20px 0;"></div>
            <el-form-item label="课程介绍">
              <el-input type="textarea" id="textcolor" autosize :disabled="true" v-model="CourseInfo.course_introduction"></el-input>
            </el-form-item>
            <div style="margin: 20px 0;"></div>
            <el-form-item label="教学大纲">
              <el-input type="textarea" id="textcolor" autosize :disabled="true" v-model="CourseInfo.sysllabus"></el-input>
            </el-form-item>
          </el-form>
      </el-card>
      <div style="margin: 20px;"></div>
      <div class="container">
        <!-- 选项卡 -->
        <div>
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="通知" name="course_announ"><course_announ></course_announ></el-tab-pane>
            <el-tab-pane label="作业" name="course_homework"><course_homework></course_homework></el-tab-pane>
            <el-tab-pane label="教学资源" name="course_resource"><course_resource></course_resource></el-tab-pane>
            <el-tab-pane label="题库" name="course_bank"><course_bank></course_bank></el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Student from '../../components/Student/Student.vue'
import course_announ from '../../components/Student/course_announ'
import course_resource from '../../components/Student/course_resource'
import course_homework from '../../components/Student/course_homework'
import course_bank from '../../components/Student/course_bank'
import store from '../../vuex/student/store'

export default {
    name: 'student_courses_view',
    components: {
        'Student': Student,
        'course_announ':course_announ,
        'course_resource':course_resource,
        'course_homework':course_homework,
        'course_bank':course_bank,
    },
    store,
    data() {
      return {
        activeName: 'course_announ',
        // student_id: store.state.student_account.id,
        t_class_ID: this.$route.params.t_class_id,
        CourseInfo:{
          course_name:'',
          teacher_name:'',
          faculty_name:'',
          course_introduction:'',
          sysllabus:''
        },
      }
    },
    mounted (){
      this.$http.post('/api/get/one_Course_allInfo', {
        t_class_ID: this.$route.params.t_class_id,
      },{}).then((response) => {
        // console.log(response.body[0]);
        this.CourseInfo.course_name = response.body[0][0].course_name;
        this.CourseInfo.teacher_name = response.body[0][0].teacher_name;
        this.CourseInfo.faculty_name = response.body[0][0].faculty_name;
        this.CourseInfo.course_introduction = response.body[0][0].course_introduction;
        this.CourseInfo.sysllabus = response.body[0][0].sysllabus;
        // console.log(this.CourseInfo);
      })
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

.text {
    font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
#card_size{
  width:850px;
  height: 500px;
}
#textcolor{
  background-color: white;
  color: black;
}
</style>
