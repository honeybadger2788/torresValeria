const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const usersController = require ('../controllers/usersController');

router.get ('/index',usersController.index);

router.get ('/gastos',usersController.gastos);
router.post ('/gastos',[
    check('fechaGasto')
        .notEmpty().withMessage('Debe ingresar fecha de gasto'),
    check('concepto')
        .notEmpty().withMessage('Debe ingresar concepto de gasto'),
    check('importe')
        .notEmpty().withMessage('Debe ingresar importe')
        .isDecimal({force_decimal: false, decimal_digits: '2', locale: 'en-US'}).withMessage('El importe debe ser en formato 1000.00'),
],usersController.cargarGasto);

router.get ('/estadias',usersController.estadias);
router.post ('/estadias',[
    check('fechaIngreso')
        .notEmpty().withMessage('Debe ingresar fecha de ingreso'),
    check('fechaEgreso')
        .notEmpty().withMessage('Debe ingresar fecha de egreso'),
    check('importeTotal')
        .notEmpty().withMessage('Debe ingresar importe total de reserva')
        .isDecimal({force_decimal: false, decimal_digits: '2', locale: 'en-US'}).withMessage('El importe debe ser en formato 1000.00'),
    check('importeDeposito')
        .notEmpty().withMessage('Debe ingresar importe de depósito')
        .isDecimal({force_decimal: false, decimal_digits: '2', locale: 'en-US'}).withMessage('El importe debe ser en formato 1000.00'),
    check('nombre')
        .notEmpty().withMessage('Debe ingresar nombre de reserva'),
],usersController.cargarEstadia);

router.get ('/informe',usersController.informe);

router.get ('/:idUser/editPassword',usersController.editPassword);
//router.get ('/:idUser/logout',usersController.logout);
router.get ('/:idUser',usersController.profile);

module.exports = router;