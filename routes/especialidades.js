const { Router } = require('express');
const { check } = require('express-validator');
const { especialidadesGet } = require('../controllers/especialidades');


const router = Router();




router.get('/', especialidadesGet);



module.exports = router;