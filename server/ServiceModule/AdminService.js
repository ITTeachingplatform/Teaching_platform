'use strict';

var BaseDAO = require('..//DAOModule/BaseDAO.js');
var base = new BaseDAO();
var AdminDAO = require('../DAOModule/AdminDAO.js');
var admin = new AdminDAO();
var StudentDAO = require('../DAOModule/StudentDAO.js');
var student = new StudentDAO();
var TeacherDAO = require('../DAOModule/TeacherDAO.js');
var teacher = new TeacherDAO();
var CourseDAO = require('../DAOModule/CourseDAO.js');
var course = new CourseDAO();
var Teacher_classDAO = require('../DAOModule/Teacher_classDAO.js');
var teacher_class = new Teacher_classDAO();
var Teacher_class_listDAO = require('../DAOModule/Teacher_class_listDAO.js');
var teacher_class_list = new Teacher_class_listDAO();
var ClassDAO = require('../DAOModule/ClassDAO.js');
var _class_ = new ClassDAO();
var FacultyDAO = require('../DAOModule/FacultyDAO.js');
var faculty = new FacultyDAO();
var MajorDAO = require('../DAOModule/MajorDAO.js');
var major = new MajorDAO();
var BankDAO = require('../DAOModule/BankDAO.js');
var bank = new BankDAO();
var Course_announcementDAO = require('../DAOModule/Course_announcementDAO.js');
var course_announcement = new Course_announcementDAO();
var System_announcementDAO = require('../DAOModule/System_announcementDAO.js');
var system_announcement = new System_announcementDAO();
var PostDAO = require('../DAOModule/PostDAO.js');
var post = new PostDAO();
var ReplyDAO = require('../DAOModule/ReplyDAO.js');
var reply = new ReplyDAO();
var HomeworkDAO = require('../DAOModule/HomeworkDAO.js');
var homework = new HomeworkDAO();
var Homework_scoresDAO = require('../DAOModule/Homework_scoresDAO.js');
var homework_scores = new Homework_scoresDAO();
var ResourceDAO = require('../DAOModule/ResourceDAO.js');
var resource = new ResourceDAO();

var async = require('async');

var RE = 0;//map result 
var TF = 1;//map flag
var DEALTIME = 100;

//DAO类可用函数
/*
createAdmin(id,result);
updateAdmin(id,atr,val,result);
deleteAdmin(id,result);
default_fn(val);
inquireAdmin(result,fn = this.default_fn);
*/

class AdminService{
    constructor(){
    }
    default_fn(val){//val = rows[i]
        val.admin_ID
        val.passwd
        val.admin_email
        return true;
    }
    //可调用函数
    //函数名格式:操作+相关对象
//////////////////////////////////////////////////////////////////////////////
//1.load_obj 可提供筛选条件 参数列表：(result,condition_fn)
//load 参数不应该为空，默认num == 4
    //加载管理员个人信息 id一般是调用者id
    load_one_admin(id,result){//result[TF]-> 0/1/2
        //result[TF] = 0 :success load
        //result[TF] = 1 :load fail
        //result[TF] = 2 :admin_ID not exist 
        admin.inquireAdmin(result)
        setTimeout(function(){
            result[TF] = 1;
            for(var i in result[RE]){
                if(result[RE][i].admin_ID == id)
                {
                    result[TF]= 0;
                    result[RE]=result[RE][i];
                    break;
                }
                result[TF] = 2;
            }
        },DEALTIME);
    }
    //加载学生个人信息 id一般是调用者id
    load_one_student(id,result){//result[TF]-> 0/1/2
        //result[TF] = 0 :success load
        //result[TF] = 1 :load fail
        //result[TF] = 2 :student_ID not exist 
        student.inquireStudent(result);
        setTimeout(function(){
            result[TF] = 1;
            for(var i in result[RE]){
                if(result[RE][i].student_ID == id)
                {
                    result[TF]= 0;
                    result[RE]=result[RE][i];
                    break;
                }
                result[TF] = 2;
            }
        },DEALTIME);
    }
    //加载学生个人特定信息 
    //student_ID,passwd,class_name,major_name,faculty_name,student_name,student_introduction,student_email
    load_one_studentMessage(id,result){//result[TF]-> 0/1/2
        //result[TF] = 0 :success load
        //result[TF] = 1 :load fail
        //result[TF] = 2 :student_ID not exist
        if(id == ''){
            result[RE] = 0;
            result[TF] = 1;
            return;
        }
        var sql = "select student_ID,passwd,class_name,major_name,faculty_name,student_name,student_introduction,student_email "
            +"from student,class,major,faculty where student.class_staying = class.class_ID and class.major_belong = major.major_ID "
            +"and major.faculty_belong = faculty.faculty_ID and student.student_ID = \'"+id+"\' "
        base.inquireD(sql,result);
        setTimeout(function(){
            var data = {};
            for(var i=0; i < result[RE].length; i++) {
                data[i]={
                    'student_ID':result[RE][i].student_ID,
                    'passwd':result[RE][i].passwd,
                    'class_name':result[RE][i].class_name,
                    'major_name':result[RE][i].major_name,
                    'faculty_name':result[RE][i].faculty_name,
                    'student_name':result[RE][i].student_name,
                    'student_introduction':result[RE][i].student_introduction,
                    'student_email':result[RE][i].student_email
                }
                result[TF] = 3;
            }
            if(result[TF] == false)
                result[TF] = 1;
            else if(result[RE].length == 0)
                result[TF] = 2;
            else if(result[TF] == 3)
                result[TF] = 0;
            result[RE] = data;
        },DEALTIME);
    }
    //加载教师个人信息 id一般是调用者id
    load_one_teacher(id,result){//result[TF]-> 0/1/2
        //result[TF] = 0 :success load
        //result[TF] = 1 :load fail
        //result[TF] = 2 :teacher_ID not exist 
        teacher.inquireTeacher(result);
        setTimeout(function(){
            result[TF] = 1;
            for(var i in result[RE]){
                if(result[RE][i].teacher_ID == id)
                {
                    result[TF]= 0;
                    result[RE]=result[RE][i];
                    break;
                }
                result[TF] = 2;
            }
        },DEALTIME);
    }

    //加载全部学生 V
    //student_ID,student_name,faculty_name,major_name,class_name
    load_allStudent(result){//result[TF]-> 0/1/2
        //result[TF] = 0 :success find
        //result[TF] = 1 :find fail
        //result[TF] = 2 :Obj not exist 
        var sql = "select student_ID,student_name,faculty_name,major_name,class_name "
            +"from student,class,major,faculty where student.class_staying = class.class_ID "
            +"and class.major_belong = major.major_ID and major.faculty_belong = faculty.faculty_ID "
        base.inquireD(sql,result);
        setTimeout(function(){
            var data = {};
            for(var i=0; i < result[RE].length; i++) {
                data[i]={
                    'student_ID':result[RE][i].student_ID,
                    'class_name':result[RE][i].class_name,
                    'major_name':result[RE][i].major_name,
                    'faculty_name':result[RE][i].faculty_name,
                    'student_name':result[RE][i].student_name
                }
                result[TF] = 3;
            }
            if(result[TF] == false)
                result[TF] = 1;
            else if(result[RE].length == 0)
                result[TF] = 2;
            else if(result[TF] == 3)
                result[TF] = 0;
            result[RE] = data;
        },DEALTIME*2);
    }
    //加载全部教师 V
    //teacher_ID,teacher_name,faculty_name
    load_allTeacher(result){//result[TF]-> 0/1/2
        //result[TF] = 0 :success find
        //result[TF] = 1 :find fail
        //result[TF] = 2 :Obj not exist 
        var sql = "select teacher_ID,teacher_name,faculty_name "
            +"from teacher,faculty where teacher.faculty_working = faculty.faculty_ID "
        base.inquireD(sql,result);
        setTimeout(function(){
            var data = {};
            for(var i=0; i < result[RE].length; i++) {
                data[i]={
                    'teacher_ID':result[RE][i].teacher_ID,
                    'teacher_name':result[RE][i].teacher_name,
                    'faculty_name':result[RE][i].faculty_name
                }
                result[TF] = 3;
            }
            if(result[TF] == false)
                result[TF] = 1;
            else if(result[RE].length == 0)
                result[TF] = 2;
            else if(result[TF] == 3)
                result[TF] = 0;
            result[RE] = data;
        },DEALTIME);

    }
    //加载全部课程 V
    //course_ID,course_name,faculty_name,teacher_name
    load_allCourse(result){
        var sql = "select course_ID,course_name,faculty_name,teacher_name "
            +"from course,teacher_class,teacher,faculty where teacher_class.course_ID_t_class = course.course_ID"
            +" and teacher_class.teacher_ID_t_class = teacher.teacher_id and course.faculty_belong = faculty.faculty_ID"
        base.inquireD(sql,result);
        setTimeout(function(){
            var data = {};
            for(var i=0; i < result[RE].length; i++) {
                data[i]={
                    'course_ID':result[RE][i].course_ID,
                    'course_name':result[RE][i].course_name,
                    'faculty_name':result[RE][i].faculty_name,
                    'teacher_name':result[RE][i].teacher_name
                }
                result[TF] = 3;
            }
            if(result[TF] == false)
                result[TF] = 1;
            else if(result[RE].length == 0)
                result[TF] = 2;
            else if(result[TF] == 3)
                result[TF] = 0;
            result[RE] = data;
        },DEALTIME);
    }
    //加载全部讨论区 V
    //post_ID,post_title,post_starter,post_label,date,
    //post_last_reviser,post_reply_num,post_browse_num
    load_allPost(result){
        var sql = "select post_ID,post_title,post_starter,post_date,post_label,post_last_reviser,"
            +"post_reply_num,post_browse_num from post"
        base.inquireD(sql,result);
        setTimeout(function(){
            var data = {};
            for(var i=0; i < result[RE].length; i++) {
                data[i]={
                    'post_ID':result[RE][i].post_ID,
                    'post_title':result[RE][i].post_title,
                    'post_starter':result[RE][i].post_starter,
                    'post_date':result[RE][i].post_date,
                    'post_label':result[RE][i].post_label,
                    'post_last_reviser':result[RE][i].post_last_reviser,
                    'post_reply_num':result[RE][i].post_reply_num,
                    'post_browse_num':result[RE][i].post_browse_num,
                }
                result[TF] = 3;
               }
            if(result[TF] == false)
                result[TF] = 1;
            else if(result[RE].length == 0)
                result[TF] = 2;
            else if(result[TF] == 3)
                result[TF] = 0;
            result[RE] = data;
        },DEALTIME);
    }


