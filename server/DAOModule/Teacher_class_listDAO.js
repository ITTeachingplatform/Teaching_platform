'use strict';

var BaseDAO = require('./BaseDAO.js');
var baseDAO = new BaseDAO();

//所有注意大小写
var table = "teacher_class_list";//表名
var key = "";//表主键
var atrlist = "(t_class_ID_list,student_ID_list)";//表列明 格式(atr1,atr2,atr3,...)
var atrnum = 2;//表列数

class Teacher_class_listDAO{//表名DAO
    constructor(){
    };
    createTeacher_class_list(t_class_ID_list,student_ID_list,result){//id = new Array(),result = true/false
        baseDAO.create(table,atrlist,artnum,t_class_ID_list,student_ID_list,result);
    };
    updateTeacher_class_list(id,atr,val,result){
        baseDAO.update(id,atr,val,table,key,result);
    };
    deleteTeacher_class_list(id,result){
        baseDAO.delete(id,table,key,result);
    };
    //这个函数不用理会
    default_fn(val){
        return true;
    };
    //以下函数所有Teacher_class_list->对应表名
    inquireTeacher_class_list(result,fn = this.default_fn){
        baseDAO.inquire(table,fn,result);
    };
};

//以下为测试代码 请把teacher_class_list改成对应表名 注意大小写
//var teacher_class_list = new Teacher_class_listDAO();
//var id = new Array();
//var result = new Array();
//teacher_class_list.getNewTeacher_class_listId(id);
//teacher_class_list.createTeacher_class_list(id,result);
//teacher_class_list.updateTeacher_class_list("AD000001","teacher_class_list_email","853822587@qq.com",result);
//teacher_class_list.deleteTeacher_class_list("AD000001",result);
//teacher_class_list.inquireTeacher_class_list(result);
//setTimeout(function(){
//    console.log(result);
//},100)

//这里不要忘记改
module.exports = Teacher_class_listDAO;
