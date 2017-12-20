//此文件用于定义mutations函数，里面的数据是样例，实际上这些函数里面应该写入数据库获取的数据
//简而言之，通过下面这些方法从数据库获取信息，然后保存到全局变量里
import * as student from '../mutation-student'
import * as teacher from '../mutation-teacher'
import * as discussion from '../mutation-discussion'
import * as announce from '../mutation-announce'
import * as lesson from '../mutation-lesson'
const mutations = {
    [student.GET_INFO] (state) {
        state.student_info = [{
            id: '2016306126xx',
            name: '饶浩聪',
            department: '软件学院',
            major: '软件工程',
            class: '4班',
            is_select: false
          }, {
            id: '2016306126xx',
            name: '小聪',
            is_select: false
          }, {
            id: '2016306126xx',
            name: '大葱',
            is_select: false
          }, {
            id: '2016306126xx',
            name: '大聪',
            is_select: false
          }]
    },
    [teacher.GET_INFO] (state){
        state.teacher_info = [{
            id: '306126xx',
            name: '李红',
            department: '软件学院',
            major: 'IT项目管理',
            take_job_date: '2008-09-01'
          }, {
            id: '306126xx',
            name: '小红',
          }, {
            id: '306126xx',
            name: '大红',
          }, {
            id: '306126xx',
            name: '大南',
          }]
    },
    [discussion.GET_ITEM] (state){
      state.discussion_info =[{
        topic: '关于上课的一点疑问',
        writer: 'XXX',
        publish_date: '2017/09/10',
        tag: 'IT项目管理、学习',
        final_changer: '小葱',
        vis_num: '155',
        sup_num: '99',
        anw_num: '10'
      }]
    },
    [lesson.GET_ITEM] (state){
      state.lesson_info =  [{
        lesson_name: 'IT项目管理',
         name: '李红',
         pub_department: '软件学院',
         publish_year: '2017'
       }]
    },
    [announce.GET_ITEM] (state){
      state.announce_info = [{
        title: '关于大学课后学习情况调查',
        writer: '饶浩聪',
        publish_date: '2017/09/10',
        brief_content: '临近期末.....大家的复习进度......',
      }, {
        title: '关于IT项目管理的注意事项',
        writer: '饶浩聪',
        publish_date: '2017/10/10',
        brief_content: '临近大作业提交，我们需要.....',
      }]
    },
  }
  export default mutations