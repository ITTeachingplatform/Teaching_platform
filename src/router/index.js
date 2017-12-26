/*********Basic********/
import Vue from 'vue'
import Router from 'vue-router'
/*********登录界面输入框&验证********/
import Login from '@/components/Login'
/*********登录页面(包含登录界面)********/
import Start from '@/components/Start'
import Platform from '@/components/Platform'
import Carousel from '@/components/Carousel' //首页走马灯
import Announce from '@/components/Announce' //公告列表

/*********Admin********/
/*********管理员导航栏********/
import Admin from '@/components/Admin'
/*********管理员主页面********/
import Index from '../admin_page/Index_page'
/*********主页面四个通知栏********/
import Info_bar from '@/components/Info_bar'
/*********用户管理页面组件********/
import Manage_id from '../admin_page/Manage_id'
/*********学生信息显示组件********/
import Student_table from '@/components/Student_table'
/*********教师信息显示组件********/
import Teacher_table from '@/components/Teacher_table'
/*********公告显示组件********/
import Announce_table from '@/components/Announce_table'
/*********讨论区管理页面********/
import Manage_discussion from '../admin_page/Manage_discussion'
/*********课程管理页面********/
import Manage_lesson from '../admin_page/Manage_lesson'
/*********公告管理页面(教师可用)********/
import Manage_announce from '../admin_page/Manage_announce'
/*********公告发布页面(教师可用)********/
import Publish_announce from '@/components/_Admin/publish_announce'
/*********添加课程学生页面(教师可用)********/
import Add_class from '@/components/_Admin/add_class'
/*********公告发布帖子页面********/
import Publish_post from '@/components/_Admin/publish_post'
/*********管理员平台简介页面********/
import Manage_platform from '../admin_page/Manage_platform'

/*********教师********/
import Teacher from '@/components/Teacher/Teacher'
import Info_bar_teacher from '@/components/Teacher/Info_bar_teacher'
import Teacher_announce from '../teacher_page/Teacher_announce'
import Teacher_courses from '../teacher_page/Teacher_courses'
import Teacher_discussion from '../teacher_page/Teacher_discussion'
import Teacher_personal from '../teacher_page/Teacher_personal'
import Teacher_index from '../teacher_page/Teacher_index'
import Teacher_platform from '../teacher_page/Teacher_platform'
import Course_page from '../teacher_page/subpage/Course_page'
import Course_introduction from '@/components/Teacher/Course_introduction'
/*********教师发布帖子********/
import Teacher_publish_post from '../teacher_page/subpage/Teacher_publish_post'

// 教师作业子页面
import Teacher_homework from '../teacher_page/subpage/Teacher_homework'

/*********Student********/
import Student from '@/components/Student/Student'
import Info_bar_Student from '@/components/Student/Info_bar_Student'
import Info_bar_Study from '@/components/Student/Info_bar_Study'
import Info_bar_Class from '@/components/Student/Info_bar_Class'
import Student_index from '../student_page/Student_index'
import Student_resource from '../student_page/Student_resource'
import Student_study from '../student_page/Student_study'
import Student_discussion from '../student_page/Student_discussion'
import Student_personal from '../student_page/Student_personal'
import Student_platform from '../student_page/Student_platform'
import Student_publish_post from '../student_page/subpage/Student_publish_post'
import Student_courses_view from '../student_page/subpage/Student_courses_view'
import Student_announce from '../student_page/Student_announce'

// test
import Test from '../Test'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    /*******************Admin*******************/
    { 
      path: '/admin/manage_id',
      name: 'Manage_id',
      component: Manage_id
    },
    { 
      path: '/admin/manage_lesson',
      name: 'Manage_lesson',
      component: Manage_lesson
    },
    { 
      path: '/admin/manage_discussion',
      name: 'Manage_discussion',
      component: Manage_discussion
    },
    { 
      path: '/admin/manage_announce',
      name: 'Manage_announce',
      component: Manage_announce
    },
    { 
      path: '/admin_index',
      name: 'admin_page',
      component: Index
    },
    {
      path: '/admin/publish_announcement',
      name: 'publish_announcement',
      component: Publish_announce
    },
    {
      path: '/admin/add_class',
      name: 'add_class',
      component: Add_class
    },
    {
      path: '/admin/publish_post',
      name: 'publish_post',
      component: Publish_post
    },
    {
      path: '/admin/platform_info',
      name: 'manage_platform',
      component: Manage_platform
    },
    /******************教师页面teacher_page****************** */
    { 
      path: '/teacher_index',
      name: 'Teacher_index',
      component: Teacher_index
    },
    { 
      path: '/teacher_announce',
      name: 'Teacher_announce',
      component: Teacher_announce
    },
    { 
      path: '/teacher_discussion',
      name: 'Teacher_discussion',
      component: Teacher_discussion
    },
    { 
      path: '/teacher_personal',
      name: 'Teacher_personal',
      component: Teacher_personal
    },
    { 
      path: '/teacher_courses',
      name: 'Teacher_courses',
      component: Teacher_courses
    },
    { 
      path: '/teacher_platform',
      name: 'Teacher_platform',
      component: Teacher_platform
    },
    {
      path: '/course_page',
      name: 'Course_page',
      component: Course_page
    },
    {
      path:'/test',
      name:'test',
      component:Test
    },
    {
      path:'/teacher/publish_post',
      name: 'Teacher_publish_post',
      component: Teacher_publish_post
    },

    {
      path:'/teacher/homework',
      name:'Teacher_homework',
      component: Teacher_homework
    },
    /*******************Student*******************/
    { 
      path: '/student_index',
      name: 'Student_index',
      component: Student_index
    },
    { 
      path: '/student_study',
      name: 'Student_study',
      component: Student_study
    },
    { 
      path: '/student_resource',
      name: 'Student_resource',
      component: Student_resource
    },
    { 
      path: '/student_discussion',
      name: 'Student_discussion',
      component: Student_discussion
    },
    { 
      path: '/student_personal',
      name: 'Student_personal',
      component: Student_personal
    },
    { 
      path: '/student_platform',
      name: 'Student_platform',
      component: Student_platform
    },
    { 
      path: '/student_announce',
      name: 'Student_announce',
      component: Student_announce
    },
    {
      path:'/student/publish_post',
      name: 'Student_publish_post',
      component: Student_publish_post
    },
    {
      path:'/student/courses_view/:t_class_id',
      name: 'Student_courses_view',
      component: Student_courses_view
    },
  ]
})