    //加载一个教师的全部课程
    //course_ID,course_name,faculty_name,teacher_name
    load_allCourse_one_teacher(teacher_id,result){//result[TF]-> 0/1/2
        //result[TF] = 0 :success load
        //result[TF] = 1 :load fail
        //result[TF] = 2 :teacher_ID not exist 
        if(id == ''){
            result[RE] = 0;
            result[TF] = 1;
            return;
        }
        var sql = "select course_ID,course_name,faculty_name,teacher_name "
            +"from course,teacher_class,teacher where teacher_class.course_ID_t_class = course.course_ID";
            +" and teacher_class.teacher_ID_t_class = \'"+teacher_id+"\'";
        base.inquireD(sql,result);
        setTimeout(function(){
            var data = {};
            for(var i=0; i < result[RE].length; i++) {
                data[i]={
                    'course_ID':result[RE][i].course_ID,
                    'course_name':result[RE][i].course_name,
                    'faculty_belong':result[RE][i].faculty_belong,
                    'course_introduction':result[RE][i].course_introduction
                }
                result[TF] = 3;
            }
            if(result[TF] == false)
                result[TF] = 1;
            else if(result[RE].length == 0)
                result[TF] = 2;
            else if(result[TF] == 3)
                result[TF] = 0;
            result[RE] = data;
        },DEALTIME);
    }//to be finished
    //加载一个学生的全部课程（教学班）及相关信息 V
    load_allCourse_one_student(student_id,result){//result[TF]-> 0/1/2
    // result[TF] = 0 :success load
    // result[TF] = 1 :load fail
    // result[TF] = 2 :student_ID not exist 
    // result[RE] = (course_ID,faculty_name,course_name,course_introduction,teacher_ID_t_class,t_class_ID,teacher_name,sysllabus)
        var sql = "select course_ID,faculty_name,course_name,course_introduction,teacher_ID_t_class,t_class_ID,teacher_name,sysllabus "
            +"from course,teacher_class,teacher_class_list,teacher,faculty where teacher_class.course_ID_t_class = course.course_ID "
            +"and teacher_class.t_class_ID = teacher_class_list.t_class_ID_list and teacher_class.teacher_ID_t_class = teacher.teacher_ID "
            +"and course.faculty_belong = faculty.faculty_ID";
        if(student_id != ''){
            sql += " and teacher_class_list.student_ID_list = \'"+student_id+"\'";
        }
        base.inquireD(sql,result);
        setTimeout(function(){
            var data = {};
            for(var i=0; i < result[RE].length; i++) {
                data[i]={
                    'course_ID':result[RE][i].course_ID,
                    'course_name':result[RE][i].course_name,
                    'faculty_name':result[RE][i].faculty_name,
                    'course_introduction':result[RE][i].course_introduction,
                    'teacher_ID_t_class':result[RE][i].teacher_ID_t_class,
                    't_class_ID':result[RE][i].t_class_ID,
                    'teacher_name':result[RE][i].teacher_name,
                    'sysllabus':result[RE][i].sysllabus
                }
                result[TF] = 3;
            }
            if(result[TF] == false)
                result[TF] = 1;
            else if(result[RE].length == 0)
                result[TF] = 2;
            else if(result[TF] == 3)
                result[TF] = 0;
            result[RE] = data;
        },DEALTIME*2);
    }
    //加载一门课程的所有教师
    load_allTeacher_one_course(course_id,result){//result[TF]-> 0/1/2
        //result[TF] = 0 :success load
        //result[TF] = 1 :load fail
        //result[TF] = 2 :course_ID not exist 
        var sql = "select teacher_ID,passwd,faculty_working,teacher_name,teacher_email,"
            +"teacher_introduction from teacher,teacher_class where teacher_class.teacher_ID_t_class"
            +" = teacher.teacher_ID";
        if(course_id != ''){
            sql += " and teacher_class.course_ID_t_class = \'"+course_id+"\'";
        }
        base.inquireD(sql,result);
        setTimeout(function(){
            var data = {};
            for(var i=0; i < result[RE].length; i++) {
                data[i]={
                    'teacher_ID':result[RE][i].teacher_ID,
                    'passwd':result[RE][i].passwd,
                    'teacher_name':result[RE][i].teacher_name,
                    'faculty_working':result[RE][i].faculty_working,
                    'teacher_introduction':result[RE][i].teacher_introduction,
                    'teacher_email':result[RE][i].teacher_email
                }
                result[TF] = 3;
            }
            if(result[TF] == false)
                result[TF] = 1;
            else if(result[RE].length == 0)
                result[TF] = 2;
            else if(result[TF] == 3)
                result[TF] = 0;
            result[RE] = data;
        },DEALTIME);
    }
    //加载一门课程下一个老师的全部学生(一个教学班的全部学生)
    load_allStudent_one_course_teacher(course_id,teacher_ID,result){//result[TF]-> 0/1/2
        //result[TF] = 0 :success load
        //result[TF] = 1 :load fail
        //result[TF] = 2 :course_ID or teacher_ID not exist 
        var sql = "select student_ID,passwd,class_staying,student_name,student_introduction,student_email "
            +"from student,teacher_class,teacher_class_list where teacher_class.t_class_ID = teacher_class_list.t_class_ID_list "
            +"and student.student_ID = teacher_class_list.student_ID_list";
        if(course_id != ''){
            sql += " and teacher_class.course_ID_t_class = \'"+course_id+"\'";
        }
        if(teacher_ID != ''){
            sql += " and teacher_class.teacher_ID_t_class = \'"+teacher_ID+"\'";
        }
        base.inquireD(sql,result);
        setTimeout(function(){
            var data = {};
            for(var i=0; i < result[RE].length; i++) {
                data[i]={
                    'student_ID':result[RE][i].student_ID,
                    'passwd':result[RE][i].passwd,
                    'student_name':result[RE][i].student_name,
                    'class_staying':result[RE][i].class_staying,
                    'student_introduction':result[RE][i].student_introduction,
                    'student_eamil':result[RE][i].student_email
                }
                result[TF] = 3;
            }
            if(result[TF] == false)
                result[TF] = 1;
            else if(result[RE].length == 0)
                result[TF] = 2;
            else if(result[TF] == 3)
                result[TF] = 0;
            result[RE] = data;
        },DEALTIME);

    }
    //加载近期num条系统公告 
    //sys_announcement_ID,announcement_label,announcement_title,announcement_content,announcement_date,sys_ann_publisher,sys_ann_path
    load_numLatest_sysannouncement(result,num = 4){//result[TF]-> 0/1/2
        //result[TF] = num :success load
        //result[TF] = -1 :load fail
        //result[TF] < num :not enough announcement
        system_announcement.inquireSystem_announcement(result);
        setTimeout(function(){
            var count = 0;
            var content = new Array();
            var temp = new Array();
            result[TF] = -1;
            for(var i in result[RE]){
                if(count < num)
                    count++;
                temp.push(result[RE][i]);
            }
            for(var i = 0;i<num;i++){
                if(temp.length == 0)
                    break;
                var latest = 0;
                for(var d = 1;d<temp.length;d++){
                    if(temp[d].announcement_date>=temp[latest].announcement_date)
                        latest = d;
                }
                var t = temp[latest];
                temp[latest] = temp[temp.length-1];
                temp.pop();
                content.push(t);
            }
            result[RE]=content;
            if(count <=num)
                result[TF] = count;
        },DEALTIME);
    }
    //加载近期num条课程公告
    load_numLatest_couannouncement(result,num = 4){//result[TF]-> 0/1/2
        //result[TF] = num :success load
        //result[TF] = -1 :load fail
        //result[TF] < num :not enough announcement
        course_announcement.inquireCourse_announcement(result);
        setTimeout(function(){
            var count = 0;
            var content = new Array();
            var temp = new Array();
            result[TF] = -1;
            for(var i in result[RE]){
                if(count < num)
                    count++;
                temp.push(result[RE][i]);
            }
            for(var i = 0;i<num;i++){
                if(temp.length == 0)
                    break;
                var latest = 0;
                for(var d = 1;d<temp.length;d++){
                    if(temp[d].announcement_date>=temp[latest].announcement_date)
                        latest = d;
                }
                var t = temp[latest];
                temp[latest] = temp[temp.length-1];
                temp.pop();
                content.push(t);
            }
            result[RE]=content;
            if(count <=num)
                result[TF] = count;
        },DEALTIME);

    }
    //加载近期num条讨论区
    load_numLatest_post(result,num = 4){//result[TF]-> -1/...
        //result[TF] = num :success load
        //result[TF] = -1 :load fail
        //result[TF] < num :not enough post
        post.inquirePost(result);
        setTimeout(function(){
            var count = 0;
            var content = new Array();
            var temp = new Array();
            result[TF] = -1;
            for(var i in result[RE]){
                if(count < num)
                    count++;
                temp.push(result[RE][i]);
            }
            for(var i = 0;i<num;i++){
                if(temp.length == 0)
                    break;
                var latest = 0;
                for(var d = 1;d<temp.length;d++){
                    if(temp[d].post_date>=temp[latest].post_date)
                        latest = d;
                }
                var t = temp[latest];
                temp[latest] = temp[temp.length-1];
                temp.pop();
                content.push(t);
            }
            result[RE]=content;
            if(count <=num)
                result[TF] = count;
        },DEALTIME);

    }
    //加载最新num条作业 
    load_numLatest_homework(result,num = 4){//result[TF]-> -1/...
        //result[TF] = num :success load
        //result[TF] = -1 :load fail
        //result[TF] < num :not enough homework
        homework.inquireHomework(result);
        setTimeout(function(){
            var count = 0;
            var content = new Array();
            var temp = new Array();
            result[TF] = -1;
            for(var i in result[RE]){
                if(count < num)
                    count++;
                temp.push(result[RE][i]);
            }
            for(var i = 0;i<num;i++){
                if(temp.length == 0)
                    break;
                var latest = 0;
                for(var d = 1;d<temp.length;d++){
                    if(temp[d].homework_up_date>=temp[latest].homework_up_date)
                        latest = d;
                }
                var t = temp[latest];
                temp[latest] = temp[temp.length-1];
                temp.pop();
                content.push(t);
            }
            result[RE]=content;
            if(count <=num)
                result[TF] = count;
        },DEALTIME);
    }
    //加载一个教学班所有作业
    //需要find_teacher_class_to_homework
    load_allHomework_one_tclass(course_id,teacher_ID,result){//result[TF]-> 0/1/2
        //result[TF] = 0 :success load
        //result[TF] = 1 :load fail
        //result[TF] = 2 :course_ID or teacher_ID not exist 

    }//to be finished
    //加载一个学生的所有作业
    load_allHomework__one_student(student_ID,result){//result[TF]-> 0/1/2
        //result[TF] = 0 :success load
        //result[TF] = 1 :load fail
        //result[TF] = 2 :student_ID not exist/student no homework
        var sql = "select homework_ID,homework_name,homework_up_date,homework_down_date,homework_total_num,"
            +"homework_submit_num,homework_content,homework_t_class_belong from homework,teacher_class,teacher_class_list,"
            +"student where homework.homework_t_class_belong = teacher_class.t_class_ID and  teacher_class.t_class_ID = "
            +"teacher_class_list.t_class_ID_list and teacher_class_list.student_ID_list = student.student_ID"
        if(student != ''){
            sql += " and student.student_ID = \'"+student_ID+"\'";
        }
        base.inquireD(sql,result);
        setTimeout(function(){
            var data = {};
            for(var i=0; i < result[RE].length; i++) {
                data[i]={
                    'homework_ID':result[RE][i].homework_ID,
                    'homework_name':result[RE][i].homework_name,
                    'homework_up_date':result[RE][i].homework_up_date,
                    'homework_down_date':result[RE][i].homework_down_date,
                    'homework_total_num':result[RE][i].homework_total_num,
                    'homework_submit_num':result[RE][i].homework_submit_num,
                    'homework_content':result[RE][i].homework_content,
                    'homework_t_class_belong':result[RE][i].homework_t_class_belong
                }
                result[TF] = 3;
            }
            if(result[TF] == false)
                result[TF] = 1;
            else if(result[RE].length == 0)
                result[TF] = 2;
            else if(result[TF] == 3)
                result[TF] = 0;
            result[RE] = data;
        },DEALTIME*2);
    }
    
