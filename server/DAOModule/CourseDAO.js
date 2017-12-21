'use strict';

var BaseDAO = require('./BaseDAO.js');
var baseDAO = new BaseDAO();

//所有注意大小写
var table = "course";//表名
var key = "course_ID";//表主键
var atrlist = "(course_ID,faculty_belong,course_name,course_introduction)";//表列明 格式(atr1,atr2,atr3,...)
var atrnum = 4;//表列数

class CourseDAO{//表名DAO
    constructor(){
    };
    //以下函数所有Course->对应表名
    getNewCourseId(result){
        baseDAO.getNewId(table,key,result);
    };
    createCourse(id,result){//id = new Array(),result = true/false
        this.getNewCourseId(id);
        setTimeout(function(){
            baseDAO.create(id,table,atrlist,atrnum,result);
        },100)
    };
    updateCourse(id,atr,val,result){
        baseDAO.update(id,atr,val,table,key,result);
    };
    deleteCourse(id,result){
        baseDAO.delete(id,table,key,result);
    };
    //这个函数不用理会
    default_fn(val){
        return true;
    };
    //以下函数所有Course->对应表名
    inquireCourse(result,fn = this.default_fn){
        baseDAO.inquire(table,fn,result);
    };
};

//以下为测试代码 请把course改成对应表名 注意大小写
//var course = new CourseDAO();
//var id = new Array();
//var result = new Array();
//course.getNewCourseId(id);
//course.createCourse(id,result);
//course.updateCourse("AD000001","course_email","853822587@qq.com",result);
//course.deleteCourse("AD000001",result);
//course.inquireCourse(result);
//setTimeout(function(){
//    console.log(result);
//},100)

//这里不要忘记改
module.exports = CourseDAO;
