'use strict';

var BaseDAO = require('./BaseDAO.js');
var baseDAO = new BaseDAO();

//所有注意大小写
var table = "admin";//表名
var key = "admin_ID";//表主键
var atrlist = "(admin_id,passwd,admin_email)";//表列明 格式(atr1,atr2,atr3,...)
var atrnum = 3;//表列数

class AdminDAO{//表名DAO
    constructor(){
    };
    //以下函数所有Admin->对应表名
    getNewAdminId(result){
        baseDAO.getNewId(table,key,result);
    };
    createAdmin(id,result){//id = new Array(),result = true/false
        this.getNewAdminId(id);
        setTimeout(function(){
            baseDAO.create(id,table,atrlist,atrnum,result);
        },100)
    };
    updateAdmin(id,atr,val,result){
        baseDAO.update(id,atr,val,table,key,result);
    };
    deleteAdmin(id,result){
        baseDAO.delete(id,table,key,result);
    };
    //这个函数不用理会
    default_fn(val){
        return true;
    };
    //以下函数所有Admin->对应表名
    inquireAdmin(result,fn = this.default_fn){
        baseDAO.inquire(table,fn,result);
    };
};

//以下为测试代码 请把admin改成对应表名 注意大小写
//var admin = new AdminDAO();
//var id = new Array();
//var result = new Array();
//admin.getNewAdminId(id);
//admin.createAdmin(id,result);
//admin.updateAdmin("AD000001","admin_email","853822587@qq.com",result);
//admin.deleteAdmin("AD000001",result);
//admin.inquireAdmin(result);
//setTimeout(function(){
//    console.log(result);
//},100)

//这里不要忘记改
module.exports = AdminDAO;