    //加载一个学生一个课程(教学班)的所有作业（包括成绩及答题内容） V
    //input:student_id
    //result[TF] = 0 成功加载
    //             1 
    //             2 没有结果
    //result[RE][i] = (homework_ID,homework_name,homework_up_date,homework_down_date,
    //  homework_total_num,homework_submit_num,homework_content,homework_t_class_belong,s_homework_score,s_homework_content)
    load_allHomework_one_student_one_t_class(student_id,t_class_id,result){
        var sql = "select homework_ID,homework_name,homework_up_date,homework_down_date,"
        +"homework_total_num,homework_submit_num,homework_content,homework_t_class_belong,s_homework_score,s_homework_content "
        +"from homework,student,homework_scores,teacher_class where student.student_id = homework_scores.student_submit_homework "
        +"and homework.homework_id = homework_scores.homework_ID_score and homework.homework_t_class_belong = teacher_class.t_class_ID "
        +"and student.student_id = \'"+student_id+"\' "
        if(t_class_id != '')
            sql +="and teacher_class.t_class_ID = \'"+t_class_id+"\' "
        base.inquireD(sql,result);
        setTimeout(function(){
            var data = {};
            for(var i=0; i < result[RE].length; i++) {
                data[i]={
                    'homework_ID':result[RE][i].homework_ID,
                    'homework_name':result[RE][i].homework_name,
                    'homework_up_date':result[RE][i].homework_up_date,
                    'homework_down_date':result[RE][i].homework_down_date,
                    'homework_total_num':result[RE][i].homework_total_num,
                    'homework_submit_num':result[RE][i].homework_submit_num,
                    'homework_content':result[RE][i].homework_content,
                    'homework_t_class_belong':result[RE][i].homework_t_class_belong,
                    's_homework_score':result[RE][i].s_homework_score,
                    's_homework_content':result[RE][i].s_homework_content
                }
                result[TF] = 3;
            }
            if(result[TF] == false)
                result[TF] = 1;
            else if(result[RE].length == 0)
                result[TF] = 2;
            else if(result[TF] == 3)
                result[TF] = 0;
            result[RE] = data;
        },DEALTIME*2);
    }
    //加载一个学生未过期且未完成作业 V
    //input:student_id
    //result[TF] = 0
    //             1
    //             2 没有结果
    //result[RE][i] = homework 
    load_UnFinishHomework_one_student(student_id,result){
        var date = new Date();
        var da  = ''+date.getFullYear();
        if(date.getMonth()<=9)
            da += '0';
        da += date.getMonth()+1;
        if(date.getDate()<=9)
            da += '0';
        da += date.getDate();
        var sql = "select homework_ID,homework_name,homework_up_date,homework_down_date,"
        +"homework_total_num,homework_submit_num,homework_content,homework_t_class_belong "
        +"from homework,student,homework_scores where student.student_id = homework_scores.student_submit_homework "
        +"and homework.homework_id = homework_scores.homework_ID_score and s_homework_content = NULL and homework_down_date >= \'"+da+"\' "
        +"and student.student_id = \'"+student_id+"\'"
        base.inquireD(sql,result);
        setTimeout(function(){
            var data = {};
            for(var i=0; i < result[RE].length; i++) {
                data[i]={
                    'homework_ID':result[RE][i].homework_ID,
                    'homework_name':result[RE][i].homework_name,
                    'homework_up_date':result[RE][i].homework_up_date,
                    'homework_down_date':result[RE][i].homework_down_date,
                    'homework_total_num':result[RE][i].homework_total_num,
                    'homework_submit_num':result[RE][i].homework_submit_num,
                    'homework_content':result[RE][i].homework_content,
                    'homework_t_class_belong':result[RE][i].homework_t_class_belong
                }
                result[TF] = 3;
            }
            if(result[TF] == false)
                result[TF] = 1;
            else if(result[RE].length == 0)
                result[TF] = 2;
            else if(result[TF] == 3)
                result[TF] = 0;
            result[RE] = data;
        },DEALTIME*2);

    }

