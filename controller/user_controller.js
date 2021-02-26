var event = require('../models/addmin_event_obj')
var teacher = require('../models/teacher_obj')
var study = require('../models/study_obj')
var md5 = require('md5')
var account = require('../models/user_obj')
var alert = require('alert')


var course_learn_to_count = require('../models/models_course/learn_to_count_obj')
var course_letters_andcocabulary = require('../models/models_course/letters_and_vocabulary')
var course_animals = require('../models/models_course/animals_obj')
var course_vegetable = require('../models/models_course/vegetable_obj')
var course_color = require('../models/models_course/color_obj')

var registraction = require('../models/registraction_obj')

var course = require('../models/course')


exports.home = function (rep, res) {
    res.render('index.ejs')
};

exports.registraction = async (req,res)=>{
    var obj = new registraction(req.body)
    obj.registraction_date = Date()
    obj.save((err,data)=>{
        res.redirect('/packages')
        alert('đăng kí thành công khóa học ' + obj.course_title + ' cho bé' + obj.child_name)
    })
}







exports.L123 = function (req, res) {
    course.find((err, course) => {
        course_learn_to_count.find((err, data) => {
            res.render('html/count123.ejs', {data: data, course: course})
        })
    })
};





exports.Labc = function (req, res) {
    course.find((err, course) => {
        course_letters_andcocabulary.find((err, data) => {
            res.render('html/learn_abc.ejs', {data: data, course: course})
        })
    })
};

exports.anm = function (req, res) {
    course.find((err, course) => {
        course_animals.find((err, data) => {
            res.render('html/animal.ejs', {data: data, course: course})
        })
    })
};

exports.color = function (req, res) {
    course.find((err, course) => {
        course_color.find((err, data) => {
            res.render('html/color.ejs', {data: data, course: course})
        })
    })
};

exports.calculate = function (req, res) {
    course.find((err,data)=>{
        res.render('html/calculate.ejs',{course:data})
    })

};

exports.vegetable = function (req, res) {
    course.find((err, course) => {
        course_vegetable.find((err, data) => {
            res.render('html/vegetable-page.ejs', {data: data, course: course})
        })
    })
};

exports.week_and_month = function (req, res) {
    res.render('html/week_and_month.ejs')
};

exports.contact = function (req, res) {
    res.render('html/contact.ejs')
};

exports.parents = function (req, res) {
    res.render('html/parents.ejs')
};

exports.minigame = function (req, res) {
    course.find((err,data)=>{
        res.render('html/minigame.ejs',{course:data})
    })
};


// exports.create_user = function (rep,res){
//     var obj = new account(req)
//     console.log(req.body)
//     obj.save(function (err,data){
//         res.send('success')
//     })
// }


exports.create_user = async function (req, res) {
    var keyCreate = await account.findOne({user_email: req.body.user_email})
    if (keyCreate === null) {
        var obj = new account(req.body);
        var salt = Math.random().toString(36).substring(2)
        obj.password = md5(obj.password + salt)
        obj.salt = salt
        obj.status = 1
        obj.create_at = Date()
        obj.user_avatar = 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
        await obj.save();
        res.redirect('/packages')
        alert('tạo tài khoản thành công với tên ' + obj.user_name)
    } else {
        alert('email đã được sử dụng')
    }
}


exports.login = async (req, res) => {
    try {
        var keylogin = await account.findOne({user_email: req.body.user_email})
        if (keylogin === null) {
            alert('tài khoản không tồn tại  ')
        }
        if (md5(req.body.password + keylogin.salt) === keylogin.password) {
            req.session.user = keylogin
            res.redirect('/packages')
            alert(`đăng nhập thành công với tên ${req.session.user.user_name}`)
        } else {
            alert('sai mật khẩu')
        }
    } catch (err) {
        console.log(err)
    }
}


exports.logout = async (req, res) => {
    await event.find({status: 1}, (err, data) => {
        req.session.user = undefined
        res.redirect('/packages')
    })
}





exports.editprofile = async (req, res) => {
    account.findById(req.param.id, (err, data) => {
        res.render('edit/editprofile.ejs', {data: data, user: req.session.user})
    })
}


exports.updateprofile = async (req, res) => {
    req.session.user = undefined
    var salt = Math.random().toString(36).substring(2)
    let update_infor = {
        user_email: req.body.user_email,
        user_name: req.body.user_name,
        user_avatar: req.body.user_avatar,
        password: md5(req.body.password + salt),
        salt: salt,
        gender: req.body.gender,
        status: 1,
    }
    account.findByIdAndUpdate(req.params.id, update_infor, (err, data) => {
        res.redirect('/packages')
        alert('Successful update please login again')
    })
}
exports.profile = async (req, res) => {
    await res.render('user_profile', {user: req.session.user})
}




























exports.packages_page = async (req, res) => {
    await event.find({status: 1}, (err, data) => {

        var search = req.query.search;

        let filter = {
            status: 1
        };
        if (search && search.length > 0) {
            filter['search'] = {$regex: '.*' + search + '.*'}
        }
        study.find(filter, (err, data_courses) => {
            var index_page = data_courses.length / 9
            var index
            if (index_page <= parseInt(index_page)) {
                index = parseInt(index_page)
            } else {
                index = parseInt(index_page) + 1
            }
            var page = parseInt(req.query.page) || 1;
            var perpage = 9
            var start = (page - 1) * perpage
            var end = page * perpage
            var data_courses1 = data_courses.reverse();



            res.render('html/packages.ejs', {
                data: data,
                user: req.session.user,
                data_courses: data_courses1.slice(start, end),
                page: page,
                perpage: perpage,
                index: index
            })
        })

    })
}





















exports.listUer = async (req, res) => {
    var gender = req.query.gender;
    var username = req.query.userName;
    let filter = {
        status: 1
    };
    if (gender && gender.length > 0) {
        filter['gender'] = gender
    }
    if (username && username.length > 0) {
        filter['user_name'] = {$regex: '.*' + username + '.*'}
    }


    // res.send(filter);
    await account.find(filter, function (err, data) {
        if (err) {
            throw (err)
        }
        res.render('admin_html/list_user.ejs', {
            data: data,
            admin_key: req.session.keyAdmin,
            gender: req.query.gender
        })
    })
}































exports.detail = async (req, res) => {
    study.findById(req.params.id1, (err, data1) => {
        teacher.findById(req.params.id2, (err, data2) => {
            var a = []
            var result = data1.photo.split(",");
            for (var i = 0; i < result.length - 1; i++) {
                a[i] += result[i]
            }
            res.render('html/client_detail.ejs', {data1: data1, data2: data2, photo: a, user: req.session.user})
            console.log(data1)
        })
    })
}








exports.draw = (req, res) => {
    res.render('draw.ejs')
}