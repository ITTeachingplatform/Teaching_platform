'use strict';

var BaseDAO = require('./BaseDAO.js');
var baseDAO = new BaseDAO();

//所有注意大小写
var table = "homework";//表名
var key = "homework_ID";//表主键
var atrlist = "(homework_ID,homework_name,homework_up_date,homework_down_date,homework_total_num,homework_submit_num,homework_content,homework_t_class_belong)";//表列明 格式(atr1,atr2,atr3,...)
var atrnum = 8;//表列数

class HomeworkDAO{//表名DAO
    constructor(){
    };
    //以下函数所有Homework->对应表名
    getNewHomeworkId(result){
        baseDAO.getNewId(table,key,result);
    };
    createHomework(id,result){//id = new Array(),result = true/false
        this.getNewHomeworkId(id);
        setTimeout(function(){
            baseDAO.create(id,table,atrlist,atrnum,result);
        },100)
    };
    updateHomework(id,atr,val,result){
        baseDAO.update(id,atr,val,table,key,result);
    };
    deleteHomework(id,result){
        baseDAO.delete(id,table,key,result);
    };
    //这个函数不用理会
    default_fn(val){
        return true;
    };
    //以下函数所有Homework->对应表名
    inquireHomework(result,fn = this.default_fn){
        baseDAO.inquire(table,fn,result);
    };
};

//以下为测试代码 请把homework改成对应表名 注意大小写
//var homework = new HomeworkDAO();
//var id = new Array();
//var result = new Array();
//homework.getNewHomeworkId(id);
//homework.createHomework(id,result);
//homework.updateHomework("AD000001","homework_email","853822587@qq.com",result);
//homework.deleteHomework("AD000001",result);
//homework.inquireHomework(result);
//setTimeout(function(){
//    console.log(result);
//},100)

//这里不要忘记改
module.exports = HomeworkDAO;