    //加载一个教师一个课程（教学班）的所有作业 V
    //input:teacher_id,course_id
    //result[TF] = 0
    //             1
    //             2 没有结果
    //result[RE][i] = (?) "
    load_allHomework_one_teacher_one_t_class(teacher_id,course_id,result){
        var sql = "select *"
        +"from homework,teacher,homework_scores,teacher_class,course where teacher.teacher_id = teacher_class.teacher_ID_t_class "
        +"and course.course_id = teacher_class.course_ID_t_class "
        +"and homework.homework_id = homework_scores.homework_ID_score and homework.homework_t_class_belong = teacher_class.t_class_ID "
        +"and teacher.teacher_id = \'"+teacher_id+"\' "
        if(course_id != '')
            sql += "and course.course_id = \'"+course_id+"\' "
        base.inquireD(sql,result);
        setTimeout(function(){
            var data = {};
            for(var i=0; i < result[RE].length; i++) {
                data[i]={
                    'homework_ID':result[RE][i].homework_ID,
                    'homework_name':result[RE][i].homework_name,
                    'homework_up_date':result[RE][i].homework_up_date,
                    'homework_down_date':result[RE][i].homework_down_date,
                    'homework_total_num':result[RE][i].homework_total_num,
                    'homework_submit_num':result[RE][i].homework_submit_num,
                    'homework_content':result[RE][i].homework_content,
                    'homework_t_class_belong':result[RE][i].homework_t_class_belong,
                    's_homework_score':result[RE][i].s_homework_score,
                    's_homework_content':result[RE][i].s_homework_content
                }
                result[TF] = 3;
            }
            if(result[TF] == false)
                result[TF] = 1;
            else if(result[RE].length == 0)
                result[TF] = 2;
            else if(result[TF] == 3)
                result[TF] = 0;
            result[RE] = data;
        },DEALTIME*2);
    }

    //加载一个教师的未批改作业 V
    //input:teacher_id
    //result[TF] = 0
    //             1
    //             2 没有结果
    //result[RE][i] = (homework_ID,homework_name,homework_up_date,homework_down_date,homework_total_num,
    //      homework_submit_num,homework_content,homework_t_class_belong,s_homework_content) "
    load_UnCorrectHomework_one_teacher(teacher_id,result){
        var sql = "select homework_ID,homework_name,homework_up_date,homework_down_date,"
        +"homework_total_num,homework_submit_num,homework_content,homework_t_class_belong,s_homework_content "
        +"from homework,teacher,teacher_class,homework_scores where teacher.teacher_ID = teacher_class.teacher_ID_t_class "
        +"and homework.homework_id = homework_scores.homework_ID_score "
        +"and s_homework_score = NULL "
        +"and homework.homework_t_class_belong = teacher_class.t_class_ID "
        +"and teacher.teacher_id = \'"+teacher_id+"\'"
        console.log(sql)
        base.inquireD(sql,result);
        setTimeout(function(){
            var data = {};
            for(var i=0; i < result[RE].length; i++) {
                data[i]={
                    'homework_ID':result[RE][i].homework_ID,
                    'homework_name':result[RE][i].homework_name,
                    'homework_up_date':result[RE][i].homework_up_date,
                    'homework_down_date':result[RE][i].homework_down_date,
                    'homework_total_num':result[RE][i].homework_total_num,
                    'homework_submit_num':result[RE][i].homework_submit_num,
                    'homework_content':result[RE][i].homework_content,
                    'homework_t_class_belong':result[RE][i].homework_t_class_belong,
                    's_homework_content':result[RE][i].s_homework_content
                }
                result[TF] = 3;
            }
            if(result[TF] == false)
                result[TF] = 1;
            else if(result[RE].length == 0)
                result[TF] = 2;
            else if(result[TF] == 3)
                result[TF] = 0;
            result[RE] = data;
        },DEALTIME*2);
    }

