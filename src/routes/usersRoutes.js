const express = require('express');
const router = express.Router();
const usersController = require ('../controllers/usersController');

router.get ('/index',usersController.index);

router.get ('/gastos',usersController.gastos);
router.post ('/cargaGastos',usersController.cargarGasto);

router.get ('/estadias',usersController.estadias);
router.post ('/cargaEstadias',usersController.cargarEstadia);

router.get ('/informe',usersController.informe);

module.exports = router;