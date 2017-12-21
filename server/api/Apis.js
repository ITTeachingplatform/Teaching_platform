var Admin = require('../ServiceModule/AdminService');
var express = require('express')
var router = express.Router();
// 增加管理员登录接口
router.post('/check', (req, res) => {
    console.log('Checking');
    var params = req.body;
    var AdminService = new Admin();
    var result = new Array();
    AdminService.login_admin(params.admin_id,params.admin_password,result);
    console.log(params.admin_password);
    setTimeout(function(){
        res.send(result);
    }, 1000)
});

router.post('/get',  (req, res) => {
    var params = req.body;
    if(params.type == 'sys_announce'){
        console.log('Getting announcement');
    var AdminService = new Admin();
    var result = new Array();
    AdminService.load_numLatest_sysannouncement(result);
    setTimeout(function(){
        res.send(result);
    }, 1000)
}
else if(params.type == 'student_list'){
    console.log('Getting student_list');
    var AdminService = new Admin();
    var result = new Array();
    AdminService.find_student_by(result);
    setTimeout(function(){
        console.log(result);
        res.send(result);
    }, 1000)
}
else if(params.type == 'discuss_list'){
    console.log('Getting discuss_list');
    var AdminService = new Admin();
    var result = new Array();
    AdminService.load_numLatest_post(result);
    setTimeout(function(){
        console.log(result);
        res.send(result);
    }, 1000)
}
});



module.exports = router;