    //
    //加载一个讨论区的所有回复 
    load_allReply_one_post(post_id,result){//result[TF]-> -1/...
        //result[TF] = x :success load x reply
        //result[TF] = -1 :load fail
        reply.inquireReply(result);
        setTimeout(function(){
            result[TF] = -1;
            var temp = new Array();
            for(var i in result[RE]){
                if(result[TF] == -1)
                    result[TF] =0;
                if(result[RE][i].reply_belong == post_id){
                    temp.push(result[RE][i]);
                    result[TF] += 1;
                }
            }
            result[RE]=temp;
        },DEALTIME);
    }
    

//////////////////////////////////////////////////////////////////////////////
//2.find_obj(_by_sth)  参数列表：(id,result)
    find_all_table(id,result){//result[TF]-> 0/1/2
        //result[TF] = 0 :success find
        //result[TF] = 1 :find fail
        //result[TF] = 2 :ID not exist 
        var flag = id.substring(0,2);
        switch(flag){
            case 'AD':admin.inquireAdmin(result);
            setTimeout(function(){
                result[TF] = 1;
                for(var i in result[RE]){
                    if(result[RE][i].admin_ID == id)
                    {
                        result[TF]= 0;
                        result[RE]=result[RE][i];
                        break;
                    }
                    result[TF] = 2;
                }
            },DEALTIME);break;
            case 'ST':student.inquireStudent(result);
            setTimeout(function(){
                result[TF] = 1;
                for(var i in result[RE]){
                    if(result[RE][i].student_ID == id)
                    {
                        result[TF]= 0;
                        result[RE]=result[RE][i];
                        break;
                    }
                    result[TF] = 2;
                }
            },DEALTIME);
            break;
            case 'TE':teacher.inquireTeacher(result);
            setTimeout(function(){
                result[TF] = 1;
                for(var i in result[RE]){
                    if(result[RE][i].teacher_ID == id)
                    {
                        result[TF]= 0;
                        result[RE]=result[RE][i];
                        break;
                    }
                    result[TF] = 2;
                }
            },DEALTIME);
            break;
            case 'CO':course.inquireCourse(result);
            setTimeout(function(){
                result[TF] = 1;
                for(var i in result[RE]){
                    if(result[RE][i].course_ID == id)
                    {
                        result[TF]= 0;
                        result[RE]=result[RE][i];
                        break;
                    }
                    result[TF] = 2;
                }
            },DEALTIME);
            break;
            case 'TC':teacher_class.inquireTeacher_class(result);
            setTimeout(function(){
                result[TF] = 1;
                for(var i in result[RE]){
                    if(result[RE][i].teacher_class_ID == id)
                    {
                        result[TF]= 0;
                        result[RE]=result[RE][i];
                        break;
                    }
                    result[TF] = 2;
                }
            },DEALTIME);
            break;
            //case 'TL':
            //break;
            case 'CL':_class_.inquireClass(result);
            setTimeout(function(){
                result[TF] = 1;
                for(var i in result[RE]){
                    if(result[RE][i].class_ID == id)
                    {
                        result[TF]= 0;
                        result[RE]=result[RE][i];
                        break;
                    }
                    result[TF] = 2;
                }
            },DEALTIME);        
            break;
            case 'FA':faculty.inquireFaculty(result);
            setTimeout(function(){
                result[TF] = 1;
                for(var i in result[RE]){
                    if(result[RE][i].faculty_ID == id)
                    {
                        result[TF]= 0;
                        result[RE]=result[RE][i];
                        break;
                    }
                    result[TF] = 2;
                }
            },DEALTIME);
            break;
            case 'MA':major.inquireMajor(result);
            setTimeout(function(){
                result[TF] = 1;
                for(var i in result[RE]){
                    if(result[RE][i].major_ID == id)
                    {
                        result[TF]= 0;
                        result[RE]=result[RE][i];
                        break;
                    }
                    result[TF] = 2;
                }
            },DEALTIME);
            break;
            case 'BA':bank.inquireBank(result);
            setTimeout(function(){
                result[TF] = 1;
                for(var i in result[RE]){
                    if(result[RE][i].bank_ID == id)
                    {
                        result[TF]= 0;
                        result[RE]=result[RE][i];
                        break;
                    }
                    result[TF] = 2;
                }
            },DEALTIME);            
            break;
            case 'CA':course_announcement.inquireCourse_announcement(result);
            setTimeout(function(){
                result[TF] = 1;
                for(var i in result[RE]){
                    if(result[RE][i].course_announcement_ID == id)
                    {
                        result[TF]= 0;
                        result[RE]=result[RE][i];
                        break;
                    }
                    result[TF] = 2;
                }
            },DEALTIME);
            break;
            case 'SA':system_announcement.inquireSystem_announcement(result);
            setTimeout(function(){
                result[TF] = 1;
                for(var i in result[RE]){
                    if(result[RE][i].system_announcement_ID == id)
                    {
                        result[TF]= 0;
                        result[RE]=result[RE][i];
                        break;
                    }
                    result[TF] = 2;
                }
            },DEALTIME);
            break;
            case 'PO':post.inquirePost(result);
            setTimeout(function(){
                result[TF] = 1;
                for(var i in result[RE]){
                    if(result[RE][i].post_ID == id)
                    {
                        result[TF]= 0;
                        result[RE]=result[RE][i];
                        break;
                    }
                    result[TF] = 2;
                }
            },DEALTIME);
            break;
            case 'RE':resource.inquireResource(result);
            setTimeout(function(){
                result[TF] = 1;
                for(var i in result[RE]){
                    if(result[RE][i].resource_ID == id)
                    {
                        result[TF]= 0;
                        result[RE]=result[RE][i];
                        break;
                    }
                    result[TF] = 2;
                }
            },DEALTIME);
            break;
            case 'HO':homework.inquireHomework(result);
            setTimeout(function(){
                result[TF] = 1;
                for(var i in result[RE]){
                    if(result[RE][i].homework_ID == id)
                    {
                        result[TF]= 0;
                        result[RE]=result[RE][i];
                        break;
                    }
                    result[TF] = 2;
                }
            },DEALTIME);
            break;
            //case 'HS':             
            //break;
            case 'RE':resource.inquireResource(result);
            setTimeout(function(){
                result[TF] = 1;
                for(var i in result[RE]){
                    if(result[RE][i].resource_ID == id)
                    {
                        result[TF]= 0;
                        result[RE]=result[RE][i];
                        break;
                    }
                    result[TF] = 2;
                }
            },DEALTIME);
            break;
            default :
            result[TF] = 2;break;
        }
    }
    find_faculty_by(faculty_name,result){//不能为空
        faculty.inquireFaculty(result);
        setTimeout(function(){
            result[TF] = 1;
            for(var i in result[RE]){
                if(result[RE][i].faculty_name == faculty_name)
                {
                    result[TF]= 0;
                    result[RE]=result[RE][i];
                    break;
                }
                result[TF] = 2;
            }
        },DEALTIME);
    }
    //教师搜索 V
    //teacher_ID,teacher_name,faculty_name
    find_teacher_by(teacher_ID,teacher_name,faculty_name,result){//result[TF]-> 0/1/2
        //result[TF] = 0 :success find
        //result[TF] = 1 :find fail
        //result[TF] = 2 :Obj not exist 
        var sql = "select teacher_ID,teacher_name,faculty_name "
        +"from teacher,faculty where teacher.faculty_working = faculty.faculty_ID "
        if(teacher_ID != ''){
            sql += "and teacher_ID = \'"+teacher_ID+"\'"
        }
        else{
            if(teacher_name != ''){
                sql += "and teacher_name like \'"+ teacher_name +"\'"
            }
            if(faculty_name != ''){
                sql += "and faculty_name like \'"+ faculty_name +"\'"
            }
        }
        base.inquireD(sql,result);
        setTimeout(function(){
            var data = {};
            for(var i=0; i < result[RE].length; i++) {
                data[i]={
                    'teacher_ID':result[RE][i].teacher_ID,
                    'teacher_name':result[RE][i].teacher_name,
                    'faculty_name':result[RE][i].faculty_name
                }
                result[TF] = 3;
            }
            if(result[TF] == false)
                result[TF] = 1;
            else if(result[RE].length == 0)
                result[TF] = 2;
            else if(result[TF] == 3)
                result[TF] = 0;
            result[RE] = data;
        },DEALTIME);
    }
    find_major_by(major_name,result){
        major.inquireMajor(result);
        setTimeout(function(){
            result[TF] = 1;
            for(var i in result[RE]){
                if(result[RE][i].major_name == major_name)
                {
                    result[TF]= 0;
                    result[RE]=result[RE][i];
                    break;
                }
                result[TF] = 2;
            }
        },DEALTIME);
    }
    find_class_by(class_name,result){
        _class_.inquireClass(result);
        setTimeout(function(){
            result[TF] = 1;
            for(var i in result[RE]){
                if(result[RE][i].class_name == class_name)
                {
                    result[TF]= 0;
                    result[RE]=result[RE][i];
                    break;
                }
                result[TF] = 2;
            }
        },DEALTIME);
    }
    //学生搜索 V
    //student_ID,student_name,faculty_name,major_name,class_name
    find_student_by(student_ID,student_name,faculty_name,major_name,class_name,result){//result[TF]-> 0/1/2
        //result[TF] = 0 :success find
        //result[TF] = 1 :find fail
        //result[TF] = 2 :Obj not exist 
        var sql = "select student_ID,student_name,faculty_name,major_name,class_name "
            +"from student,class,major,faculty where student.class_staying = class.class_ID "
            +"and class.major_belong = major.major_ID and major.faculty_belong = faculty.faculty_ID "
        if(student_ID != ''){
            sql += "and student_ID = \'"+student_ID+"\'"
        }
        else{
            if(student_name != '')
                sql += "and student_name like \'%"+student_name+"%\'";
            if(faculty_name != '')
                sql += "and faculty_name like \'%"+faculty_name+"%\'";
            if(major_name != '')
                sql += "and major_name like \'%"+major_name+"%\'";
            if(class_name != '')
                sql += "and class_name like \'%"+class_name+"%\'";
        }
        base.inquireD(sql,result);
        setTimeout(function(){
            var data = {};
            for(var i=0; i < result[RE].length; i++) {
                data[i]={
                    'student_ID':result[RE][i].student_ID,
                    'class_name':result[RE][i].class_name,
                    'major_name':result[RE][i].major_name,
                    'faculty_name':result[RE][i].faculty_name,
                    'student_name':result[RE][i].student_name
                }
                result[TF] = 3;
            }
            if(result[TF] == false)
                result[TF] = 1;
            else if(result[RE].length == 0)
                result[TF] = 2;
            else if(result[TF] == 3)
                result[TF] = 0;
            result[RE] = data;
        },DEALTIME);
    }
    //课程搜索 V
    //course_ID,course_name,faculty_name,teacher_name
    find_course_by(course_name,faculty_name,teacher_name,result){//result[TF]-> 0/1/2
        //result[TF] = 0 :success find
        //result[TF] = 1 :find fail
        //result[TF] = 2 :Obj not exist 
        if(course_name == '' && faculty_name == '' && teacher_name == ''){
            result[RE] = {};
            result[TF] = 1;
            return;
        }
        var sql = "select course_ID,course_name,faculty_name,teacher_name "
        +"from course,teacher_class,teacher,faculty where teacher_class.course_ID_t_class = course.course_ID "
        +"and teacher_class.teacher_ID_t_class = teacher.teacher_id and course.faculty_belong = faculty.faculty_ID "
        if(course_name != ''){
            sql += "and course.course_name = \'"+course_name+"\' ";
        }
        if(faculty_name != ''){
            sql += " and faculty.faculty_name = \'"+faculty_name+"\' ";
        }
        if(teacher_name != ''){
            sql += " and teacher.teacher_name = \'"+teacher_name+"\' ";
        }
        base.inquireD(sql,result);
        setTimeout(function(){
            var data = {};
            for(var i=0; i < result[RE].length; i++) {
                data[i]={
                    'course_ID':result[RE][i].course_ID,
                    'course_name':result[RE][i].course_name,
                    'faculty_name':result[RE][i].faculty_name,
                    'teacher_name':result[RE][i].teacher_name
                }
                result[TF] = 3;
            }
            if(result[TF] == false)
                result[TF] = 1;
            else if(result[RE].length == 0)
                result[TF] = 2;
            else if(result[TF] == 3)
                result[TF] = 0;
            result[RE] = data;
        },DEALTIME);
    }
    //讨论区搜索 V ***忽略post_starter
    //post_ID,post_title,post_starter,post_label,post_date,
    //post_last_reviser,post_reply_num,post_browse_num
    find_post_by(post_title,post_starter,post_label,post_date,result){//result[TF]-> 0/1/2
        //result[TF] = 0 :success find
        //result[TF] = 1 :find fail
        //result[TF] = 2 :Obj not exist 
        var sql = "select post_ID,post_title,post_starter,post_date,post_label,post_last_reviser,"
            +"post_reply_num,post_browse_num from post "
        if(post_title == '' && post_label == '' &&post_date ==''){
            result[RE] = 0;
            result[TF] = 1;
            return;
        }
        if(post_title != ''){
            sql += "post_title like \'%"+post_title+"%\' ";
            if(post_label != ''){
                sql += "and post_label like \'%"+post_label+"%\' ";
            }
            if(post_date != '')
                sql += "and post_date = \'"+post_date+"\'";
        }
        else{
            if(post_label != ''){
                sql += "post_label like \'%"+post_label+"%\' ";
                if(post_date != '')
                    sql += "and post_date = \'"+post_date+"\' ";
            }
            else if(post_date != '')
                sql += "post_date = \'"+post_date+"\' ";
        }
        base.inquireD(sql,result);
        setTimeout(function(){
            var data = {};
            for(var i=0; i < result[RE].length; i++) {
                data[i]={
                    'post_ID':result[RE][i].post_ID,
                    'post_title':result[RE][i].post_title,
                    'post_starter':result[RE][i].post_starter,
                    'post_date':result[RE][i].post_date,
                    'post_label':result[RE][i].post_label,
                    'post_last_reviser':result[RE][i].post_last_reviser,
                    'post_reply_num':result[RE][i].post_reply_num,
                    'post_browse_num':result[RE][i].post_browse_num,
                }
                result[TF] = 3;
            }
            if(result[TF] == false)
                result[TF] = 1;
            else if(result[RE].length == 0)
                result[TF] = 2;
            else if(result[TF] == 3)
                result[TF] = 0;
            result[RE] = data;
        },DEALTIME);
    }

