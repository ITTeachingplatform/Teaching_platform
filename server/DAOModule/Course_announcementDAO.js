'use strict';

var BaseDAO = require('./BaseDAO.js');
var baseDAO = new BaseDAO();

//所有注意大小写
var table = "course_announcement";//表名
var key = "cou_announcement_ID";//表主键
var atrlist = "(cou_announcement_ID,announcement_label,announcement_title,announcement_content,announcement_date,cou_ann_publisher,cou_ann_course)";//表列明 格式(atr1,atr2,atr3,...)
var atrnum = 7;//表列数

class Course_announcementDAO{//表名DAO
    constructor(){
    };
    //以下函数所有Course_announcement->对应表名
    getNewCourse_announcementId(result){
        baseDAO.getNewId(table,key,result);
    };
    createCourse_announcement(id,result){//id = new Array(),result = true/false
        this.getNewCourse_announcementId(id);
        setTimeout(function(){
            baseDAO.create(id,table,atrlist,atrnum,result);
        },100)
    };
    updateCourse_announcement(id,atr,val,result){
        baseDAO.update(id,atr,val,table,key,result);
    };
    deleteCourse_announcement(id,result){
        baseDAO.delete(id,table,key,result);
    };
    //这个函数不用理会
    default_fn(val){
        return true;
    };
    //以下函数所有Course_announcement->对应表名
    inquireCourse_announcement(result,fn = this.default_fn){
        baseDAO.inquire(table,fn,result);
    };
};

//以下为测试代码 请把course_announcement改成对应表名 注意大小写
//var course_announcement = new Course_announcementDAO();
//var id = new Array();
//var result = new Array();
//course_announcement.getNewCourse_announcementId(id);
//course_announcement.createCourse_announcement(id,result);
//course_announcement.updateCourse_announcement("AD000001","course_announcement_email","853822587@qq.com",result);
//course_announcement.deleteCourse_announcement("AD000001",result);
//course_announcement.inquireCourse_announcement(result);
//setTimeout(function(){
//    console.log(result);
//},100)

//这里不要忘记改
module.exports = Course_announcementDAO;
