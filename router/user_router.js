var express = require('express')
var user_controller = require('../controller/user_controller')
var feedback_router = require('../controller/feedback_controller')

var router = express.Router()

router.get('/', user_controller.home)
router.get('/learn123', user_controller.L123)
router.get('/learn_abc', user_controller.Labc)
router.get('/animal', user_controller.anm)
router.get('/color', user_controller.color)
router.get('/calculate', user_controller.calculate)
router.get('/vegetable', user_controller.vegetable)
router.get('/week_and_month', user_controller.week_and_month)
router.get('/parents', user_controller.parents)
router.get('/minigame', user_controller.minigame)
router.get('/contact', feedback_router.list)
router.post('/contact_send', feedback_router.store)
router.post('/create-user',user_controller.create_user)
router.post('/login',user_controller.login)

router.get('/admin/listUer',user_controller.listUer)

router.get('/logout',user_controller.logout)


router.get('/edit_profile/:id',user_controller.editprofile)
router.post('/edit_profile/:id',user_controller.updateprofile)

router.get('/profile',user_controller.profile)

router.get('/detail/:id1::id2',user_controller.detail)

router.get('/color/draw',user_controller.draw)

router.get('/packages',user_controller.packages_page)

module.exports = router;