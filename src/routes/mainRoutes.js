const express = require ("express");
const router = express.Router();
const { check } = require('express-validator');
const mainController = require ('../controllers/mainController');

router.get ('/',mainController.main);
router.post ('/',[
    check('user').isEmail().withMessage('El usuario debe ser un email'),
    check('password')
    .notEmpty()
    .isLength({
      min: 8
    })
    .withMessage("La contraseña debe contener al menos 8 caracteres"),
],mainController.login);

module.exports = router;