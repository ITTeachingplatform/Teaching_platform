var Admin = require('../ServiceModule/AdminService');
var express = require('express')
var router = express.Router();
// 登录接口
router.post('/check', (req, res) => {
    console.log('Checking');
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    if(params.type == 'student'){
        AdminService.login_student(params.student_id,params.student_password,result);
        console.log(params.student_password);
        setTimeout(function(){
            res.send(result);
        }, 1000)
    }
    else if(params.type == 'teacher'){
        AdminService.login_teacher(params.teacher_id,params.teacher_password,result);
        console.log(params.teacher_password);
        setTimeout(function(){
            res.send(result);
        }, 1000)
    }
    else{
        AdminService.login_admin(params.admin_id,params.admin_password,result);
        console.log(params.admin_password);
        setTimeout(function(){
            res.send(result);
        }, 1000)
    }
});
//在所有的公告中搜索
router.post('/search_announcement', (req, res) => {
    console.log('Searching announcement');
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    var result_2 = new Array();
    AdminService.find_sysannouncement_by(params.announcement_title,params.announcement_date,params.sys_ann_publisher,result);
    AdminService.find_couannouncement_by(params.announcement_title,params.announcement_date,params.sys_ann_publisher,result_2);
    setTimeout(function(){
    console.log(result)
    for(var i in result[0]){
    result_2[0][i]=result[0][i];
    }
    res.send(result_2);
    }, 1000)
});

//最新4条系统公告
router.post('/get',  (req, res) => {
    var params = req.body;
    if(params.type == 'sys_announce'){
        console.log('Getting announcement');
    var AdminService = new Admin();
    var result = new Array();
    AdminService.load_numLatest_sysannouncement(result);
    setTimeout(function(){
        res.send(result);
    }, 1000)
}
//所有系统公告
else if(params.type == 'all_sys_announcement'){
    console.log('Getting all_sys_announcement');
    var AdminService = new Admin();
    var result = new Array();
    AdminService.load_numLatest_sysannouncement(result,100);
    setTimeout(function(){
        console.log(result);        
        res.send(result);
    }, 1000)
}
//所有教学公告
else if(params.type == 'all_cou_announcement'){
    console.log('Getting all_cou_announcement');
    var AdminService = new Admin();
    var result = new Array();
    AdminService.load_numLatest_couannouncement(result,100);
    setTimeout(function(){
        console.log(result);        
        res.send(result);
    }, 1000)
}
else if(params.type == 'student_list'){
    console.log('Getting student_list');
    var AdminService = new Admin();
    var result = new Array();
    AdminService.find_student_by('','','','',result)
    setTimeout(function(){
        console.log(result);
        res.send(result);
    }, 1000)
}
else if(params.type == 'discuss_list'){
    console.log('Getting discuss_list');
    var AdminService = new Admin();
    var result = new Array();
    AdminService.load_numLatest_post(result);
    setTimeout(function(){
        console.log(result);
        res.send(result);
    }, 1000)
}
else if(params.type == 'cou_announce'){
    console.log('Getting cou_announce');
    var AdminService = new Admin();
    var result = new Array();
    AdminService.load_numLatest_couannouncement(result);
    setTimeout(function(){
        res.send(result);
    }, 1000)
}
else if(params.type == 'latest_discussion'){
    console.log('Getting latest_discussion');
    var AdminService = new Admin();
    var result = new Array();
    AdminService.load_numLatest_post(result);
    setTimeout(function(){
        res.send(result);
    }, 1000)
}
else if(params.type == 'course_list'){
    console.log('Getting course_list');
    var AdminService = new Admin();
    var result = new Array();
    AdminService.load_allCourse_one_teacher('',result);
    setTimeout(function(){
        console.log(result);
        res.send(result);
    }, 1000)
}
else if(params.type == 'allCourse_one_teacher'){
    console.log('Getting allCourse_one_teacher');
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    AdminService.load_allCourse_one_teacher(params.teacher_id,result);
    setTimeout(function(){
        console.log(result);
        res.send(result);
    }, 1000)
}
});
//教师首页 未批改作业
router.post('/get_UnCorrectHomework_one_teacher', (req, res) => {
    console.log('Getting UnCorrectHomework_one_teacher');    
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    AdminService.load_UnCorrectHomework_one_teacher(params.teacher_id,result);
    setTimeout(function(){
        console.log(result);
        res.send(result);
    }, 1000)
});

module.exports = router;