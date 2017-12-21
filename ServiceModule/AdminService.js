'use strict';

var AdminDAO = require('../DAOModule/AdminDAO.js');
var admin = new AdminDAO();
var StudentDAO = require('../DAOModule/StudentDAO.js');
var student = new StudentDAO();
var TeacherDAO = require('../DAOModule/TeacherDAO.js');
var teacher = new TeacherDAO();
var CourseDAO = require('../DAOModule/CourseDAO.js');
var course = new CourseDAO();
var Teaching_classDAO = require('../DAOModule/Teaching_classDAO.js');
var teaching_class = new Teaching_classDAO();
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

var RE = 0;
var TF = 1;
var content;

//function in DAO
/*createAdmin(id,result);
updateAdmin(id,atr,val,result);
deleteAdmin(id,result);
default_fn(val);
inquireAdmin(result,fn = this.default_fn);*/

class AdminService{
    constructor(){
    }
//admin
    default_fn(val){//val = rows[i]
        val.admin_ID
        val.passwd
        val.admin_email
        return true;
    }
    //可调用函数
    //函数名格式:操作+相关对象
    //2.find_obj  参数列表：(id,result)
    //2a. find_obj_to_obj2 外键关联查询 参数列表：(id,result,result2)
    //3.modify_obj 参数列表：(id,atr,val,result)
    //             参数列表：(obj,result) obj = {1:'',2:''...}
    //4.add_obj 参数列表：(id,result)
    //          参数列表：(obj,result) obj = {1:'',2:''...}
    //5.delete_obj 参数列表(id,result)
    //6.other:
    //a.login_obj
//1.load_obj 可提供筛选条件 参数列表：(result,condition_fn)
    //加载管理员个人信息
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
        },100);
    }
    //加载学生个人信息
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
        },100);
    }
    //加载教师个人信息
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
        },100);
    }
    //加载近期公告
    load_fourLatest_sysannouncement(id,result){
        
    }

    //Admin home page System_announcement which have image display
    //return count(<=4) which newest System_announcement have image
    load_Home_page_System_announcement_imageF4(val){
        /*var desc_date = function(x,y){
            return (x['date']>y['date'])?1:-1;
        }
        this.admin.inquireSomeSystem_announcement(val,is_System_announcement_have_image_fn);
        val.sort(desc_date);
        var res = "";
        var count = 0;
        /////////////////////////////////////////////////////
        res += "{";
        for(var c in val){
            if(count >3)
                break;
            res += val[c];
            count += 1;
        }
        res += "}";
        /////////////////////////////////////////////////////
        val = res;
        return count;*/
    }
    //Admin Home page System_announcement which not image display
    //return count(<=4) which newest System_announcement not have image
    load_Home_page_System_announcement_nimageF4(val){
        /*var desc_date = function(x,y){
            return (x['date']>y['date'])?1:-1;
        }
        this.admin.inquireSomeSystem_announcement(val,is_System_announcement_nhave_image_fn);
        val.sort(desc_date);
        var res = "";
        var count = 0;
        res += "{";
        for(var c in val){
            if(count >3)
                break;
            res += val[c];
            count += 1;
        }
        res += "}";
        val = res;
        return val;*/
    }
    //Admin Home page Course_announcement 
    load_Home_page_Course_announcement_F4(val){
        /*var desc_date = function(x,y){
            return (x['date']>y['date'])?1:-1;
        }
        this.admin.inquireSomeCourse_announcement(val,default_fn);
        val.sort(desc_date);
        var res = "";
        var count = 0;
        res += "{";
        for(var c in val){
            if(count >3)
                break;
            res += val[c];
            count += 1;
        }
        res += "}";
        val = res;
        return count;*/
    }
    //
    load_Home_page_Post_F4(val){
        /*var desc_time = function(x,y){
            return (x['time']>y['time'])?1:-1;
        }
        this.admin.inquireSomePost(val,default_fn);
        val.sort(desc_time);
        var res = "";
        var count = 0;
        res += "{";
        for(var c in val){
            if(count >3)
                break;
            res += val[c];
            count += 1;
        }
        res += "}";
        val = res;
        return count;*/
    }
    //Admin Home page display error log
    load_Home_page_Error_message(val){
    }
    //depend on the query way
    load_ManageAnnouncement_page_System_announcement(val,keyword = '',publisher = '',date = ''){
        /*this.admin.inquireSomeSystem_announcement(val,default_fn);
        var res = "";
        var count = 0;
        res += "{"
        for(var c in val){
            if(publisher != '' && val[c]['publisher'] != publisher)
                continue;
            if(date != '' && val[c]['date'] == date)
                continue;
            //if(keyword != '' && val[c]['title'].keyword)
            //    continue;
            res += val[c];
            count += 1;
        }
        return count;*/
    }
    //depend on the query way
    load_ManageAnnouncement_page_Course_announcement(val,keyword = '',publisher = '',date = ''){
        /*this.admin.inquireSomeCourse_announcement(val,default_fn);
        var res = "";
        var count = 0;
        res += "{"
        for(var c in val){
            if(publisher != '' && val[c]['publisher'] != publisher)
                continue;
            if(date != '' && val[c]['date'] == date)
                continue;
            //if(keyword != '' && val[c]['title'].keyword)
            //    continue;
            res += val[c];
            count += 1;
        }
        return count;*/
    }
    publishSystem_announcement(val = '',title = '',content = '',path = ''){
        //val not include id when it input,
        //it get a new id,when it output
        /*this.admin.createSystem_announcement(id);
        if(val == ''){
            this.admin.updateSystem_announcement(id,'title',title);
            this.admin.updateSystem_announcement(id,'content',content);
            var publisher = 'AD';
            this.admin.updateSystem_announcement(id,'publisher',publisher);
            var date = '';
            this.admin.updateSystem_announcement(id,'date',date);
            this.admin.updateSystem_announcement(id,'path',path);   
            
            val = {
                'id':id,
                'title': title,
                'content': content,
                'publisher': publisher,
                'date': date,
                'path': path
              }
            return true;
        }
        else{
            val['id'] = id;
            this.admin.updateSystem_announcement(id,'title',val['title']);
            this.admin.updateSystem_announcement(id,'content',val['content']);
            this.admin.updateSystem_announcement(id,'publisher',val['publisher']);
            this.admin.updateSystem_announcement(id,'date',val['date']);
            this.admin.updateSystem_announcement(id,'path',val['path']);        
            return true;
        }*/
    }
    modifySystem_announcement(val = '',id = '',title ,content ,path){
        /*if(val == '' && id == '')
            return false;
        if(val == ''){
            this.admin.updateSystem_announcement(id,'title',title);
            this.admin.updateSystem_announcement(id,'content',content);
            this.admin.updateSystem_announcement(id,'path',path);            
            val = {
                'id':id,
                'title': title,
                'content': content,
                'publisher': publisher,
                'date': date,
                'path': path
              }
            return true;
        }
        else{
            this.admin.updateSystem_announcement(val['id'],'title',title);
            this.admin.updateSystem_announcement(val['id'],'content',content);
            this.admin.updateSystem_announcement(val['id'],'path',path);        
            return true;
        }*/
    }
    /*publishCourse_announcement(){

    }*/
    load_ManageStudent_page_Student(){

    }
    load_ManageTeacher_page_Teacher(){

    }
    addTeacher(){

    }
    addStudent(){

    }
    modifyStudent(){

    }
    modifyTeacher(){

    }
    load_ManageCourse_page_Course(){

    }
    addCourse(){

    }
    modifyCourse(){

    }

//其他操作
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
        },100);
    }
    showPlatform(val){
    }
}

var test = new AdminService(0);
var result = new Array();
//test.login_admin('AD000001','passwd',result);
//test.load_one_admin('AD000002',result)
test.load_one_student('TE000001',result);
setTimeout(function(){
        console.log(result[TF]);
    },1000);


module.exports = AdminService;