    //系统公告搜索 (announcement_title,announcement_date,sys_ann_publisher,result)
    find_sysannouncement_by(announcement_title,announcement_date,sys_ann_publisher,result){//result[TF]-> 0/1/2
        //result[TF] = 0 :success find
        //result[TF] = 1 :find fail
        //result[TF] = 2 :Obj not exist 
        var sql ="select sys_announcement_ID,announcement_label,announcement_title,announcement_content,"
            +"announcement_date,sys_ann_publisher,sys_ann_path from system_announcement";
        if(announcement_title != ''){
            sql += " where announcement_title like \'%"+announcement_title+"%\' ";
            if(announcement_date != ''){
                sql += "and announcement_date = \'"+announcement_date+"\' ";
            }
            if(sys_ann_publisher != ''){
                sql += "and sys_ann_publisher = \'"+sys_ann_publisher+"\' ";
            }
        }
        else{
            if(announcement_date != ''){
                sql += " where announcement_date = \'"+announcement_date+"\' ";
                if(sys_ann_publisher != ''){
                    sql += "and sys_ann_publisher = \'"+sys_ann_publisher+"\' ";
                }
            }
            else if(sys_ann_publisher != ''){
                sql += " where sys_ann_publisher = \'"+sys_ann_publisher+"\' ";
            }
        }
        base.inquireD(sql,result);
        setTimeout(function(){
            var data = {};
            for(var i=0; i < result[RE].length; i++) {
                data[i]={
                    'sys_announcement_ID':result[RE][i].sys_announcement_ID,
                    'announcement_label':result[RE][i].announcement_label,
                    'announcement_title':result[RE][i].announcement_title,
                    'announcement_content':result[RE][i].announcement_content,
                    'announcement_date':result[RE][i].announcement_date,
                    'sys_ann_publisher':result[RE][i].sys_ann_publisher,
                    'sys_ann_path':result[RE][i].sys_ann_path
                }
                result[TF] = 3;
            }
            if(result[TF] == false)
                result[TF] = 1;
            else if(result[RE].length == 0)
                result[TF] = 2;
            else if(result[TF] == 3)
                result[TF] = 0;
            result[RE] = data;
        },DEALTIME);
    }
    //教学公告搜索 
    //需要find_teacher_by(teacher_name,'',result) teacher_name->cou_ann_publisher
    //空值传入''
    find_couannouncement_by(announcement_title,announcement_date,cou_ann_publisher,result){//result[TF]-> 0/1/2
        //result[TF] = 0 :success find
        //result[TF] = 1 :find fail
        //result[TF] = 2 :Obj not exist 
        var sql ="select cou_announcement_ID,announcement_label,announcement_title,announcement_content,"
        +"announcement_date,cou_ann_publisher,cou_ann_course from course_announcement";
        if(announcement_title != ''){
            sql += " where announcement_title like \'%"+announcement_title+"%\' ";
            if(announcement_date != ''){
                sql += "and announcement_date = \'"+announcement_date+"\' ";
            }
            if(cou_ann_publisher != ''){
                sql += "and cou_ann_publisher = \'"+cou_ann_publisher+"\' ";
            }
        }
        else{
            if(announcement_date != ''){
                sql += " where announcement_date = \'"+announcement_date+"\' ";
                if(cou_ann_publisher != ''){
                    sql += "and cou_ann_publisher = \'"+cou_ann_publisher+"\' ";
                }
            }
            else if(cou_ann_publisher != ''){
                sql += " where cou_ann_publisher = \'"+cou_ann_publisher+"\' ";
            }
        }
        base.inquireD(sql,result);
        setTimeout(function(){
            var data = {};
            for(var i=0; i < result[RE].length; i++) {
                data[i]={
                    'cou_announcement_ID':result[RE][i].cou_announcement_ID,
                    'announcement_label':result[RE][i].announcement_label,
                    'announcement_title':result[RE][i].announcement_title,
                    'announcement_content':result[RE][i].announcement_content,
                    'announcement_date':result[RE][i].announcement_date,
                    'cou_ann_publisher':result[RE][i].cou_ann_publisher,
                    'cou_ann_course':result[RE][i].cou_ann_course
                }
                result[TF] = 3;
            }
            if(result[TF] == false)
                result[TF] = 1;
            else if(result[RE].length == 0)
                result[TF] = 2;
            else if(result[TF] == 3)
                result[TF] = 0;
            result[RE] = data;
        },DEALTIME);
    }
    //作业搜索
    find_homework_by(){

    }//to be finished
    //题库搜索
    //需要find_course_by(course_name,'','',result) course_name -> course_id
    //空值传入''
    find_bank_by(bank_name,bank_up_date,course_id,result){//result[TF]-> 0/1/2
        //result[TF] = 0 :success find
        //result[TF] = 1 :find fail
        //result[TF] = 2 :Obj not exist 
        var sql ="select bank_ID,bank_name,bank_size,bank_up_date,bank_download_num,bank_path,bank_t_class_belong"
        +" from bank,teacher_class where bank.bank_t_class_belong = teacher_class.t_class_ID ";
        if(bank_name != ''){
            sql += "and bank.bank_name like \'%"+bank_name+"%\' ";
        }
        if(bank_up_date != ''){
            sql += "and bank.bank_up_date = \'"+bank_up_date+"\' ";
        }
        if(course_id != ''){
            sql += "and teacher_class.course_ID_t_class = \'"+course_id+"\' ";
        }
        base.inquireD(sql,result);
        setTimeout(function(){
            var data = {};
            for(var i=0; i < result[RE].length; i++) {
                data[i]={
                    'bank_ID':result[RE][i].bank_ID,
                    'bank_name':result[RE][i].bank_name,
                    'bank_size':result[RE][i].bank_size,
                    'bank_up_date':result[RE][i].bank_up_date,
                    'bank_download_num':result[RE][i].bank_download_num,
                    'bank_path':result[RE][i].bank_path,
                    'bank_t_class_belong':result[RE][i].bank_t_class_belong
                }
                result[TF] = 3;
            }
            if(result[TF] == false)
                result[TF] = 1;
            else if(result[RE].length == 0)
                result[TF] = 2;
            else if(result[TF] == 3)
                result[TF] = 0;
            result[RE] = data;
        },DEALTIME);
    }
    //资源搜索
    //需要find_course_by(course_name,'','',result) course_name -> course_id
    //空值传入''
    find_resource(resource_name,resource_date,course_id,result){
        //result[TF]-> 0/1/2
        //result[TF] = 0 :success find
        //result[TF] = 1 :find fail
        //result[TF] = 2 :Obj not exist 
        var sql ="select resource_ID,resource_name,resource_size,resource_downloads,resource_date,resource_path,resource_t_class_belong"
        +" from resource,teacher_class where resource.resource_t_class_belong = teacher_class.t_class_ID ";
        if(resource_name != ''){
            sql += "and resource.resource_name like \'%"+resource_name+"%\' ";
        }
        if(resource_date != ''){
            sql += "and resource.resource_date = \'"+resource_date+"\' ";
        }
        if(course_id != ''){
            sql += "and teacher_class.course_ID_t_class = \'"+course_id+"\' ";
        }
        console.log(sql)
        base.inquireD(sql,result);
        setTimeout(function(){
            var data = {};
            for(var i=0; i < result[RE].length; i++) {
                data[i]={
                    'resource_ID':result[RE][i].resource_ID,
                    'resource_name':result[RE][i].resource_name,
                    'resource_size':result[RE][i].resource_size,
                    'resource_downloads':result[RE][i].resource_downloads,
                    'resource_date':result[RE][i].resource_date,
                    'resource_path':result[RE][i].resource_path,
                    'resource_t_class_belong':result[RE][i].resource_t_class_belong
                }
                result[TF] = 3;
            }
            if(result[TF] == false)
                result[TF] = 1;
            else if(result[RE].length == 0)
                result[TF] = 2;
            else if(result[TF] == 3)
                result[TF] = 0;
            result[RE] = data;
        },DEALTIME);
    }
//2a. find_obj_to_obj2 外键关联查询 参数列表：(id,result,result2)
    //find_
//////////////////////////////////////////////////////////////////////////////
//3.modify_obj 参数列表：(id,atr,val,result)
//             参数列表：(obj,result) obj = {1:'',2:''...}
    modify_one_homework_scores(homework_id,student_id,score,result){

    }//to be finished
    modify_one_teacher(teacher_id,passwd,teacher_eamil,teacher_introduction,result){//result[TF]=0/1/2
    //result[TF] = 0 :没有修改
    //result[TF] = 1 :修改一个参数
    //result[TF] = 2 :修改两个参数
    //result[TF] = 3 :修改三个参数 
        result[TF] = 0;
        var result3 = new Array();
        result3.push(0);
        var result1 = new Array();
        result1.push(0);
        var result2 = new Array();
        result2.push(0);
        if(passwd != ''){
            teacher.updateTeacher(teacher_id,'passwd',passwd,result3);
        }
        else{
            result3.push(0);
        }
        if(teacher_eamil != ''){
            teacher.updateTeacher(teacher_id,'teacher_email',teacher_eamil,result1);
        }
        else{
            result1.push(0);
        }
        if(teacher_introduction != ''){
            teacher.updateTeacher(teacher_id,'teacher_introduction',teacher_introduction,result2);
        }
        else{
            result2.push(0);
        }
        setTimeout(function(){
            result[TF] += +result1[TF]+ +result2[TF]+result3[TF];
        },DEALTIME*4);
    }
    modify_one_student(student_id,passwd,student_email,student_introduction,result){//result[TF]=0/1/2
    //result[TF] = 0 :没有修改
    //result[TF] = 1 :修改一个参数
    //result[TF] = 2 :修改两个参数 
    //result[TF] = 3 :修改三个参数 
            result[TF] = 0;
            var result1 = new Array();
            result1.push(0);
            var result2 = new Array();
            result2.push(0);
            var result3 = new Array();
            result3.push(0);
            if(passwd != ''){
                student.updateStudent(student_id,'passwd',passwd,result3);
            }
            else{
                result3.push(0);
            }
            if(student_email != ''){
                student.updateStudent(student_id,'student_email',student_email,result1);
            }
            else{
                result1.push(0);
            }
            if(student_introduction != ''){
                student.updateStudent(student_id,'student_introduction',student_introduction,result2);
            }
            else{
                result2.push(0);
            }
            setTimeout(function(){
                result[TF] += +result1[TF]+ +result2[TF]+result3[TF];
            },DEALTIME*4);
    }
//////////////////////////////////////////////////////////////////////////////
//4.add_obj 参数列表：(id,result)
//          参数列表：(obj,result) obj = {1:'',2:''...}
    //新增一名学生 V
    //input:student_name,passwd,faculty_id,major_id,class_id,student_introduction,student_email
    //result[TF] = 0 新增成功且无错误
    //             1 新增失败
    //             2 学生名未更新 必填
    //             3 密码未更新 必填
    //             学院\专业\班级必须输入处理 否则返回9
    //             4 学院未更新/不存在 必填
    //             5 专业未更新/不存在 必填
    //             6 班级未更新/不存在 必填
    //             7 学生简介未更新
    //             8 学生邮箱未更新
    //             9 必填项有缺失
    //result[RE] = new student ID
    add_one_student(student_name,passwd,faculty_id,major_id,class_id,student_introduction,student_email,result){
        if(faculty_id == '' || major_id == '' || class_id == '' || passwd == '' || student_name == ''){
            result[TF] = 9;
            return;
        }
        //检查faculty_id,major_id,class_id合法性
        // if(faculty_id != ''){
            //     if(major_id != ''){
            //         if(class_id != ''){
            //             var r = new Array();
            //             var sql = "select faculty_ID,major_ID,class_ID from faculty,major,class "
            //             +"where faculty.faculty_ID = major.faculty_belong and major.major_ID = class.major_belong "
            //             +"and faculty.faculty_id = \'"+faculty_id+"\' and major.major_id = \'"+major_id+"\'"
            //             +" and class.class_id = \'"+class_id+"\'"
            //             base.inquireD(sql,r);
            //             setTimeout(function(){
            //                 var data = {};
            //                 console.log(r[RE].length)
            //                 for(var i=0; i < r[RE].length; i++) {
            //                     data[i]={
            //                         'class_ID':r[RE][i].class_ID,
            //                     }
            //                 }
            //                 if(r[TF] == false || data == {}){
            //                     result[TF] = 4; 
            //                 }
            //                 else{
            //                     r[RE] = data;
            //                     console.log(r[RE])
            //                     var rr = new Array();
            //                     student.updateStudent(id,'class_staying',r[RE][0].class_ID,rr);
            //                     setTimeout(function(){
            //                         if(rr[0] == false)
            //                             result[TF] = 4;
            //                     },DEALTIME);
            //                 }
            //             },DEALTIME*3);
            //         }
            //     }
            //     else{
            //         if(class_id != '')
            //             result[TF] = 5;
            //     }
            // }
            // else if(major_id != '' || class_id != '')
            //     result[TF] = 4;
        var id = new Array();
        student.createStudent(id,result);
        setTimeout(function(){
            if(result[0] == false)
                 result[TF] = 1;
            else
                 result[TF] = 0;
            result[RE] = id[0];
            if(student_name != ''){
                var r = new Array();
                student.updateStudent(id,'student_name',student_name,r);
                setTimeout(function(){
                    if(r[0] == false){
                        result[TF] = 2;

                    }
                },DEALTIME);
            }
            if(passwd != ''){
                var r = new Array();
                student.updateStudent(id,'passwd',passwd,r);
                setTimeout(function(){
                    if(r[0] == false){
                        result[TF] = 3;
                    }
                },DEALTIME);
            }
            if(student_introduction != ''){
                var r =new Array();
                student.updateStudent(id,'student_introduction',student_introduction,r);
                setTimeout(function(){
                    if(r[0] == false){
                        result[TF] = 7;
                    }
                },DEALTIME);
            }
            if(student_email != ''){
                var r =new Array();
                student.updateStudent(id,'student_email',student_email,r);
                setTimeout(function(){
                    if(r[0] == false){
                        result[TF] = 8;
                    }
                },DEALTIME);
            }
        },DEALTIME*8);
    }
    //新增一名教师 V
    //input:teacher_name,passwd,faculty_working,teacher_introduction,teacher_email
    //result[TF] = 0 新增成功且无错误
    //             1 新增失败
    //             2 教师名未更新 必填
    //             3 密码未更新 必填
    //             4 学院未更新/不存在 必填
    //             5 教师简介未更新
    //             6 教师邮箱未更新
    //             7 必填项有缺失
    //result[RE] = new teacher ID
    add_one_teacher(teacher_name,passwd,faculty_working,teacher_introduction,teacher_email,result){
        if(faculty_working == '' || passwd == '' || teacher_name == ''){
            result[TF] = 9;
            return;
        }
        var id = new Array();
        teacher.createTeacher(id,result);
        setTimeout(function(){
            if(result[0] == false)
                 result[TF] = 1;
            else
                 result[TF] = 0;
            result[RE] = id[0];
            if(teacher_name != ''){
                var r = new Array();
                teacher.updateTeacher(id,'teacher_name',teacher_name,r);
                setTimeout(function(){
                    if(r[0] == false){
                        result[TF] = 2;

                    }
                },DEALTIME);
            }
            if(faculty_working != ''){
                var r = new Array();
                teacher.updateTeacher(id,'faculty_working',faculty_working,r);
                setTimeout(function(){
                    if(r[0] == false){
                        result[TF] = 4;

                    }
                },DEALTIME);
            }
            if(passwd != ''){
                var r = new Array();
                teacher.updateTeacher(id,'passwd',passwd,r);
                setTimeout(function(){
                    if(r[0] == false){
                        result[TF] = 3;
                    }
                },DEALTIME);
            }
            if(teacher_introduction != ''){
                var r =new Array();
                teacher.updateTeacher(id,'teacher_introduction',teacher_introduction,r);
                setTimeout(function(){
                    if(r[0] == false){
                        result[TF] = 5;
                    }
                },DEALTIME);
            }
            if(teacher_email != ''){
                var r =new Array();
                teacher.updateTeacher(id,'teacher_email',teacher_email,r);
                setTimeout(function(){
                    if(r[0] == false){
                        result[TF] = 6;
                    }
                },DEALTIME);
            }
        },DEALTIME*6);
    }

