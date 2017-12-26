<template>
<div id='teacher_it_project'>
<Teacher></Teacher>
<el-row style="font-size:40px">课程: {{lesson_name}}</el-row>
<el-row type='flex' justify="center">
  <div class="block" style="width:900px;margin-top:20px">
    <el-progress :percentage="100" :show-text="false"></el-progress>
    
    <!-- <el-row :gutter="20">
            <el-col :span="5">教师姓名: {{ teacherName }}</el-col>
            <el-col :span="5">所属院系: {{ major }}</el-col>
            <el-col :span="10">个人简介: {{ introduction }}</el-col>
    </el-row> -->





    <el-row :gutter="20">
        <el-col :span="24">
        <el-tabs :tab-position="tabPosition" >
            <!-- <el-tabs @tab-click="routerTo" class="tab"> -->
              <el-tab-pane label="课程介绍">
                  <course_intro></course_intro>  
              </el-tab-pane>

              <el-tab-pane label="管理通知">
                <course_announ></course_announ> 
              </el-tab-pane>
              <el-tab-pane label="教学资源">
                <course_resource></course_resource>
              </el-tab-pane>
              <el-tab-pane label="作业">
                <course_homework></course_homework>
              </el-tab-pane>
                
              <el-tab-pane label="题库"></el-tab-pane>
                <course_bank></course_bank>
              <el-tab-pane label="班级成员"></el-tab-pane>
            </el-tabs>
          </el-col>
    </el-row>

    

  </div>
</el-row>
</div>
</template>

<script>
import Teacher from '../components/Teacher/Teacher'
import course_intro from '../components/Teacher/course_intro'
import course_announ from '../components/Teacher/course_announ'
import course_resource from '../components/Teacher/course_resource'
import course_homework from '../components/Teacher/course_homework'
import course_bank from '../components/Teacher/course_bank'
import store from '../vuex/teacher/store'
  export default {
    components:{
      'Teacher': Teacher,
      'course_intro': course_intro,
      'course_announ': course_announ,
      'course_resource':course_resource,
      'course_homework':course_homework,
      'course_bank':course_bank,
    },
    store,
    mounted(){
      store.dispatch('get_lesson_info')
    },
          
    data(){
      return{
        lesson_name:"it项目管理",
        numberValidateForm: {
          lesson_name:'',
          department:'',
        }
      };
    },
    name:'Teacher_it_project',

     
    methods: {
    }
  }
</script>