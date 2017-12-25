'use strict';

var BaseDAO = require('./BaseDAO.js');
var baseDAO = new BaseDAO();

//所有注意大小写
var table = "faculty";//表名
var key = "faculty_ID";//表主键
var atrlist = "(faculty_ID,faculty_name,faculty_introduction)";//表列明 格式(atr1,atr2,atr3,...)
var atrnum = 3;//表列数

class FacultyDAO{//表名DAO
    constructor(){
    };
    //以下函数所有Faculty->对应表名
    getNewFacultyId(result){
        baseDAO.getNewId(table,key,result);
    };
    createFaculty(id,result){//id = new Array(),result = true/false
        this.getNewFacultyId(id);
        setTimeout(function(){
            baseDAO.create(id,table,atrlist,atrnum,result);
        },100)
    };
    updateFaculty(id,atr,val,result){
        baseDAO.update(id,atr,val,table,key,result);
    };
    deleteFaculty(id,result){
        baseDAO.delete(id,table,key,result);
    };
    //这个函数不用理会
    default_fn(val){
        return true;
    };
    //以下函数所有Faculty->对应表名
    inquireFaculty(result,fn = this.default_fn){
        baseDAO.inquire(table,fn,result);
    };
};

//以下为测试代码 请把faculty改成对应表名 注意大小写
//var faculty = new FacultyDAO();
//var id = new Array();
//var result = new Array();
//faculty.getNewFacultyId(id);
//faculty.createFaculty(id,result);
//faculty.updateFaculty("AD000001","faculty_email","853822587@qq.com",result);
//faculty.deleteFaculty("AD000001",result);
//faculty.inquireFaculty(result);
//setTimeout(function(){
//    console.log(result);
//},100)

//这里不要忘记改
module.exports = FacultyDAO;
