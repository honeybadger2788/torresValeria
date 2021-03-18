const express = require ("express");
const router = express.Router();
const { check } = require('express-validator');
const adminController = require ('../controllers/adminController');

router.get ('/register',adminController.register);
router.post ('/register',[
    check('user').isEmail().withMessage('El usuario debe ser un email'),
    check('password')
    .notEmpty()
    .isLength({
      min: 8
    })
    .withMessage("La contraseña debe contener al menos 8 caracteres"),
],adminController.crearCuenta);

module.exports = router;
