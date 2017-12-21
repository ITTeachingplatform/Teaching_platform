'use strict';

var BaseDAO = require('./BaseDAO.js');
var baseDAO = new BaseDAO();

//所有注意大小写
var table = "bank";//表名
var key = "bank_ID";//表主键
var atrlist = "(bank_ID,bank_name,bank_size,bank_up_date,bank_download_num,bank_path,bank_t_class_belong)";//表列明 格式(atr1,atr2,atr3,...)
var atrnum = 7;//表列数

class BankDAO{//表名DAO
    constructor(){
    };
    //以下函数所有Bank->对应表名
    getNewBankId(result){
        baseDAO.getNewId(table,key,result);
    };
    createBank(id,result){//id = new Array(),result = true/false
        this.getNewBankId(id);
        setTimeout(function(){
            baseDAO.create(id,table,atrlist,atrnum,result);
        },100)
    };
    updateBank(id,atr,val,result){
        baseDAO.update(id,atr,val,table,key,result);
    };
    deleteBank(id,result){
        baseDAO.delete(id,table,key,result);
    };
    //这个函数不用理会
    default_fn(val){
        return true;
    };
    //以下函数所有Bank->对应表名
    inquireBank(result,fn = this.default_fn){
        baseDAO.inquire(table,fn,result);
    };
};

//以下为测试代码 请把Bank改成对应表名 注意大小写
//var bank = new BankDAO();
//var id = new Array();
//var result = new Array();
//bank.getNewBankId(id);
//bank.createBank(id,result);
//bank.updateBank("AD000001","Bank_email","853822587@qq.com",result);
//bank.deleteBank("AD000001",result);
//bank.inquireBank(result);
//setTimeout(function(){
//    console.log(result);
//},100)

//这里不要忘记改
module.exports = BankDAO;
