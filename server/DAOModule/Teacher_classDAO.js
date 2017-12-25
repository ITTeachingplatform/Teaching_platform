'use strict';

var BaseDAO = require('./BaseDAO.js');
var baseDAO = new BaseDAO();

//所有注意大小写
var table = "teacher_class";//表名
var key = "t_class_ID";//表主键
var atrlist = "(t_class_ID,teacher_ID_t_class,course_ID_t_class,sysllabus)";//表列明 格式(atr1,atr2,atr3,...)
var atrnum = 4;//表列数

class Teacher_classDAO{//表名DAO
    constructor(){
    };
    //以下函数所有Teacher_class->对应表名
    getNewTeacher_classId(result){
        baseDAO.getNewId(table,key,result);
    };
    createTeacher_class(id,result){//id = new Array(),result = true/false
        this.getNewTeacher_classId(id);
        setTimeout(function(){
            baseDAO.create(id,table,atrlist,atrnum,result);
        },100)
    };
    updateTeacher_class(id,atr,val,result){
        baseDAO.update(id,atr,val,table,key,result);
    };
    deleteTeacher_class(id,result){
        baseDAO.delete(id,table,key,result);
    };
    //这个函数不用理会
    default_fn(val){
        return true;
    };
    //以下函数所有Teacher_class->对应表名
    inquireTeacher_class(result,fn = this.default_fn){
        baseDAO.inquire(table,fn,result);
    };
};

//以下为测试代码 请把teacher_class改成对应表名 注意大小写
//var teacher_class = new Teacher_classDAO();
//var id = new Array();
//var result = new Array();
//teacher_class.getNewTeacher_classId(id);
//teacher_class.createTeacher_class(id,result);
//teacher_class.updateTeacher_class("AD000001","teacher_class_email","853822587@qq.com",result);
//teacher_class.deleteTeacher_class("AD000001",result);
//teacher_class.inquireTeacher_class(result);
//setTimeout(function(){
//    console.log(result);
//},100)

//这里不要忘记改
module.exports = Teacher_classDAO;
