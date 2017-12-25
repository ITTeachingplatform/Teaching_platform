'use strict';

var BaseDAO = require('./BaseDAO.js');
var baseDAO = new BaseDAO();

//所有注意大小写
var table = "teacher";//表名
var key = "teacher_ID";//表主键
var atrlist = "(teacher_ID,passwd,faculty_working,teacher_name,teacher_email,teacher_introduction)";//表列明 格式(atr1,atr2,atr3,...)
var atrnum = 6;//表列数

class TeacherDAO{//表名DAO
    constructor(){
    };
    //以下函数所有Teacher->对应表名
    getNewTeacherId(result){
        baseDAO.getNewId(table,key,result);
    };
    createTeacher(id,result){//id = new Array(),result = true/false
        this.getNewTeacherId(id);
        setTimeout(function(){
            baseDAO.create(id,table,atrlist,atrnum,result);
        },100)
    };
    updateTeacher(id,atr,val,result){
        baseDAO.update(id,atr,val,table,key,result);
    };
    deleteTeacher(id,result){
        baseDAO.delete(id,table,key,result);
    };
    //这个函数不用理会
    default_fn(val){
        return true;
    };
    //以下函数所有Teacher->对应表名
    inquireTeacher(result,fn = this.default_fn){
        baseDAO.inquire(table,fn,result);
    };
};

//以下为测试代码 请把teacher改成对应表名 注意大小写
//var teacher = new TeacherDAO();
//var id = new Array();
//var result = new Array();
//teacher.getNewTeacherId(id);
//teacher.createTeacher(id,result);
//teacher.updateTeacher("AD000001","teacher_email","853822587@qq.com",result);
//teacher.deleteTeacher("AD000001",result);
//teacher.inquireTeacher(result);
//setTimeout(function(){
//    console.log(result);
//},100)

//这里不要忘记改
module.exports = TeacherDAO;
