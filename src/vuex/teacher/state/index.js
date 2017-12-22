//此文件用于定义在网页中不同组件共享的全局变量
//可以是cookie/账户信息/各个页面要显示的信息(初始化为空，页面加载时通过mounted进行state的更新再获取)
const teacher_account = {
    'id':'201530612644',
    'pwd':'2211358'
}
let page = {
    'cookie': '',
    'login_flag':'False'
}
let personal_info = []
let announce_info = []
let discussion_info = []
let courses_info = []
const state = {
    teacher_account,
    page,
    personal_info,
    announce_info,
    discussion_info,
    courses_info
}

export default state