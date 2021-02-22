var teacher = require('../models/teacher_obj')
var study = require('../models/study_obj')
var alert = require('alert')






var course_learn_to_count = require('../models/models_course/learn_to_count_obj')
var course_letters_andcocabulary = require('../models/models_course/letters_and_vocabulary')
var course_animals = require('../models/models_course/animals_obj')
var course_vegetable = require('../models/models_course/vegetable_obj')
var course_color = require('../models/models_course/color_obj')





exports.new_teacher = async (req, res) => {
    var obj = new teacher(req.body)
    obj.create_at = Date()
    await obj.save((err, data) => {
        res.redirect('/admin/new_teacher')
        alert('tạo thành công giáo viên ' + obj.teacher_name + ' với ' + obj.exp + ' năm kinh niệm trong ngành ' + obj.subject)
        console.log(obj)
    })
}


exports.form_new_teacher = async (req, res) => {
    res.render('admin_html/new_teacher.ejs', {admin_key: req.session.keyAdmin})
}


exports.form_new_study = async (req, res) => {
    await teacher.find((err, data) => {
        res.render('admin_html/new_study.ejs', {data: data, admin_key: req.session.keyAdmin})
    })
}


exports.new_study = async (req, res) => {
    var obj = new study(req.body)
    obj.create_at = Date()
    await teacher.findById(obj.teacher, (err, data) => {
        obj.subject = data.subject
        obj.save((err, data) => {
            res.redirect('/admin/new_study')
            alert('tạo thành công khóa học ' + obj.title + ' với giáo viên ' + obj.teacher)
        })
    })
}



// tạo bản ghi trong các khóa học
exports.new_record_learn_to_count = async (req,res)=>{
    var obj = new course_learn_to_count(req.body)
    obj.createAt=Date()
    await obj.save((err,data)=>{
        res.redirect('/admin/all-course')
    })
}

exports.new_record_letters_course = async (req,res)=>{
    var obj = new course_letters_andcocabulary(req.body)
    obj.createAt=Date()
    await obj.save((err,data)=>{

        res.redirect('/admin/all-course')
    })
}

exports.new_record_course_animals = async (req,res)=>{
    var obj = new course_animals(req.body)
    obj.createAt=Date()
    await obj.save((err,data)=>{
        console.log(obj)
        res.redirect('/admin/all-course')
    })
}

exports.new_record_course_vegetable = async (req,res)=>{
    var obj = new course_vegetable(req.body)
    obj.createAt=Date()
    await obj.save((err,data)=>{
        console.log(obj)
        res.redirect('/admin/all-course')
    })
}

exports.new_record_course_color = async (req,res)=>{
    var obj = new course_color(req.body)
    obj.createAt=Date()
    await obj.save((err,data)=>{
        console.log(obj)
        res.redirect('/admin/all-course')
    })
}