//此文件用于定义mutations函数，里面的数据是样例，实际上这些函数里面应该写入数据库获取的数据
//简而言之，通过下面这些方法从数据库获取信息，然后保存到全局变量里
import * as personal from '../mutation-personal'
import * as discussion from '../mutation-discussion'
import * as announce from '../mutation-announce'
import * as courses from '../mutation-courses'
const mutations = {
    [personal.GET_ITEM] (state){
        state.personal_info = [{
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
    [courses.GET_ITEM] (state){
      state.courses_info =  [{
        courses_name: 'IT项目管理',
         id: '101',
         teaching_class:'15级3、4班',
         pub_department: '软件学院',
         publish_year: '2017'
       }]
    },
    [announce.GET_ITEM] (state){
      state.announce_info = [{
        announcement_ID:'',
        announcement_title: '关于大学课后学习情况调查',
        announcement_content:'',
        announcement_date: '2017/09/10',
        ann_publisher: '饶浩聪',
        ann_course:'',            //公告所属课程
        brief_content: '临近期末.....大家的复习进度......',
      }, {
        cou_announcement_ID:'',
        announcement_title: '关于大学课后学习情况调查',
        announcement_content:'',
        announcement_date: '2017/09/10',
        ann_publisher: '饶浩聪',
        ann_course:'',            //公告所属课程
        brief_content: '临近期末.....大家的复习进度......',
      }]
    },
  }
  export default mutations