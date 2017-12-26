'use strict';

var BaseDAO = require('./BaseDAO.js');
var baseDAO = new BaseDAO();

var DEALTIME = 100;
//所有注意大小写
var table = "student";//表名
var key = "student_ID";//表主键
var atrlist = "(student_ID,passwd,class_staying,student_name,student_introduction,student_email)";//表列明 格式(atr1,atr2,atr3,...)
var atrnum = 6;//表列数

class StudentDAO{//表名DAO
    constructor(){
    };
    getNewStudentId(result){
        baseDAO.getNewId(table,key,result);
    };
    createStudent(id,result){//id = new Array(),result = true/false
        this.getNewStudentId(id);
        setTimeout(function(){
            baseDAO.create(id,table,atrlist,atrnum,result);
        },DEALTIME)
    };
    updateStudent(id,atr,val,result){
        baseDAO.update(id,atr,val,table,key,result);
    };
    deleteStudent(id,result){
        baseDAO.delete(id,table,key,result);
    };
    //这个函数不用理会
    default_fn(val){
        return true;
    };
    //以下函数所有Student->对应表名
    inquireStudent(result,fn = this.default_fn){
        baseDAO.inquire(table,fn,result);
    };
};

//以下为测试代码 请把student改成对应表名 注意大小写
/*var student = new StudentDAO();
var id = new Array();
var result = new Array();
student.createStudent(id,result);
setTimeout(function(){
    console.log(id);
    console.log(result);
},100*2)*/

//student.getNewStudentId(id);
//student.createStudent(id,result);
//student.updateStudent("AD000001","student_email","853822587@qq.com",result);
//student.deleteStudent("AD000001",result);
//student.inquireStudent(result);
//这里不要忘记改
module.exports = StudentDAO;
