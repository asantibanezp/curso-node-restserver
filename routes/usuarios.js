const { Router } = require('express');
const { check } = require('express-validator');

const { // Requerimos los middlewares desde el index
    validarCampos,
    validarJWT,
    esAdminRole,
    tieneRole } = require('../middlewares');

const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');

const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete,
        usuariosPatch } = require('../controllers/usuarios');

const router = Router();




router.get('/', usuariosGet);

router.put('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom(esRoleValido),
    validarCampos
], usuariosPut);

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser de más de 6 letras').isLength({ min: 6 }),
    check('correo', 'El correo no es válido').isEmail(),
    // check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER ROLE']),
    check('rol').custom(esRoleValido),
    check('correo').custom(emailExiste),
    validarCampos
], usuariosPost);

router.delete('/:id', [
    validarJWT,
    esAdminRole, // Esta weá falló porque igual se ejecuta el código aunque el middleware haga return **** REVISAR **** 
    tieneRole('ADMIN_ROLE', 'VENTAS_ROLE'), // Esta weá falló porque igual se ejecuta el código aunque el middleware haga return **** REVISAR ****
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos
], usuariosDelete);

router.patch('/', usuariosPatch)



module.exports = router;