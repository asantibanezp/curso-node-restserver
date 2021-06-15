const { Router } = require('express');
const { check } = require('express-validator');
const { noticiasGet } = require('../controllers/noticias');


const router = Router();




router.get('/', noticiasGet);



module.exports = router;