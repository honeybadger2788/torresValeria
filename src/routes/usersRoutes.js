const express = require('express');
const router = express.Router();
const { check, validationResult, body } = require('express-validator');
const usersController = require ('../controllers/usersController');

router.get ('/index',usersController.index);

router.get ('/gastos',usersController.gastos);
router.post ('/cargaGastos',[
    check('fechaGasto')
        .notEmpty(),
    check('concepto')
        .notEmpty(),
    check('importe')
        .notEmpty()
        .isDecimal({force_decimal: false, decimal_digits: '2', locale: 'en-US'}),
],usersController.cargarGasto);

router.get ('/estadias',usersController.estadias);
router.post ('/cargaEstadias',usersController.cargarEstadia);

router.get ('/informe',usersController.informe);

module.exports = router;