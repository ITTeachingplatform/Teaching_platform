'use strict';

var tableMapId = {
    'admin':'AD',
    'student':'ST',
    'teacher':'TE',
    'course':'CO',
    'teacher_class':'TC',
    //'teacher_class_list':'TL',
    'class':'CL',
    'faculty':'FA',
    'major':'MA',
    'bank':'BA',
    'course_announcement':'CA',
    'system_announcement':'SA',
    'post':'PO',
    'reply':'RE',
    'homework':'HO',
    //'homework_scores':'HS',
    'resource':'RE'
}

var database = require('./database');
var async = require('async');
var connection = database.getConnection();

var content;
class BaseDAO{
    constructor(){
    };
    getNewId(table,key,r){//not homework_scores`teacher_class_list
        var query ="select * from "+ table;
        async.series({
            one:function(done){
                connection.query(query, function(err, rows, fields) {
                    var data = {}
                    for(var i=0; i < rows.length; i++) {
                        data[i]={
                            a:+rows[i].admin_ID.substring(2,8)
                        }
                    }
                    var num = 1;
                    for (var key of Object.keys(data).sort()) {
                        if(data[key].a == num){
                            //console.log(num);
                            num += 1;
                            continue;
                        }
                        else{
                            break;
                        }
                    }
                    var id = tableMapId[table];
                    for(var k = 100000 ;num < k-1;k = k/10)
                        id += '0';
                    id = id + num;
                    content = id;
                    done(null, content)
                });
            }
        },
            function (error, result) {
                r.push(content);
            });
    };
    create(id,table,atrlist,artnum,r){//not homework_scores`teacher_class_list
        var query = "insert into "+table+atrlist+"values";
        var value = "(\'"+id+"\'";
        for(var i=0;i<artnum-1;i++)
            value += ",null";
        value += ")";
        query += value;
        async.series({
            one:function(done){
                connection.query(query, function(err, rows, fields) {
                    if (err) {
                        r.push(false);
                        throw err;
                    }
                    done(null, content);
                });
            }
        },
            function (error, result) {
                r.push(true);
            });
    };
    create(table,atrlist,artnum,id1,id2,r){
    //homework_scores (id1,id2,id3,null) ->(student_submit_homework,homework_ID_score,s_homework_content,s_homework_score)
    //教学班ID、学生ID、作业ID、
    //teacher_class_list (id1,id2) ->(t_class_ID_list,student_ID_list)
        var query = "insert into "+table+atrlist+"values";
        if(table == 'homework_scores'){
            var value = "(\'"+id1+"\',"+"\'"+id2+"\'";
            value += ",null,null)";
            query += value;
        }
        else if(table == 'teacher_class_list'){
            var value = "(\'"+id1+"\',"+"\'"+id2+"\')";
            query += value;
        }
        async.series({
            one:function(done){
                connection.query(query, function(err, rows, fields) {
                    if (err) {
                        r.push(false);
                        throw err;
                    }
                    done(null, content);
                });
            }
        },
            function (error, result) {
                r.push(true);
            });
    };
    update(id,atr,val,table,key,r){
        var query = "update "+table+" set "+atr+"=\'"+val+"\' where "+key+"=\'"+id+"\'";
        async.series({
            one:function(done){
                connection.query(query, function(err, rows, fields) {
                    if (err) {
                        //r.push(0);
                        r.push(false);
                        throw err;
                    }
                    done(null, content);
                });
            }
        },
            function (error, result) {
                //r.push(0);
                r.push(true);
            });
    };
    delete(id,table,key,r){
        var query = "delete from "+table+" where "+key+" = \""+id+"\"";
        async.series({
            one:function(done){
                connection.query(query, function(err, rows, fields) {
                    if (err) {
                        r.push(false);
                        throw err;
                    }
                    done(null, content);
                });
            }
        },
            function (error, result) {
                r.push(true);
            });
    };
    inquire(table,fn,r){
        var query = "select * from "+table;
        async.series({
            one:function(done){
                connection.query(query, function(err, rows, fields) {
                    if (err) 
                        throw err;
                    var data = {};
                    var temp = '';
                    for(var i=0; i < rows.length; i++) {
                        if(fn(rows[i])==false)
                            continue;
                        switch(table){
                            case 'admin':data[i]={
                                'admin_ID':rows[i].admin_ID,
                                'passwd':rows[i].passwd,
                                'admin_email':rows[i].admin_email
                            }
                            break;
                            case 'student':data[i]={
                                'student_ID':rows[i].student_ID,
                                'passwd':rows[i].passwd,
                                'student_name':rows[i].student_name,
                                'class_staying':rows[i].class_staying,
                                'student_introduction':rows[i].student_introduction,
                                'student_eamil':rows[i].student_email
                            }
                            break;
                            case 'teacher':data[i]={
                                'teacher_ID':rows[i].teacher_ID,
                                'passwd':rows[i].passwd,
                                'teacher_name':rows[i].teacher_name,
                                'faculty_working':rows[i].faculty_working,
                                'teacher_introduction':rows[i].teacher_introduction,
                                'teacher_email':rows[i].teacher_email
                            }
                            break;
                            case 'course':data[i]={
                                'course_ID':rows[i].course_ID,
                                'course_name':rows[i].course_name,
                                'faculty_belong':rows[i].faculty_belong,
                                'course_introduction':rows[i].course_introduction
                            }
                            break;
                            case'teacher_class':data[i]={
                                't_class_ID':rows[i].t_class_ID,
                                'teacher_ID_t_class':rows[i].teacher_ID_t_class,
                                'course_ID_t_class':rows[i].course_ID_t_class,
                                'sysllabus':rows[i].sysllabus
                            }
                            break;
                            case'teacher_class_list':data[i]={
                                't_class_ID_list':rows[i].t_class_ID_list,
                                'student_ID_list':rows[i].student_ID_list
                            }
                            break;
                            case 'class':data[i]={
                                'class_ID':rows[i].class_ID,
                                'major_belong':rows[i].major_belong,
                                'class_name':rows[i].class_name,
                                'class_introduction':rows[i].class_introduction,
                                'session_num':rows[i].session_num
                            }
                            break;
                            case 'faculty':data[i]={
                                'faculty_ID':rows[i].faculty_ID,
                                'faculty_name':rows[i].faculty_name,
                                'faculty_introduction':rows[i].faculty_introduction
                            }
                            break;
                            case 'major':data[i]={
                                'major_ID':rows[i].major_ID,
                                'faculty_belong':rows[i].faculty_belong,
                                'major_name':rows[i].major_name,
                                'major_introduction':rows[i].major_introduction
                            }
                            break;
                            case 'bank':data[i]={
                                'bank_ID':rows[i].bank_ID,
                                'bank_name':rows[i].bank_name,
                                'bank_size':rows[i].bank_size,
                                'bank_up_date':rows[i].bank_up_date,
                                'bank_download_num':rows[i].bank_download_num,
                                'bank_path':rows[i].bank_path,
                                'bank_t_class_belong':rows[i].bank_t_class_belong
                            }
                            break;
                            case 'course_announcement':data[i]={
                                'cou_announcement_ID':rows[i].cou_announcement_ID,
                                'cou_ann_publisher':rows[i].cou_ann_publisher,
                                'cou_ann_course':rows[i].cou_ann_course,
                                'announcement_label':rows[i].announcement_label,
                                'announcement_title':rows[i].announcement_title,
                                'announcement_content':rows[i].announcement_content,
                                'announcement_date':rows[i].announcement_date
                            }
                            break;
                            case 'system_announcement':data[i]={
                                'sys_announcement_ID':rows[i].sys_announcement_ID,
                                'sys_ann_publisher':rows[i].sys_ann_publisher,
                                'sys_ann_path':rows[i].sys_ann_path,
                                'announcement_label':rows[i].announcement_label,
                                'announcement_title':rows[i].announcement_title,
                                'announcement_content':rows[i].announcement_content,
                                'announcement_date':rows[i].announcement_date
                            }
                            break;
                            case 'post':data[i]={
                                'post_ID':rows[i].post_ID,
                                'post_title':rows[i].post_title,
                                'post_content':rows[i].post_content,
                                'post_label':rows[i].post_label,
                                'post_date':rows[i].post_date,
                                'post_starter':rows[i].post_starter,
                                'post_reply_num':rows[i].post_reply_num,
                                'post_browse_num':rows[i].post_browse_num,
                                'post_support_num':rows[i].post_support_num,
                                'post_last_reviser':rows[i].post_last_reviser
                            }
                            break;
                            case 'reply':data[i]={
                                'reply_ID':rows[i].reply_ID,
                                'reply_belong':rows[i].reply_belong,
                                'reply_content':rows[i].reply_content,
                                'reply_sender':rows[i].reply_sender,
                                'reply_time':rows[i].reply_time
                            }
                            break;
                            case 'homework':data[i]={
                                'homework_ID':rows[i].homework_ID,
                                'homework_name':rows[i].homework_name,
                                'homework_up_date':rows[i].homework_up_date,
                                'homework_down_date':rows[i].homework_down_date,
                                'homework_total_num':rows[i].homework_total_num,
                                'homework_submit_num':rows[i].homework_submit_num,
                                'homework_content':rows[i].homework_content,
                                'homework_t_class_belong':rows[i].homework_t_class_belong
                            }
                            break;
                            case 'homework_scores':data[i]={
                                't_class_in_homework':rows[i].t_class_in_homework,
                                'student_submit_homework':rows[i].student_submit_homework,
                                'homework_ID_score':rows[i].homework_ID_score,
                                's_homework_content':rows[i].s_homework_content
                            }
                            break;
                            case 'resource':data[i]={
                                'resource_ID':rows[i].resource_ID,
                                'resource_name':rows[i].resource_name,
                                'resource_size':rows[i].resource_size,
                                'resource_downloads':rows[i].resource_downloads,
                                'resource_date':rows[i].resource_date,
                                'resource_path':rows[i].resource_path,
                                'resource_t_class_belong':rows[i].resource_t_class_belong
                            }
                            break;
                        }
                    }
                    content = data;
                    done(null, content);
                });
            }
        },
            function (error, result) {
                r.push(content);
                r.push(true);
            });
    };
    inquireD(sql,r){
        var query = sql;
        async.series({
            one:function(done){
                connection.query(query, function(err, rows, fields) {
                    if (err) {
                        r.push(0);
                        r.push(false);
                        throw err;
                    }
                    content = rows;
                    done(null, content);
                });
            }
        },
            function (error, result) {
                r.push(content);
                r.push(true);
            });
    };
  };

module.exports = BaseDAO;