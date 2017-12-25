'use strict';

var BaseDAO = require('./BaseDAO.js');
var baseDAO = new BaseDAO();

//所有注意大小写
var table = "resource";//表名
var key = "resource_ID";//表主键
var atrlist = "(resource_ID,resource_name,resource_size,resource_downloads,resource_date,resource_path,resource_t_class_belong)";//表列明 格式(atr1,atr2,atr3,...)
var atrnum = 7;//表列数

class ResourceDAO{//表名DAO
    constructor(){
    };
    //以下函数所有Resource->对应表名
    getNewResourceId(result){
        baseDAO.getNewId(table,key,result);
    };
    createResource(id,result){//id = new Array(),result = true/false
        this.getNewResourceId(id);
        setTimeout(function(){
            baseDAO.create(id,table,atrlist,atrnum,result);
        },100)
    };
    updateResource(id,atr,val,result){
        baseDAO.update(id,atr,val,table,key,result);
    };
    deleteResource(id,result){
        baseDAO.delete(id,table,key,result);
    };
    //这个函数不用理会
    default_fn(val){
        return true;
    };
    //以下函数所有Resource->对应表名
    inquireResource(result,fn = this.default_fn){
        baseDAO.inquire(table,fn,result);
    };
};

//以下为测试代码 请把resource改成对应表名 注意大小写
//var resource = new ResourceDAO();
//var id = new Array();
//var result = new Array();
//resource.getNewResourceId(id);
//resource.createResource(id,result);
//resource.updateResource("AD000001","resource_email","853822587@qq.com",result);
//resource.deleteResource("AD000001",result);
//resource.inquireResource(result);
//setTimeout(function(){
//    console.log(result);
//},100)

//这里不要忘记改
module.exports = ResourceDAO;
