var express = require('express')
var admin_controller = require('../controller/admin_controller')
var router = express.Router()

router.post('/adminLogin',admin_controller.adminlogin)

router.post('/new_admin',admin_controller.create_account)
module.exports = router;