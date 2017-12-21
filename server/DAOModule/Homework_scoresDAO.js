'use strict';

var BaseDAO = require('./BaseDAO.js');
var baseDAO = new BaseDAO();

//所有注意大小写
var table = "homework_scores";//表名
var key = "";//表主键
var atrlist = "(student_submit_homework,homework_ID_score,s_homework_content,s_homework_score)";//表列明 格式(atr1,atr2,atr3,...)
var atrnum = 4;//表列数

class Homework_scoresDAO{//表名DAO
    constructor(){
    };
    createHomework_scores(student_submit_homework,homework_ID_score,result){//id = new Array(),result = true/false
        baseDAO.create(table,atrlist,atrnum,student_submit_homework,homework_ID_score,result);
    };
    updateHomework_scores(id,atr,val,result){
        baseDAO.update(id,atr,val,table,key,result);
    };
    deleteHomework_scores(id,result){
        baseDAO.delete(id,table,key,result);
    };
    //这个函数不用理会
    default_fn(val){
        return true;
    };
    //以下函数所有Homework_scores->对应表名
    inquireHomework_scores(result,fn = this.default_fn){
        baseDAO.inquire(table,fn,result);
    };
};

//以下为测试代码 请把homework_scores改成对应表名 注意大小写
//var homework_scores = new Homework_scoresDAO();
//var id = new Array();
//var result = new Array();
//homework_scores.getNewHomework_scoresId(id);
//homework_scores.createHomework_scores(id,result);
//homework_scores.updateHomework_scores("AD000001","homework_scores_email","853822587@qq.com",result);
//homework_scores.deleteHomework_scores("AD000001",result);
//homework_scores.inquireHomework_scores(result);
//setTimeout(function(){
//    console.log(result);
//},100)

//这里不要忘记改
module.exports = Homework_scoresDAO;
