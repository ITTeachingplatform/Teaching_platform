'use strict';

var BaseDAO = require('./BaseDAO.js');
var baseDAO = new BaseDAO();

//所有注意大小写
var table = "major";//表名
var key = "major_ID";//表主键
var atrlist = "(major_ID,faculty_belong,major_name,major_introduction)";//表列明 格式(atr1,atr2,atr3,...)
var atrnum = 4;//表列数

class MajorDAO{//表名DAO
    constructor(){
    };
    //以下函数所有Major->对应表名
    getNewMajorId(result){
        baseDAO.getNewId(table,key,result);
    };
    createMajor(id,result){//id = new Array(),result = true/false
        this.getNewMajorId(id);
        setTimeout(function(){
            baseDAO.create(id,table,atrlist,atrnum,result);
        },100)
    };
    updateMajor(id,atr,val,result){
        baseDAO.update(id,atr,val,table,key,result);
    };
    deleteMajor(id,result){
        baseDAO.delete(id,table,key,result);
    };
    //这个函数不用理会
    default_fn(val){
        return true;
    };
    //以下函数所有Major->对应表名
    inquireMajor(result,fn = this.default_fn){
        baseDAO.inquire(table,fn,result);
    };
};

//以下为测试代码 请把major改成对应表名 注意大小写
//var major = new MajorDAO();
//var id = new Array();
//var result = new Array();
//major.getNewMajorId(id);
//major.createMajor(id,result);
//major.updateMajor("AD000001","major_email","853822587@qq.com",result);
//major.deleteMajor("AD000001",result);
//major.inquireMajor(result);
//setTimeout(function(){
//    console.log(result);
//},100)

//这里不要忘记改
module.exports = MajorDAO;
