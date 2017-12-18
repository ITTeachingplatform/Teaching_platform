//该文件用于定义actions各种操作
//简单描述actions: 在vuex里mutations对应methods，而actions对应methods的异步执行
//也就是说我们可以把mutations放进actions里面执行，同时还可以执行其它操作
//每个函数里commit的都是已定义好的mutations函数
import * as personal from '../mutation-personal'
import * as discussion from '../mutation-discussion'
import * as announce from '../mutation-announce'
import * as courses from '../mutation-courses'
 const actions = {
    get_personal_item(context,payload) {
      context.commit(personal.GET_ITEM);
    },
    get_announce_item(context,payload) {
      context.commit(announce.GET_ITEM);
    },
    get_courses_item(context,payload) {
      context.commit(courses.GET_ITEM);
    },
    get_discussion_item(context,payload) {
      context.commit(discussion.GET_ITEM);
    }
 }

 export default actions