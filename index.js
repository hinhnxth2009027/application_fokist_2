var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose')
var user_router = require('./router/user_router')
var admin_router = require('./router/admin_router')
var login_router = require('./router/login_rourter')
var alert = require('alert')
var session = require('express-session')
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'somesecret',
    cookie:{maxAge:24*60*60*1000}
}))
mongoose.connect('mongodb+srv://admin:jv3g13830@cluster0.ia6pq.mongodb.net/kids-zone?retryWrites=true&w=majority')
app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(express.static('public'));
app.use('/profile',(req,res,next)=>{
    if (req.session.user===undefined){
        alert('Please login before proceeding')
    }if(req.session.user!==undefined) {
        next()
    }
})
app.use('/comment',(req,res,next)=>{
    if (req.session.user===undefined){
        alert('tính năng này yêu cầu đăng nhập nếu không có tài khoản vui lòng đăng kí tại trang packages mục login')
    }else {
        next()
    }
})
app.use('/admin',(req,res,next)=>{
    if (req.session.keyAdmin===undefined){
        res.render('admin_html/admin-login-none.ejs')
    }else {
        next()
    }
})
app.use('/admin',admin_router)
app.use(login_router)
app.use('/', user_router);

app.get('game/game1', function (req, resp){
    resp.render('game01/game01');
})

//post application listen post
app.listen(process.env.PORT||3690)