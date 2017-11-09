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
  ]
})