    add_one_homework_by_course(teacher_ID,course_ID){

    }//to be finished
    
    //新增讨论区 V
    //input:post_label,post_title,post_content,post_starter,
    //other value:post_date,post_reply_num,post_browse_num,post_support_num,post_last_reviser
    //result[TF] = 0 新增成功且无错误
    //             1 新增失败
    //             2 post_label更新失败
    //             3 post_title更新失败 必填
    //             4 post_content更新失败 
    //             5 post_starter更新失败 必填
    //             6 other value更新失败
    //             7 必填项有缺失
    //result[RE] = new post ID
    add_one_post(post_label,post_title,post_content,post_starter,result){
        if(post_starter == '' || post_title == ''){
            result[TF] = 7;
            return;
        }
        var id = new Array();
        post.createPost(id,result);
        setTimeout(function(){
            if(result[0] == false)
                 result[TF] = 1;
            else
                 result[TF] = 0;
            result[RE] = id[0];

            if(1){
                var r = new Array();
                post.updatePost(id,'post_title',post_title,r);
                setTimeout(function(){
                    if(r[0] == false){
                        result[TF] = 3;
                    }
                },DEALTIME);
            }
            if(1){
                var r = new Array();
                post.updatePost(id,'post_starter',post_starter,r);
                setTimeout(function(){
                    if(r[0] == false){
                        result[TF] = 5;
                    }
                },DEALTIME);
            }
            if(post_label != ''){
                var r = new Array();
                post.updatePost(id,'post_content',post_content,r);
                setTimeout(function(){
                    if(r[0] == false){
                        result[TF] = 4;
                    }
                },DEALTIME);
            }
            if(post_label != ''){
                var r = new Array();
                post.updatePost(id,'post_label',post_label,r);
                setTimeout(function(){
                    if(r[0] == false){
                        result[TF] = 2;
                    }
                },DEALTIME);
            }
            //post_date,post_reply_num,post_browse_num,post_support_num,post_last_reviser
            var t = new Array();
            var date = new Date();
            var da  = ''+date.getFullYear();
            if(date.getMonth()<=9)
                da += '0';
            da += date.getMonth()+1;
            if(date.getDate()<=9)
                da += '0';
            da += date.getDate();
            post.updatePost(id,'post_date',da,t);
            post.updatePost(id,'post_reply_num',0,t);
            post.updatePost(id,'post_browse_num',0,t);
            post.updatePost(id,'post_support_num',0,t);
        },DEALTIME*6);
    }//to be finished

