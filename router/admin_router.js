var express = require('express')
var admin_controller = require('../controller/admin_controller')
var study_controller = require('../controller/study_controller')
var router = express.Router()


router.get('/show_event',admin_controller.list)
router.post('/create_event',admin_controller.saves)
router.get('/create_form_event',admin_controller.create_event)
router.get('/delete_event/:id',admin_controller.delete)
router.get('/edit/:id', admin_controller.edit)
router.post('/edit/:id', admin_controller.update)
router.get('/show/:id', admin_controller.show)
router.get('/',admin_controller.adminHome)
router.get('/logout',admin_controller.admin_logout)
router.get('/listAdmin',admin_controller.listAdmin)
router.get('/new_teacher',study_controller.form_new_teacher)
router.post('/new_teacher',study_controller.new_teacher)
router.get('/new_study',study_controller.form_new_study)
router.post('/new_study',study_controller.new_study)



router.get('/newAdmin',(req,res)=>{
    res.render('newAdmin.ejs')
})


router.get('/all-course',admin_controller.get_all_course)


router.post('/add_record_learn_to_count',study_controller.new_record_learn_to_count)
router.post('/add_record_letters_course',study_controller.new_record_letters_course)
router.post('/add_record_animal_course',study_controller.new_record_course_animals)
router.post('/add_record_vegaetable_course',study_controller.new_record_course_vegetable)
router.post('/add_record_color_course',study_controller.new_record_course_color)


router.get ('/add-a-new-course',admin_controller.add_a_new_course)


router.post ('/add-a-new-course',admin_controller.post_a_new_course)



router.get('/get_list_course',admin_controller.list_course)
router.get('/get_list_course_offline',admin_controller.list_course_offline)
router.get('/get_list_record_course',admin_controller.list_recorse_course_in_web)
router.get('/get_list_registraction',admin_controller.list_registraction)


router.post('/new_admin',admin_controller.create_account)
module.exports = router;