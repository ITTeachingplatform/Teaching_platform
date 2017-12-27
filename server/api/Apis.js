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
    console.log(params)
    AdminService.find_sysannouncement_by(params.announcement_title,params.announcement_date,params.sys_ann_publisher,result);
    AdminService.find_couannouncement_by(params.announcement_title,params.announcement_date,params.sys_ann_publisher,'',result_2);
    setTimeout(function(){
    console.log(result)
    for(var i in result[0]){
    result_2[0][i]=result[0][i];
    }
    res.send(result_2);
    }, 1500)
});

router.post('/get/one_student_BasicInfo',  (req, res) => {
    var params = req.body;
    console.log(params.student_id);
    if(params.student_id != null){
        var AdminService = new Admin();
        var result = new Array();
        console.log('Getting a student\'s basic info');
        AdminService.load_one_student(params.student_id, result);
        setTimeout(function(){
            res.send(result);
        }, 1500)
    }
});

router.post('/get/one_student_allClass',  (req, res) => {
    var params = req.body;
    if(params.student_id != null){
        var AdminService = new Admin();
        var result = new Array();
        console.log('Getting a student\'s all Class that attended');
        AdminService.load_allCourse_one_student(params.student_id,result);
        setTimeout(function(){
            res.send(result);
        }, 1000)
    }
});

router.post('/get/one_student_unfinishHomework', (req, res) => {
    console.log('Getting a student\'s unfinish homework');
    var params = req.body;
    if(params.student_id != null){
        var AdminService = new Admin();
        var result = new Array();
        AdminService.load_UnFinishHomework_one_student(params.student_id,result);
        setTimeout(function(){
        // console.log(result)
            res.send(result);
        }, 1500)}
});

router.post('/get/one_Course_allInfo', (req, res) => {
    console.log('Getting a course\'s all information');
    var params = req.body;
    if(params.t_class_ID != null){
        var AdminService = new Admin();
        var result = new Array();
        AdminService.load_one_courseMessage(params.t_class_ID,result);
        setTimeout(function(){
        // console.log(result)
            res.send(result);
        }, 1000)}
});

router.post('/get/search_file', (req, res) => {
    console.log('Searching resource');
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    if(params.type == '1'){
        AdminService.find_bank_by(params.file_name,params.date,'',params.student_id,params.course_name,result);
    }
    else{
        AdminService.find_resource_by(params.file_name,params.date,'',params.student_id,params.course_name,result);
    }
    setTimeout(function(){
        console.log(result)
        res.send(result);
    }, 1000)
});

// add_one_announcement(publisher_ID,flag,title,content,course_ID,result)
router.post('/add_announcement', (req, res) => {
    console.log('Adding an announcement');
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    AdminService.add_one_announcement(params.publisher_ID,params.flag,params.title,params.content,params.course_ID,result);
    setTimeout(function(){
        console.log(result)
        res.send(result);
    }, 1000)
});

