'use strict';

var AdminDAO = require('./AdminDAO.js');
var admin = new AdminDAO();
var StudentDAO = require('./StudentDAO.js');
var student = new StudentDAO();
var TeacherDAO = require('./TeacherDAO.js');
var teacher = new TeacherDAO();
var CourseDAO = require('./CourseDAO.js');
var course = new CourseDAO();
var Teaching_classDAO = require('./Teaching_classDAO.js');
var teaching_class = new Teaching_classDAO();
var ClassDAO = require('./ClassDAO.js');
var _class_ = new ClassDAO();
var FacultyDAO = require('./FacultyDAO.js');
var faculty = new FacultyDAO();
var MajorDAO = require('./MajorDAO.js');
var major = new MajorDAO();
var BankDAO = require('./BankDAO.js');
var bank = new BankDAO();
var Course_announcementDAO = require('./Course_announcementDAO');
var course_announcement = new Course_announcementDAO();
var System_announcementDAO = require('./System_announcementDAO');
var system_announcement = new System_announcementDAO();
var PostDAO = require('./PostDAO.js');
var post = new PostDAO();
var ReplyDAO = require('./ReplyDAO.js');
var reply = new ReplyDAO();
var HomeworkDAO = require('./HomeworkDAO.js');
var homework = new HomeworkDAO();
var Homework_scoresDAO = require('./Homework_scoresDAO.js');
var homework_scores = new Homework_scoresDAO();
var ResourceDAO = require('./ResourceDAO.js');
var resource = new ResourceDAO();

