const express = require ("express");
const router = express.Router();
const { check, validationResult, body } = require('express-validator');
const adminController = require ('../controllers/adminController');

router.get ('/register',adminController.register);
router.post ('/crearCuenta',[
    check('usuario').isEmail(),
    check('password').equals('password','repassword')
],adminController.crearCuenta);

module.exports = router;