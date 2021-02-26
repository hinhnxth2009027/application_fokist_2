var feedback = require('../models/feedback_obj')






exports.list = function (req,res){
    feedback.find(function (err,data){
        res.render('html/contact.ejs',{data:data})
    })
}

exports.list_all = function (req,res){
    feedback.find(function (err,data){
        res.render('admin_html/list_all_contact.ejs',{data:data,admin_key: req.session.keyAdmin})
    })
}


exports.store = function (req, resp) {
    let obj = new feedback(req.body);
    obj.save(function (err, data) {
        resp.redirect('/contact');
    });
}