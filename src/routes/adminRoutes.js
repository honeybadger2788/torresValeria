const express = require ("express");
const router = express.Router();
const { check, validationResult, body } = require('express-validator');
const adminController = require ('../controllers/adminController');

router.get ('/register',adminController.register);
router.post ('/register',[
    check('usuario').isEmail(),
    check('password')
    .notEmpty()
    .isLength({
      min: 8
    })
    .withMessage("La contraseña debe tenes al menos 8 caracteres")
    .custom(() => {
      if (req.body.password === req.body.rePassword) {
        return true;
      } else {
        return false;
      }
    })
    .withMessage("Las contraseñas no coinciden"),
],adminController.crearCuenta);

module.exports = router;