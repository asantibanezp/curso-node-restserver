const { response, query } = require('express');
const bcryptjs = require('bcryptjs');

//Importamos el modelo
const Usuario = require('../models/usuario');


const usuariosGet = async (req, res = response) => {

    // const { q, nombre = 'no name', apikey, page = '1', limit } = req.query;

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true } // Traemos sólo usuarios activos



    // Las promesas (await) pausan la ejecución hasta obtener una resolución. Esto en algunos casos (dependiendo del código, por ejemplo si la paomesa 2 no depende del resultado de la promesa 1), puede
    // generar tiempos indeseados de respuesta, que se pueden optimizar. "Promise.all" sirve para trabajar con varias promesas simultáneamente, con un solo await

    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
            .skip(Number(desde)) // Establece desde qué registro quiere empezar a desplegar
            .limit(Number(limite)) // Limita el número de usuarios desplegados
    ])


    res.json({ // Respondemos en formato JSON
        total,
        usuarios
    });
}

const usuariosPut = async (req, res = response) => {

    const { id } = req.params;
    const { _id, password, google, correo, ...resto } = req.body;  // Password, google y correo no se usan, entonces los separo del resto, donde están los datos a actualizar

    // TODO validar contra base de datos
    if (password) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt)

    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.status(400).json({ // Respondemos en formato JSON
        usuario
    });
}

const usuariosPost = async (req, res = response) => {

    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol }); // Creamos una nueva instancia de usuario

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt)

    // Guardar en DB
    await usuario.save();

    res.status(201).json({ // Respondemos en formato JSON
        usuario
    });
}

const usuariosDelete = async(req, res = response) => { // Usamos "async" cuando tengamos interacciones asincronas con "await", en este caso con la BD

    const { id } = req.params;

    // Físicamente lo borramos. No se recomienda borrar usuarios de plano, porque si el usuario tuvo algun tipo de interacción, perderíamos la integridad referencial
    // const usuario = await Usuario.findByIdAndDelete(id);

    // Sólo cambiamos el estado, sin borrarlo físicamente
    const usuario = await Usuario.findByIdAndUpdate(id, {estado: false});

    res.json(usuario); // Retornamos el usuario que acaba de ser borrado
}

const usuariosPatch = (req, res = response) => {
    res.json({ // Respondemos en formato JSON
        msg: 'patch API - Controlador'
    });
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}