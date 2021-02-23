const express = require ("express");
const router = express.Router();
const adminController = require ('../controllers/adminController');

router.get ('/register',adminController.register);
router.post ('/crearCuenta',adminController.crearCuenta);

module.exports = router;