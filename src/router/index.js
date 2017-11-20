import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Start from '@/components/Start'
import Admin from '@/components/Admin'
import Index from '../admin_page/Index_page'
import Info_bar from '@/components/Info_bar'
import Manage_id from '../admin_page/Manage_id'
import Student_table from '@/components/Student_table'
import Teacher_table from '@/components/Teacher_table'
import Announce_table from '@/components/Announce_table'
import Manage_discussion from '../admin_page/Manage_discussion'
import Manage_lesson from '../admin_page/Manage_lesson'
import Manage_announce from '../admin_page/Manage_announce'
/*********教师********/
import Teacher from '@/components/Teacher/Teacher'
import Info_bar_teaacher from '@/components/Teacher/Info_bar_teacher'
import Teacher_announce from '../teacher_page/Teacher_announce'
import Teacher_courses from '../teacher_page/Teacher_courses'
import Teacher_discussion from '../teacher_page/Teacher_discussion'
import Teacher_personal from '../teacher_page/Teacher_personal'
import Teacher_index from '../teacher_page/Teacher_index'
import Teacher_platform from '../teacher_page/Teacher_platform'
/*********教师********/

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
    /******************教师页面****************** */
  ]
})
