const role = require('../models/role');
const usuario = require('../models/usuario');

const esRoleValido = async (rol = '') => {

    const existeRol = await role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no está registrado en la BD`);
    }

}

const emailExiste = async (correo = '') => {

    // Verificar si el correo existe || Si el email no existe lo dejo pasar, y si existe lanzo el error
    const existeEmail = await usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El email ${correo} ya existe en la BD`);
    }

}


const existeUsuarioPorId = async (id) => {

    // Verificar si el usuario existe || Si el usuario existe lo dejo pasar, y si no existe lanzo el error
    const existeUsuario = await usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`El id ${id} no existe en la BD`);
    }

}



module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId
}