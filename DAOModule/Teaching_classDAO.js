'use strict';

var BaseDAO = require('./BaseDAO.js');
var baseDAO = new BaseDAO();

var table = "Teaching_class";
var key = "id";
var atrlist = "(id,teacher,course_belong,sysllabus)";
var atrnum = 4;

function Teaching_classDAO(){
    this.getNewTeaching_classId = function(){
        return baseDAO.getNewId(table,key);
    };
    this.createTeaching_class = function (id){
        return baseDAO.create(id,table,atrlist,artnum);
    };
    this.updateTeaching_class = function (id,atr,val){
        return baseDAO.update(id,atr,val,table);
    };
    this.deleteTeaching_class = function (id){
        return baseDAO.delete(id,table,key)
    };
    this.inquireTeaching_class = function(id,atr,val){
        return baseDAO.inquire(id,atr,val,table,key);
    };
    this.default_fn = function(result){
        return true;
    };
    this.inquireSomeTeaching_class = function(val,fn = default_fn){
        baseDAO.inquireSome(table,val,fn);
        var data = {};
        for(var i=0; i < val.length; i++) {
            if(fn(val[i])==false)
                continue;
            data[val[i].id] = {
                teacher_id:val[i].teacher_id,
                course_belong:val[i].course_belong,
                sysllabus:val[i].sysllabus
            }
        }
        val.jsonp(data);
    };
};

module.exports = Teaching_classDAO;