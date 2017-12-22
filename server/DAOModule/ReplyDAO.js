'use strict';

var BaseDAO = require('./BaseDAO.js');
var baseDAO = new BaseDAO();

//所有注意大小写
var table = "reply";//表名
var key = "reply_ID";//表主键
var atrlist = "(reply_ID,reply_belong,reply_content,reply_sender,reply_time)";//表列明 格式(atr1,atr2,atr3,...)
var atrnum = 5;//表列数

class ReplyDAO{//表名DAO
    constructor(){
    };
    //以下函数所有Reply->对应表名
    getNewReplyId(result){
        baseDAO.getNewId(table,key,result);
    };
    createReply(id,result){//id = new Array(),result = true/false
        this.getNewReplyId(id);
        setTimeout(function(){
            baseDAO.create(id,table,atrlist,atrnum,result);
        },100)
    };
    updateReply(id,atr,val,result){
        baseDAO.update(id,atr,val,table,key,result);
    };
    deleteReply(id,result){
        baseDAO.delete(id,table,key,result);
    };
    //这个函数不用理会
    default_fn(val){
        return true;
    };
    //以下函数所有Reply->对应表名
    inquireReply(result,fn = this.default_fn){
        baseDAO.inquire(table,fn,result);
    };
};

//以下为测试代码 请把reply改成对应表名 注意大小写
//var reply = new ReplyDAO();
//var id = new Array();
//var result = new Array();
//reply.getNewReplyId(id);
//reply.createReply(id,result);
//reply.updateReply("AD000001","reply_email","853822587@qq.com",result);
//reply.deleteReply("AD000001",result);
//reply.inquireReply(result);
//setTimeout(function(){
//    console.log(result);
//},100)

//这里不要忘记改
module.exports = ReplyDAO;
