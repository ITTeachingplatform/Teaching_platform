const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const Apis = require('./api/Apis');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 后端api路由
app.use('/api', Apis);

// 监听端口
app.listen(3011);
console.log('success listen at port:3011......');