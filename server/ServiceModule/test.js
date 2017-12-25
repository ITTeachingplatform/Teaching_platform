var test = require("./AdminService.js")

var t = new test();

var RE = 0;
var TF = 1;
var result = new Array();
t.login_admin('AD000001','passwd',result);
setTimeout(function(){
        console.log(result[TF]);
        console.log(result[RE]);
    },1000);
