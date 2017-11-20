//该文件用于定义actions各种操作
//简单描述actions: 在vuex里mutations对应methods，而actions对应methods的异步执行
//也就是说我们可以把mutations放进actions里面执行，同时还可以执行其它操作
//每个函数里commit的都是已定义好的mutations函数
import * as student from '../mutation-student'
import * as teacher from '../mutation-teacher'
import * as discussion from '../mutation-discussion'
import * as announce from '../mutation-announce'
import * as lesson from '../mutation-lesson'
 const actions = {
    get_student_info(context,payload) {
      context.commit(student.GET_INFO);
    },
    get_teacher_info(context,payload) {
      context.commit(teacher.GET_INFO);
    },
    get_announce_item(context,payload) {
      context.commit(announce.GET_ITEM);
    },
    get_lesson_item(context,payload) {
      context.commit(lesson.GET_ITEM);
    },
    get_discussion_item(context,payload) {
      context.commit(discussion.GET_ITEM);
    }
 }

 export default actions