'use strict';

var BaseDAO = require('./BaseDAO.js');
var baseDAO = new BaseDAO();

//所有注意大小写
var table = "class";//表名
var key = "class_ID";//表主键
var atrlist = "(class_ID,major_belong,class_name,class_introduction,Session_num)";//表列明 格式(atr1,atr2,atr3,...)
var atrnum = 5;//表列数

class ClassDAO{//表名DAO
    constructor(){
    };
    //以下函数所有Class->对应表名
    getNewClassId(result){
        baseDAO.getNewId(table,key,result);
    };
    createClass(id,result){//id = new Array(),result = true/false
        this.getNewClassId(id);
        setTimeout(function(){
            baseDAO.create(id,table,atrlist,atrnum,result);
        },100)
    };
    updateClass(id,atr,val,result){
        baseDAO.update(id,atr,val,table,key,result);
    };
    deleteClass(id,result){
        baseDAO.delete(id,table,key,result);
    };
    //这个函数不用理会
    default_fn(val){
        return true;
    };
    //以下函数所有Class->对应表名
    inquireClass(result,fn = this.default_fn){
        baseDAO.inquire(table,fn,result);
    };
};

//以下为测试代码 请把class改成对应表名 注意大小写
//var class = new ClassDAO();
//var id = new Array();
//var result = new Array();
//class.getNewClassId(id);
//class.createClass(id,result);
//class.updateClass("AD000001","class_email","853822587@qq.com",result);
//class.deleteClass("AD000001",result);
//class.inquireClass(result);
//setTimeout(function(){
//    console.log(result);
//},100)

//这里不要忘记改
module.exports = ClassDAO;
