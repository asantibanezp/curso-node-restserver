const { Router } = require('express');
const { check } = require('express-validator');
const { sucursalesGet } = require('../controllers/sucursales');


const router = Router();




router.get('/', sucursalesGet);



module.exports = router;