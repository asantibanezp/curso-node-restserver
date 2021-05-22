// Tomamos los 3 archivos. El nombre de la constante no importa, es sólo representativo

const validarCampos = require('../middlewares/validar-campos');
const validarJWT = require('../middlewares/validar-jwt');
const validaRoles = require('../middlewares/validar-roles');



// Exportamos todo de cada uno

module.exports = {
    ...validarCampos,
    ...validarJWT, 
    ...validaRoles
}