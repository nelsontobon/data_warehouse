/**
 * creacion de los endpoint para la entidad user
 */
const express = require('express');
const router = express.Router();


const {loginUser} = require('../controllers/user/loginUser')
const {createNewUser} = require('../controllers/user/createUser')

const {validatePass} = require('../middlewars/user/validate_pass')
const {validateUser} = require('../middlewars/user/validate_user')
const {validateRol} = require('../middlewars/user/validateRol')


router.post("/login", loginUser)
// router.post("/createUser", validatePass, validateUser,createNewUser)
router.post("/createUser", createNewUser)




module.exports = router