const express = require ("express");
const router = express.Router();
const { check, body } = require('express-validator');
const adminController = require ('../controllers/adminController');

router.get ('/register',adminController.register);
router.post ('/register',[
    check('user').isEmail().withMessage('El usuario debe ser un email'),
    check('password')
    .notEmpty()
    .isLength({
      min: 8
    })
    .withMessage("Las contraseña debe contener al menos 8 caracteres"),
    body('password').custom(() => {
      if (req.body.password === req.body.rePassword) {
        return true;
      } else {
        return false;
      }
    })
    .withMessage("Las contraseñas no coinciden"), //NO FUNCIONA
],adminController.crearCuenta);

module.exports = router;