    all_one_reply_by_one_post(){

    }//to be finished

//////////////////////////////////////////////////////////////////////////////
//5.delete_obj 参数列表(id,result)
    //删除一条回复
    delete_one_reply(reply_id,result){//result[TF]-> 0/1
        //result[TF] = 0 :success delete
        //result[TF] = 1 :delete fail
        reply.deleteReply(reply_id,result);
        setTimeout(function(){
                if(result[0] == true)
                    result[TF] = 0;
                else
                    result[TF] = 1;
        },DEALTIME);
    }
    //删除一个讨论区（包括其所有回复）
    delete_one_post(post_id,result){//result[TF]-> 0/1
        //result[TF] = 0 :success delete
        //result[TF] = 1 :delete fail
        this.load_allReply_one_post(post_id,result);
        setTimeout(function(){
            for(var i in result[RE])
                this.delete_one_reply(result[RE][i].reply_id,result)
            post.deletePost(post_id,result);
            setTimeout(function(){
                if(result[0] == true)
                    result[TF] = 0;
                else
                    result[TF] = 1;
            },DEALTIME);
        },DEALTIME);
    }//to be finished
    //从教学班中删除一个学生
    delete_one_student_from_teacher_class(){
        
    }//to be finished
//////////////////////////////////////////////////////////////////////////////
//6.other: 其他操作
//a.登录操作
    login_admin(id,passwd,result){//result[TF]-> 0/1/2
        //result[TF] = 0 : success check
        //result[TF] = 1 :passwd wrong
        //result[TF] = 2 :userID not exist 
        admin.inquireAdmin(result);
        setTimeout(function(){
            for(var i in result[RE]){
                if(result[RE][i].admin_ID == id){
                    if(result[RE][i].passwd == passwd){
                        result[TF] = 0;
                        break;
                    }
                    else{ 
                        result[TF] = 1;
                        break;
                    }
                }
                else
                    continue;
            }
            if(result[TF]!=0 && result[TF]!=1)
                result[TF] = 2;
        },DEALTIME);
    }
    login_teacher(id,passwd,result){//result[TF]-> 0/1/2
        //result[TF] = 0 : success check
        //result[TF] = 1 :passwd wrong
        //result[TF] = 2 :userID not exist 
        teacher.inquireTeacher(result);
        setTimeout(function(){
            for(var i in result[RE]){
                if(result[RE][i].teacher_ID == id){
                    if(result[RE][i].passwd == passwd){
                        result[TF] = 0;
                        break;
                    }
                    else{ 
                        result[TF] = 1;
                        break;
                    }
                }
                else
                    continue;
            }
            if(result[TF]!=0 && result[TF]!=1)
                result[TF] = 2;
        },DEALTIME);
    }
    login_student(id,passwd,result){//result[TF]-> 0/1/2
        //result[TF] = 0 : success check
        //result[TF] = 1 :passwd wrong
        //result[TF] = 2 :userID not exist 
        student.inquireStudent(result);
        setTimeout(function(){
            for(var i in result[RE]){
                if(result[RE][i].student_ID == id){
                    if(result[RE][i].passwd == passwd){
                        result[TF] = 0;
                        break;
                    }
                    else{ 
                        result[TF] = 1;
                        break;
                    }
                }
                else
                    continue;
            }
            if(result[TF]!=0 && result[TF]!=1)
                result[TF] = 2;
        },DEALTIME);
    }

    //学生提交作业
    //教师批改作业
    //教学班添加
}

var test = new AdminService();
var result = new Array();
var id = new Array();
//test.load_allCourse(result)
//test.find_course_by('机器学习','','',result)
//test.load_allStudent(result)
//test.find_student_by('','','','','',result)
//test.load_allTeacher(result)
//test.find_teacher_by('TE000001','','',result)
//test.load_allPost(result);
//test.find_post_by('关于','','','',result)

//student_name,passwd,faculty_id,major_id,class_id,student_introduction,student_email,result
//test.add_one_student('','','','','','','',result)

//teacher_name,passwd,faculty_working,teacher_introduction,teacher_email
//faculty_working is ID
//test.add_one_teacher('','','','','',result)

//post_label,post_title,post_content,post_starter
//test.add_one_post('','请教一个哲学问题','RT','ST000001',result)

//student_id,passwd,student_email,student_introduction
//test.modify_one_student('ST000004','11111','853822587@qq.com','',result)

//test.modify_one_teacher('TE000004','11112','4598236@163.com','A good teacher',result);

//test.load_allCourse_one_student('ST000001',result)
//test.load_allHomework_one_student_one_t_class('ST000002','TC000001',result)
//test.load_allHomework_one_teacher_one_t_class('TE000001','CO000001',result)
// test.load_UnCorrectHomework_one_teacher('TE000001',result)

// setTimeout(function(){
//         console.log(result[TF]);
//         console.log(result[RE]);
// },DEALTIME*10);

module.exports = AdminService;