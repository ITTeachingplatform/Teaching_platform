/*********Basic********/
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Start from '@/components/Start'
import Platform from '@/components/Platform'
import Carousel from '@/components/Carousel' //首页走马灯
import Announce from '@/components/Announce' //公告列表

/*********Admin********/
import Admin from '@/components/Admin'
import Info_bar from '@/components/Info_bar'
import Student_table from '@/components/Student_table'
import Teacher_table from '@/components/Teacher_table'
import Announce_table from '@/components/Announce_table'
import Index from '../admin_page/Index_page'
import Manage_id from '../admin_page/Manage_id'
import Manage_discussion from '../admin_page/Manage_discussion'
import Manage_lesson from '../admin_page/Manage_lesson'
import Manage_announce from '../admin_page/Manage_announce'

/*********Teacher********/
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
/*********Student********/
import Student from '@/components/Student/Student'
import Info_bar_Student from '@/components/Student/Info_bar_Student'
import Student_announce from '../student_page/Student_announce'
import Student_resource from '../student_page/Student_resource'
import Student_study from '../student_page/Student_study'
import Student_discussion from '../student_page/Student_discussion'
import Student_personal from '../student_page/Student_personal'
import Student_index from '../student_page/Student_index'
import Student_platform from '../student_page/Student_platform'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test_info',
      component: Manage_lesson
    },
    {
      path: '/start',
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
    /*******************Teacher*******************/
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
  ]
})
