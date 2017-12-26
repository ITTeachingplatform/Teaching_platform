//此文件用于定义在网页中不同组件共享的全局变量
//可以是cookie/账户信息/各个页面要显示的信息(初始化为空，页面加载时通过mounted进行state的更新再获取)
const teacher_account = {
    'id':'',
    'pwd':'2211358',
    'name':''
}
let page = {
    'cookie': '',
    'login_flag':'False'
}
 const state ={
     teacher_account,
     page,
 }
    

export default state