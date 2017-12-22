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
var content;

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
    //加载管理员个人信息 id是调用者id
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
    //加载学生个人信息 id是调用者id
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
    //加载教师个人信息 id是调用者id
    load_one_teacher(id,result){//result[TF]-> 0/1/2
        //result[TF] = 0 :success load
        //result[TF] = 1 :load fail
        //result[TF] = 2 :teacher_ID not exist 
        teacher.inquireteacher(result);
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
    //加载近期num条系统公告
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
    load_numLatest_post(result,num = 4){//result[TF]-> 0/1/2
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
    load_numLatest_homework(result,num = 4){//result[TF]-> 0/1/2
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
    //加载一个教学班最新num条作业 
    //需要find_teacher_class_to_homework
    load_numLatest_homework_by_one_tclass(){

    }//to be finished
    //加载一个学生最新num条作业 
    //需要find_student_to_teacher_class
    //需要find_teacher_class_to_homework
    load_numLatest_homework_by_one_student(){
    }//to be finished
    //加载一个教师未批改的作业
    //
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
    //教师搜索 (teacher_name,faculty_working,result)
    //需要find_faculty_by(faculty_name,result) faculty_name->faculty_working
    //空值传入''
    find_teacher_by(teacher_name,faculty_working,result){//result[TF]-> 0/1/2
        //result[TF] = 0 :success find
        //result[TF] = 1 :find fail
        //result[TF] = 2 :Obj not exist 
        var sql = "select *from teacher";
        if(teacher_name != '' || faculty_working != ''){
            sql += " where "; 
            if(teacher_name != '')
                sql += "teacher_name = \'"+teacher_name+"\'";
            if(teacher_name != ''&&faculty_working != '')
                sql += " and ";
            if(faculty_working != '')
                sql += "faculty_working = \'"+faculty_working+"\'";
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
                        'teacher_eamil':result[RE][i].teacher_eamil
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
    //学生搜索 (student_name,class_staying,major_ID,faculty_ID)
    //需要find_major_by(major_name,result) major_name->major_ID
    //需要find_faculty_by(faculty_name,result) faculty_name->faculty_ID
    //需要find_class_by(class_name,result) class_name->class_staying
    //空值传入''
    find_student_by(result,student_name,class_staying,major_ID,faculty_ID){
        var sql = "select student.student_ID,student.passwd,student.class_staying,student.student_name,"
            +"student.student_introduction,student.student_email "
            +"from student,class,major,faculty where student.class_staying = class.class_ID "
            +"and class.major_belong = major.major_id and major.faculty_belong = faculty.faculty_ID ";
        if(student_name != '')
            sql += "and student_name = \'"+student_name+"\'";
        if(class_staying != '')
            sql += "and class_staying = \'"+class_staying+"\'";
        if(major_ID != '')
            sql += "and major_ID = \'"+major_ID+"\'";
        if(faculty_ID != '')
            sql += "and faculty_ID = \'"+faculty_ID+"\'";
        base.inquireD(sql,result);
        setTimeout(function(){
            var data = {};
            for(var i=0; i < result[RE].length; i++) {
                data[i]={
                    'student_ID':result[RE][i].student_ID,
                    'passwd':result[RE][i].passwd,
                    'class_staying':result[RE][i].class_staying,
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
    //课程搜索 (course_name,faculty_belong,teaher_ID)
    //需要find_teacher_by(teacher_name,'',result) teacher_name->teaher_ID
    //需要find_faculty_by(faculty_name,result) faculty_name->faculty_belong
    //空值传入''
    find_course_by(course_name,faculty_belong,teaher_ID){
        
        setTimeout(function(){
        },DEALTIME);
    }//to be finished
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

//2a. find_obj_to_obj2 外键关联查询 参数列表：(id,result,result2)
    
//////////////////////////////////////////////////////////////////////////////
//3.modify_obj 参数列表：(id,atr,val,result)
//             参数列表：(obj,result) obj = {1:'',2:''...}
//////////////////////////////////////////////////////////////////////////////
//4.add_obj 参数列表：(id,result)
//          参数列表：(obj,result) obj = {1:'',2:''...}
//////////////////////////////////////////////////////////////////////////////
//5.delete_obj 参数列表(id,result)
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

    showPlatform(val){
    }
}

var test = new AdminService();
var result = new Array();
//test.login_admin('AD000001','passwd',result);
//test.load_one_admin('AD000002',result)
//test.load_one_student('TE000001',result);
//test.load_numLatest_sysannouncement(result);
//test.load_numLatest_couannouncement(result);
//test.load_numLatest_post(result);
//test.load_numLatest_homework(result)
//test.find_all_table('AD000001',result)
//test.find_teacher_by('','',result)
//test.find_faculty_by('Food Science',result)
//test.find_class_by('3班',result)
//test.find_student_by('Michael','','','')
//test.find_sysannouncement_by('','20171201','',result)
//test.find_couannouncement_by('','','TE000001',result)
//setTimeout(function(){
//        console.log(result[TF]);
//        console.log(result[RE]);
//    },1000);


module.exports = AdminService;