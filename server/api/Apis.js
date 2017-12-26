var Admin = require('../ServiceModule/AdminService');
var express = require('express')
var router = express.Router();
// 增加管理员登录接口
router.post('/check', (req, res) => {
    console.log('Checking');
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    AdminService.login_admin(params.admin_id,params.admin_password,result);
    console.log(params.admin_password);
    setTimeout(function(){
        res.send(result);
    }, 1000)
});
//学生搜索
router.post('/search_student', (req, res) => {
    console.log('Searching students');
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    AdminService.find_student_by(params.student_ID,params.student_name,params.faculty_name,params.major_name,params.class_name,result);
    setTimeout(function(){
        res.send(result);
    }, 1000)
});

//教师搜索
router.post('/search_teacher', (req, res) => {
    console.log('Searching teachers');
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    AdminService.find_teacher_by(params.teacher_ID,params.teacher_name,params.faculty_name,result);
    setTimeout(function(){
        res.send(result);
    }, 1000)
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


//讨论区搜索
router.post('/search_post', (req, res) => {
    console.log('Searching post');
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    AdminService.find_post_by(params.post_title,params.post_starter,params.post_label,params.post_date,result);
    setTimeout(function(){
        console.log(result)
        res.send(result);
    }, 1000)
});
// find_course_by(course_name,faculty_name,teacher_name,result)

// 课程搜索
router.post('/search_course', (req, res) => {
    console.log('Searching post');
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    AdminService.find_course_by(params.course_name,params.faculty_name,params.teacher_name,result);
    setTimeout(function(){
        console.log(result)
        res.send(result);
    }, 1000)
});

//学生获取信息(获取密码简介等)
router.post('/student_all_info', (req, res) => {
    console.log('Getting student_all_info');
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    AdminService.load_one_student(params.id,result);
    setTimeout(function(){
        res.send(result);
    }, 1000)
});
//学生修改信息
// modify_one_student(student_id,passwd,student_email,student_introduction,result)
router.post('/modify_student', (req, res) => {
    console.log('Modifying a student');
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    AdminService.modify_one_student(params.student_id,params.passwd,params.student_email,params.student_introduction,result);
    setTimeout(function(){
        res.send(result);
    }, 1000)
});

router.post('/add_student', (req, res) => {
    console.log('Adding a student');
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    AdminService.add_one_student(params.student_name,params.passwd,params.faculty_name,params.major_name,params.class_name,params.student_introduction,params.student_email,result);
    setTimeout(function(){
        res.send(result);
    }, 1000)
});

// add_one_teacher(teacher_name,passwd,faculty_working,teacher_introduction,teacher_email,result)
//添加教师
router.post('/add_teacher', (req, res) => {
    console.log('Adding a teacher');
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    AdminService.add_one_teacher(params.teacher_name,params.passwd,params.faculty_working,params.teacher_introduction,params.teacher_email,result);
    setTimeout(function(){
        res.send(result);
    }, 1000)
});

//教师获取信息(获取密码简介等)
router.post('/teacher_all_info', (req, res) => {
    console.log('Getting teacher_all_info');
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    AdminService.load_one_teacher(params.id,result);
    setTimeout(function(){
        res.send(result);
    }, 1000)
});

//教师修改信息
// modify_one_teacher(teacher_id,passwd,teacher_eamil,teacher_introduction,result)
router.post('/modify_teacher', (req, res) => {
    console.log('Modifying a teacher');
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    AdminService.modify_one_teacher(params.teacher_id,params.passwd,params.teacher_eamil,params.teacher_introduction,result);
    setTimeout(function(){
        res.send(result);
    }, 1000)
});

//发布讨论
      // add_one_post(post_label,post_title,post_content,post_starter,result)
router.post('/add_post', (req, res) => {
    console.log('Adding a post');
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    AdminService.add_one_post(params.post_label,params.post_title,params.post_content,params.post_starter,result);
    setTimeout(function(){
        res.send(result);
    }, 1000)
});

//发布系统公告
    //   router.post('/add_sys_ann', (req, res) => {
    //     console.log('Adding a sys_ann');
    //     var params = req.body;
    //     var AdminService = new Admin();
    //     var result = new Array();
    //     AdminService.add_one_post(params.post_label,params.post_title,params.post_content,params.post_starter,result);
    //     setTimeout(function(){
    //         res.send(result);
    //     }, 1000)
    // });

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
else if(params.type == 'student_list'){
    console.log('Getting student_list');
    var AdminService = new Admin();
    var result = new Array();
    AdminService.load_allStudent(result);
    setTimeout(function(){
        console.log(result);
        res.send(result);
    }, 1000)
}
else if(params.type == 'teacher_list'){
    console.log('Getting teacher_list');
    var AdminService = new Admin();
    var result = new Array();
    AdminService.load_allTeacher(result);
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
    AdminService.load_allCourse(result);
    setTimeout(function(){
        console.log(result);
        res.send(result);
    }, 1000)
}
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
    
});


module.exports = router;