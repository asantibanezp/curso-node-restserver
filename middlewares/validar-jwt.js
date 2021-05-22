const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');


const validarJWT = async( req = request, res = response, next ) => {

    const token = req.header('x-token');



    if(!token){
        return res.status(401).json({
            msg: 'No hay token en la petición'
        })
    }


    try{

        const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );

        const usuario = await Usuario.findById(uid);

        if(!usuario){
            return res.status(401).json({
                msg: 'Token no válido - usuario no esiste en DB'
            })
        }

        if(!usuario.estado){
            return res.status(401).json({
                msg: 'Token no válido - usuario con estado: false'
            })
        }

        req.usuario = usuario;

        next(); // Si pasa la validación, se va al siguiente middleware y si no hay más middlewares, pasa al controlador. Esto lo hacen todos los middlewares.

    }catch (error){

        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })

    }

    console.log(token);

    next();
}


module.exports = {
    validarJWT
}