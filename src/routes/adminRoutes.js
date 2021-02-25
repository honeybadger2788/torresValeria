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
    .custom(() => {
      if (req.body.password === req.body.rePassword) {
        return true;
      } else {
        return false;
      }
    }),
],adminController.crearCuenta);

module.exports = router;