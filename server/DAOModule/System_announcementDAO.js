'use strict';

var BaseDAO = require('./BaseDAO.js');
var baseDAO = new BaseDAO();

//所有注意大小写
var table = "system_announcement";//表名
var key = "sys_announcement_ID";//表主键
var atrlist = "(sys_announcement_ID,announcement_label,announcement_title,announcement_content,announcement_date,sys_ann_publisher,sys_ann_path)";//表列明 格式(atr1,atr2,atr3,...)
var atrnum = 7;//表列数

class System_announcementDAO{//表名DAO
    constructor(){
    };
    //以下函数所有System_announcement->对应表名
    getNewSystem_announcementId(result){
        baseDAO.getNewId(table,key,result);
    };
    createSystem_announcement(id,result){//id = new Array(),result = true/false
        this.getNewSystem_announcementId(id);
        setTimeout(function(){
            baseDAO.create(id,table,atrlist,atrnum,result);
        },100)
    };
    updateSystem_announcement(id,atr,val,result){
        baseDAO.update(id,atr,val,table,key,result);
    };
    deleteSystem_announcement(id,result){
        baseDAO.delete(id,table,key,result);
    };
    //这个函数不用理会
    default_fn(val){
        return true;
    };
    //以下函数所有System_announcement->对应表名
    inquireSystem_announcement(result,fn = this.default_fn){
        baseDAO.inquire(table,fn,result);
    };
};

//以下为测试代码 请把system_announcement改成对应表名 注意大小写
//var system_announcement = new System_announcementDAO();
//var id = new Array();
//var result = new Array();
//system_announcement.getNewSystem_announcementId(id);
//system_announcement.createSystem_announcement(id,result);
//system_announcement.updateSystem_announcement("AD000001","system_announcement_email","853822587@qq.com",result);
//system_announcement.deleteSystem_announcement("AD000001",result);
//system_announcement.inquireSystem_announcement(result);
//setTimeout(function(){
//    console.log(result);
//},100)

//这里不要忘记改
module.exports = System_announcementDAO;