function TeacherService(self_id,other = ''){
    this.self_id = self_id;
    this.other = other;
    this.default_fn = function(result){
        return true;
    };
//admin
    /*createAdmin(){
        id = getNewId("Admin");
        AdminDAO.createAdmin(id);
    }*/
    this.updateAdmin = function(id,atr,val){
        return admin.updateAdmin(id,atr,val);
    };
    /*this.deleteAdmin = function(id){
        return admin.deleteAdmin(id);
    };*/
    this.inquireAdmin = function(id,atr,val){
        return admin.inquireAdmin(id,atr,val);
    };
    this.inquireSomeAdmin = function(val,fn = default_fn){
        return admin.inquireSomeAdmin(val,fn);
    }
    //student
    this.createStudent = function(){
        var id = student.getNewStudentId();
        return student.createStudent(id);
    };
    this.updateStudent = function(id,atr,val){
        return student.updateStudent(id,atr,val);
    };
    this.deleteStudent = function(id){
        return student.deleteStudent(id);
    };
    this.inquireStudent = function(id,atr,val){
        return student.inquireStudent(id,atr,val);
    };
    this.inquireSomeStudent = function(val,fn = default_fn){
        return student.inquireSomeStudent(val,fn);
    }
    //teacher
    this.createTeacher = function(){
        var id = teacher.getNewTeacherId();
        return teacher.createTeacher(id);
    };
    this.updateTeacher = function(id,atr,val){
        return teacher.updateTeacher(id,atr,val);
    };
    this.deleteTeacher = function(id){
        return teacher.deleteTeacher(id);
    };
    this.inquireTeacher = function(id,atr,val){
        return teacher.inquireTeacher(id,atr,val);
    };
    this.inquireSomeTeacher = function(val,fn = default_fn){
        return teacher.inquireSomeTeacher(val,fn);
    }
    //course
    this.createCourse = function(){
        var id = course.getNewCourseId();
        return course.createCourse(id);
    };
    this.updateCourse = function(id,atr,val){
        return course.updateCourse(id,atr,val);
    };
    this.deleteCourse = function(id){
        return course.deleteCourse(id);
    };
    this.inquireCourse = function(id,atr,val){
        return course.inquireCourse(id,atr,val);
    };
    this.inquireSomeCourse = function(val,fn = default_fn){
        return course.inquireSomeCourse(val,fn);
    }
    //Teaching_class
    this.createTeaching_class = function(){
        var id = teaching_class.getNewTeaching_classId();
        return teaching_class.createTeaching_class(id);
    };
    this.updateTeaching_class = function(id,atr,val){
        return teaching_class.updateTeaching_class(id,atr,val);
    };
    this.deleteTeaching_class = function(id){
        return teaching_class.deleteTeaching_class(id);
    };
    this.inquireTeaching_class = function(id,atr,val){
        return teaching_class.inquireTeaching_class(id,atr,val);
    };
    this.inquireSomeTeaching_class = function(val,fn = default_fn){
        return teaching_class.inquireSomeTeaching_class(val,fn);
    }
    //Class
    this.createClass = function(){
        var id = _class_.getNewClassId();
        return _class_.createClass(id);
    };
    this.updateClass = function(id,atr,val){
        return _class_.updateClass(id,atr,val);
    };
    this.deleteClass = function(id){
        return _class_.deleteClass(id);
    };
    this.inquireClass = function(id,atr,val){
        return _class_.inquireClass(id,atr,val);
    };
    this.inquireSomeClass = function(val,fn = default_fn){
        return _class_.inquireSomeClass(val,fn);
    }
    //Faculty
    this.createFaculty = function(){
        var id = faculty.getNewFacultyId();
        return faculty.createFaculty(id);
    };
    this.updateFaculty = function(id,atr,val){
        return faculty.updateFaculty(id,atr,val);
    };
    this.deleteFaculty = function(id){
        return faculty.deleteFaculty(id);
    };
    this.inquireFaculty = function(id,atr,val){
        return faculty.inquireFaculty(id,atr,val);
    };
    this.inquireSomeFaculty = function(val,fn = default_fn){
        return faculty.inquireSomeFaculty(val,fn);
    }
    //Major
    this.createMajor = function(){
        var id = major.getNewMajorId();
        return major.createMajor(id);
    };
    this.updateMajor = function(id,atr,val){
        return major.updateMajor(id,atr,val);
    };
    this.deleteMajor = function(id){
        return major.deleteMajor(id);
    };
    this.inquireMajor = function(id,atr,val){
        return major.inquireMajor(id,atr,val);
    };
    this.inquireSomeMajor = function(val,fn = default_fn){
        return major.inquireSomeMajor(val,fn);
    }
    //Bank
    this.createBank = function(){
        var id = bank.getNewBankId();
        return bank.createBank(id);
    };
    this.updateBank = function(id,atr,val){
        return bank.updateBank(id,atr,val);
    };
    this.deleteBank = function(id){
        return bank.deleteBank(id);
    };
    this.inquireBank = function(id,atr,val){
        return bank.inquireBank(id,atr,val);
    };
    this.inquireSomeBank = function(val,fn = default_fn){
        return bank.inquireSomeBank(val,fn);
    }
    //Course_announcement
    /*this.createCourse_announcement = function(){
        var id =Course_announcement.getNewCourse_announcementId();
        return course_announcement.createCourse_announcement(id);
    };
    this.updateCourse_announcement = function(id,atr,val){
        return course_announcement.updateCourse_announcement(id,atr,val);
    };
    this.deleteCourse_announcement = function(id){
        return course_announcement.deleteCourse_announcement(id);
    };*/
    this.inquireCourse_announcement = function(id,atr,val){
        return course_announcement.inquireCourse_announcement(id,atr,val);
    };
    this.inquireSomeCourse_announcement = function(val,fn = default_fn){
        return course_announcement.inquireSomeCourse_announcement(val,fn);
    }
    //System_announcement
    this.createSystem_announcement = function(){
        var id = system_announcement.getNewSystem_announcementId();
        return system_announcement.createSystem_announcement(id);
    };
    this.updateSystem_announcement = function(id,atr,val){
        return system_announcement.updateSystem_announcement(id,atr,val);
    };
    this.deleteSystem_announcement = function(id){
        return system_announcement.deleteSystem_announcement(id);
    };
    this.inquireSystem_announcement = function(id,atr,val){
        return system_announcement.inquireSystem_announcement(id,atr,val);
    };
    this.inquireSomeSystem_announcement = function(val,fn = default_fn){
        return system_announcement.inquireSomeSystem_announcement(val,fn);
    }
    //Post
    this.createPost = function(){
        var id = post.getNewPostId();
        return post.createPost(id);
    };
    this.updatePost = function(id,atr,val){
        return post.updatePost(id,atr,val);
    };
    this.deletePost = function(id){
        return post.deletePost(id);
    };
    this.inquirePost = function(id,atr,val){
        return post.inquirePost(id,atr,val);
    };
    this.inquireSomePost = function(val,fn = default_fn){
        return post.inquireSomePost(val,fn);
    }
    //Reply
    this.createReply = function(){
        var id = reply.getNewReplyId();
        return reply.createReply(id);
    };
    this.updateReply = function(id,atr,val){
        return reply.updateReply(id,atr,val);
    };
    this.deleteReply = function(id){
        return reply.deleteReply(id);
    };
    this.inquireReply = function(id,atr,val){
        return reply.inquireReply(id,atr,val);
    };
    this.inquireSomeReply = function(val,fn = default_fn){
        return reply.inquireSomeReply(val,fn);
    }
    //Homework
    /*this.createHomework = function(){
        var id =Homework.getNewHomeworkId();
         return homework.createHomework(id);
    };
    this.updateHomework = function(id,atr,val){
         return homework.updateHomework(id,atr,val);
    };
    this.deleteHomework = function(id){
         return homework.deleteHomework(id);
    };*/
    this.inquireHomework = function(id,atr,val){
        return homework.inquireHomework(id,atr,val);
    };
    this.inquireSomeHomework = function(val,fn = default_fn){
        return homework.inquireSomeHomework(val,fn);
    }
    //Homework_scores
    /*this.createHomework_scores = function(){
        var id =Homework_scores.getNewHomework_scoresId();
         return homework_scores.createHomework_scores(id);
    };
    this.updateHomework_scores = function(id,atr,val){
         return homework_scores.updateHomework_scores(id,atr,val);
    };
    this.deleteHomework_scores = function(id){
         return homework_scores.deleteHomework_scores(id);
    };*/
    this.inquireHomework_scores = function(id,atr,val){
        return homework_scores.inquireHomework_scores(id,atr,val);
    };
    this.inquireSomeHomework_scores = function(val,fn = default_fn){
        return homework_scores.inquireSomeHomework_scores(val,fn);
    }
    //Resource
    this.createResource = function(){
        var id = resource.getNewResourceId();
        return resource.createResource(id);
    };
    this.updateResource = function(id,atr,val){
        return resource.updateResource(id,atr,val);
    };
    this.deleteResource = function(id){
        return resource.deleteResource(id);
    };
    this.inquireResource = function(id,atr,val){
        return resource.inquireResource(id,atr,val);
    };
    this.inquireSomeResource = function(val,fn = default_fn){
        return resource.inquireSomeResource(val,fn);
    }
    
}

module.exports = TeacherService;