//讨论区搜索
router.post('/search_post', (req, res) => {
    console.log('Searching post');
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    console.log(params)
    AdminService.find_post_by(params.post_title,params.post_starter,params.post_label,params.post_date,result);
    setTimeout(function(){
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
    console.log(params)
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

router.post('/get/one_Course_allann', (req, res) => {
    console.log('Getting a course\'s all announcement');
    var params = req.body;
    if(params.course_ID != null){
        var AdminService = new Admin();
        var result = new Array();
        AdminService.find_couannouncement_by('','','',params.course_ID,result);
        setTimeout(function(){
        // console.log(result)
            res.send(result);
        }, 1000)}
});

router.post('/get/one_Course_allhomework', (req, res) => {
    console.log('Getting a course\'s all homework');
    var params = req.body;
    if(params.student_id != null){
        var AdminService = new Admin();
        var result = new Array();
        AdminService.load_allHomework_one_student_one_t_class(params.student_id,params.t_class_id,result);
        setTimeout(function(){
            console.log(result)
            res.send(result);
        }, 1000)}
});
router.post('/get/one_teacher_one_Course_allhomework', (req, res) => {
    console.log('Getting a course\'s all homework');
    var params = req.body;
    if(params.teacher_id != null){
        var AdminService = new Admin();
        var result = new Array();
        AdminService.load_allHomework_one_teacher_one_t_class(params.teacher_id,params.t_class_id,result);
        setTimeout(function(){
            console.log(result)
            res.send(result);
        }, 1000)}
});
router.post('/get/one_Course_allres', (req, res) => {
    console.log('Getting a course\'s all resource');
    var params = req.body;
    if(params.course_ID != null){
        var AdminService = new Admin();
        var result = new Array();
        AdminService.find_resource_by('','',params.t_class_id,params.student_id,'',result);
        setTimeout(function(){
            console.log(result)
            res.send(result);
        }, 1000)}
});

router.post('/get/one_Course_allbank', (req, res) => {
    console.log('Getting a course\'s all exercises');
    var params = req.body;
    if(params.course_ID != null){
        var AdminService = new Admin();
        var result = new Array();
        AdminService.find_bank_by('','',params.t_class_id,params.student_id,'',result);
        setTimeout(function(){
            console.log(result)
            res.send(result);
        }, 1000)}
});

router.post('/load_one_student', (req, res) => {
    console.log('Getting one student personal');    
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    AdminService.load_one_studentMessage(params.student_id,result);
    setTimeout(function(){
        console.log(result);
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

router.post('/load_one_course_allstudent', (req, res) => {
    console.log('Getting one teacher course all students');    
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    AdminService.load_allStudent_one_course_teacher(params.course_id,params.teacher_id,result);
    setTimeout(function(){
        console.log(result);
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
    AdminService.modify_one_teacher(params.teacher_id,params.passwd,params.teacher_email,params.teacher_introduction,result);
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

router.post('/modify_one_student', (req, res) => {
    console.log('Getting modify_one_student');    
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    AdminService.modify_one_student(params.student_id,params.student_password,params.student_email,params.student_introduction,result);
    setTimeout(function(){
        console.log(result);
        res.send(result);
    }, 1000)
});

// load_allStudent_one_course_teacher(course_id,teacher_ID,result)
//获取一个教学班里的所有学生
router.post('/load_course_student', (req, res) => {
    console.log('Getting students of course');
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    AdminService.load_allStudent_one_course_teacher(params.course_id,params.teacher_ID,result);
    setTimeout(function(){
        console.log(result)
        res.send(result);
    }, 1000)
});

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
    AdminService.load_allStudent(result);
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
        res.send(result);
    }, 1000)
}
//     AdminService.load_allCourse_one_teacher('',result);
//     setTimeout(function(){
//         console.log(result);
//         res.send(result);
//     }, 1000)
// }
// });
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

//添加一个教学班(包括教学大纲、课程介绍)
// add_one_course(course_id,course_name,teacher_id,faculty_id,course_introduction,sysllabus,result)
router.post('/add_one_course', (req, res) => {
    console.log('Adding a course');
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    AdminService.add_one_course(params.course_id,params.course_name,params.teacher_id,params.faculty_id,params.course_introduction,params.sysllabus,result);
    setTimeout(function(){
        console.log(result)
        res.send(result);
    }, 3000)
});

// 添加一个学生进一个教学班
// add_one_student_one_t_class(t_class_id,student_id,result)
router.post('/add_one_student_to_course', (req, res) => {
    console.log('Adding a student to a course');
    var params = req.body;
    console.log(params)
    var AdminService = new Admin();
    var result = new Array();
    AdminService.add_one_student_one_t_class(params.t_class_id,params.student_id,result)
    setTimeout(function(){
        console.log(result)
        res.send(result);
    }, 1000)
});

router.post('/get/one_teacher_BasicInfo',  (req, res) => {
    var params = req.body;
    if(params.teacher_id != null){
        var AdminService = new Admin();
        var result = new Array();
        console.log('Getting a teacher\'s basic info');
        AdminService.load_one_teacher(params.teacher_id, result);
        setTimeout(function(){
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
//修改教师个人信息
router.post('/modify_one_teacher', (req, res) => {
    console.log('Getting modify_one_teacher');    
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    AdminService.modify_one_teacher(params.teacher_id,params.teacher_password,params.teacher_emal,params.teacher_introduction,result);
    setTimeout(function(){
        console.log(result);
        res.send(result);
    }, 1000)
});
//获取教师
router.post('/load_one_teacher', (req, res) => {
    console.log('Getting one teacher personal');    
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    AdminService.load_one_teacher(params.teacher_id,result);
    setTimeout(function(){
        console.log(result);
        res.send(result);
    }, 1000)
});
//获取一个教师的所有教学班
router.post('/get/load_allCourse_one_teacher', (req, res) => {
    console.log('Getting one teacher all courses');    
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    AdminService.load_allCourse_one_teacher(params.teacher_id,result);
    setTimeout(function(){
        console.log(result);
        res.send(result);
    }, 1000)
});
//讨论区搜索apis.js
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
//加载一个帖子的所有信息
router.post('/view_post', (req, res) => {
    console.log('Open a post');
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    AdminService.load_one_post(params.post_id,result);
    setTimeout(function(){
        console.log(result)
        res.send(result);
    }, 1000)
});
//加载一个帖子的回复
router.post('/post_replay', (req, res) => {
    console.log('Open a post all replay');
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    AdminService.load_allReply_one_post(params.post_id,result);
    setTimeout(function(){
        console.log(result)
        res.send(result);
    }, 1000)
});

module.exports = router;