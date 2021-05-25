const { Usuario, Role, Categoria, Producto } = require('../models');




const esRoleValido = async (rol = '') => {

    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no está registrado en la BD`);
    }

}

const emailExiste = async (correo = '') => {

    // Verificar si el correo existe || Si el email no existe lo dejo pasar, y si existe lanzo el error
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El email ${correo} ya existe en la BD`);
    }

}


const existeUsuarioPorId = async (id) => {

    // Verificar si el usuario existe || Si el usuario existe lo dejo pasar, y si no existe lanzo el error
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`El id ${id} no existe en la BD`);
    }

}

const existeCategoriaPorId = async(id) => {

    const existeCategoria = await Categoria.findById(id);

    if(!existeCategoria) {
        throw new Error(`La categoría buscada: ${id}, no existe en la BD`);
    }

}

const existeCategoriaPorNombre = async (nombre = '') => {

    // Verificar si el correo existe || Si el email no existe lo dejo pasar, y si existe lanzo el error
    const existeNombre = await Categoria.findOne({ nombre });

    if (existeNombre) {
        throw new Error(`Ya existe una categoría con el nombre "${nombre}" en la BD`);
    }

}

const existeProductoPorId = async(id) => {

    const existeProducto = await Producto.findById(id);

    if(!existeProducto) {
        throw new Error(`El producto buscado buscado: ${id}, no existe en la BD`);
    }

}

const existeProductoPorNombre = async (nombre = '') => {

    // Verificar si el correo existe || Si el email no existe lo dejo pasar, y si existe lanzo el error
    const existeNombre = await Producto.findOne({ nombre });

    if (existeNombre) {
        throw new Error(`Ya existe un producto con el nombre "${nombre}" en la BD`);
    }

}


const coleccionesPermitidas = async(coleccion = '', colecciones = []) => {


    const incluida = colecciones.includes(coleccion);

    if(!incluida) {
        throw new Error(`La colección ${ coleccion } no es permitida, ${ colecciones }`);
    }

    return true
}



module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId,
    existeCategoriaPorId,
    existeCategoriaPorNombre,
    existeProductoPorId,
    existeProductoPorNombre,
    coleccionesPermitidas
}