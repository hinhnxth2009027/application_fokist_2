var admin_event = require('../models/addmin_event_obj')
var admin_account = require('../models/admin_account')
var bam = require('md5')
var alert = require('alert')
var new_course = require('../models/course')
var teacher = require('../models/teacher_obj')
var registraction = require('../models/registraction_obj')
var study = require('../models/study_obj')


var course_learn_to_count = require('../models/models_course/learn_to_count_obj')
var course_letters_andcocabulary = require('../models/models_course/letters_and_vocabulary')
var course_animals = require('../models/models_course/animals_obj')
var course_vegetable = require('../models/models_course/vegetable_obj')
var course_color = require('../models/models_course/color_obj')

exports.list = function (req, res) {
    admin_event.find(function (err, data) {
        if (err) {
            res.send('<h1>lỗi không sác định</h1>')
        }
        res.render('admin_html/table_event.ejs', {data: data, admin_key: req.session.keyAdmin})
    })
}
// exports.delete = function (req, resp) {
//     admin_event.findByIdAndDelete(req.params.id, req.body, function (err, data) {
//         resp.redirect('/admin/show_event');
//     })
// }
exports.edit = function (req, resp) {
    admin_event.findById(req.params.id, function (err, data) {
        resp.render('admin_html/update_event.ejs', {data: data, admin_key: req.session.keyAdmin});
    })
}
exports.show = function (req, resp) {
    admin_event.findById(req.params.id, function (err, data) {
        resp.render('admin_html/show_detail.ejs', {data: data, admin_key: req.session.keyAdmin});
    })
}
exports.update = function (req, resp) {
    admin_event.findByIdAndUpdate(req.params.id, req.body, function (err, data) {
        resp.redirect('/admin/show_event');
    })
}
exports.delete = function (req, resp) {
    let updateInfor = {
        status: -1
    }
    admin_event.findByIdAndUpdate(req.params.id, updateInfor, function (err, data) {
        resp.redirect('/admin/show_event');
    })
}


exports.saves = function (req, res) {
    var obj = new admin_event(req.body);
    obj.save(function (err, data) {
        console.log(data)
        res.redirect('/admin/show_event')
    })
}


exports.create_event = function (req, res) {
    res.render('admin_html/form_event.ejs', {admin_key: req.session.keyAdmin})
}
exports.adminHome = async (req, res) => {
    await res.render('admin_html/admin_home.ejs', {admin_key: req.session.keyAdmin})
}
exports.admin_logout = async (req, res) => {
    req.session.keyAdmin = undefined
    res.redirect('/admin')
}
exports.adminlogin = async (req, res) => {
    try {
        var keylogin = await admin_account.findOne({admin_email: req.body.admin_email})
        if (keylogin === null) {

        }
        if (bam(req.body.password_email + keylogin.salt) === keylogin.password) {
            req.session.keyAdmin = keylogin
            res.redirect('/admin')
            alert(`Admin ${keylogin.admin_name} đã đăng nhập thành công`)
        } else {
            alert(`sai mật khẩu admin`)
        }
    } catch (err) {
        alert(`sai mật khẩu admin`)
    }
}


exports.create_account = async (req, res) => {
    try {
        var obj = new admin_account(req.body)
        var salt = Math.random().toString(36).substring(2);
        obj.admin_avatar = 'https://clstrade.cls.vn/Content/Templates/trade-mars/data/images/avatar-default.png'
        obj.status = 1
        obj.password = bam(obj.password + salt)
        obj.salt = salt
        obj.create_at = Date()
        await obj.save((err, data) => {
            if (err) {
                return res.status(400).send(err)
            } else {
                res.redirect('/admin')
            }
        })
    } catch (err) {
        return res.status(401).send(err)
    }
}


exports.listAdmin = async (req, res) => {
    await admin_account.find({status: 1}, function (err, data) {
        if (err) {
            throw (err)
        }
        res.render('admin_html/list_admin.ejs', {data: data, admin_key: req.session.keyAdmin})
    })
}


exports.get_all_course = (req, res) => {
    admin_account.find((err, data) => {
        res.render('admin_html/courses.ejs', {data: data, admin_key: req.session.keyAdmin})
    })
}


exports.add_a_new_course = async (req, res) => {
    res.render('admin_html/title_course.ejs', {admin_key: req.session.keyAdmin})
}


exports.post_a_new_course = async (req, res) => {
    var obj = new new_course(req.body)
    obj.created_at = Date()
    obj.save((err, data) => {
        res.redirect('/admin/add-a-new-course')
        console.log(data)
    })
}


exports.list_course = async (req, res) => {
    new_course.find((err, data) => {
        res.render('admin_html/list_course.ejs', {data: data, admin_key: req.session.keyAdmin})
    })
}

exports.list_course_offline = async (req, res) => {
    study.find((err, data) => {
        res.render('admin_html/list_course_offline.ejs', {data: data, admin_key: req.session.keyAdmin})
    })
}

exports.list_recorse_course_in_web = async (req, res) => {
    course_learn_to_count.find((err, course_learn_to_count) => {
        course_letters_andcocabulary.find((err, course_letters_andcocabulary) => {
            course_animals.find((err, course_animals) => {
                course_vegetable.find((err, course_vegetable) => {
                    course_color.find((err, course_color) => {
                        res.render('admin_html/record_in_course.ejs', {color:course_color,vegetable:course_vegetable,data:course_learn_to_count,letters:course_letters_andcocabulary,animals:course_animals, admin_key: req.session.keyAdmin})
                    })
                })
            })
        })
    })
}



exports.list_registraction = async (req,res)=>{
    registraction.find((err,data)=>{
        res.render('admin_html/list_registraction.ejs', {data: data, admin_key: req.session.keyAdmin})
    })
}