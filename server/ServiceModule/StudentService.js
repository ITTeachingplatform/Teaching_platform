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

class StudentService{
    constructor(){
    }
    //可调用函数
    //函数名格式:操作+相关对象
//////////////////////////////////////////////////////////////////////////////
//1.load_obj 可提供筛选条件 参数列表：(result,condition_fn)
//load 参数不应该为空，默认num == 4
//加载一个学生的全部课程
    load_allCourse_one_student(student_id,result){//result[TF]-> 0/1/2
        //result[TF] = 0 :success load
        //result[TF] = 1 :load fail
        //result[TF] = 2 :student_ID not exist 
        var sql = "select course_ID,faculty_belong,course_name,course_introduction "
            +"from course,teacher_class,teacher_class_list where teacher_class.course_ID_t_class = course.course_ID "
            +"and teacher_class.t_class_ID = teacher_class_list.t_class_ID_list";
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
    }
};


module.exports = StudentService;