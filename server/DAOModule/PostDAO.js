'use strict';

var BaseDAO = require('./BaseDAO.js');
var baseDAO = new BaseDAO();

//所有注意大小写
var table = "post";//表名
var key = "post_ID";//表主键
var atrlist = "(post_ID,post_label,post_title,post_content,post_date,post_starter,post_reply_num,post_browse_num,post_support_num,post_last_reviser)";//表列明 格式(atr1,atr2,atr3,...)
var atrnum = 10;//表列数

class PostDAO{//表名DAO
    constructor(){
    };
    //以下函数所有Post->对应表名
    getNewPostId(result){
        baseDAO.getNewId(table,key,result);
    };
    createPost(id,result){//id = new Array(),result = true/false
        this.getNewPostId(id);
        setTimeout(function(){
            baseDAO.create(id,table,atrlist,atrnum,result);
        },100)
    };
    updatePost(id,atr,val,result){
        baseDAO.update(id,atr,val,table,key,result);
    };
    deletePost(id,result){
        baseDAO.delete(id,table,key,result);
    };
    //这个函数不用理会
    default_fn(val){
        return true;
    };
    //以下函数所有Post->对应表名
    inquirePost(result,fn = this.default_fn){
        baseDAO.inquire(table,fn,result);
    };
};

//以下为测试代码 请把post改成对应表名 注意大小写
//var post = new PostDAO();
//var id = new Array();
//var result = new Array();
//post.getNewPostId(id);
//post.createPost(id,result);
//post.updatePost("AD000001","post_email","853822587@qq.com",result);
//post.deletePost("AD000001",result);
//post.inquirePost(result);
//setTimeout(function(){
//    console.log(result);
//},100)

//这里不要忘记改
module.exports = PostDAO;
