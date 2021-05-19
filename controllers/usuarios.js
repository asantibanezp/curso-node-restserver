const { response } = require('express');



   const usuariosGet = (req, res = response) => {

        const { q, nombre = 'no name', apikey, page = '1', limit } = req.query;

        res.json({ // Respondemos en formato JSON
            msg: 'get API - Controlador',
            q,
            nombre,
            apikey,
            page,
            limit
        });
    }

    const usuariosPut = (req, res = response) => {

        const { id } = req.params;

        res.status(400).json({ // Respondemos en formato JSON
            msg: 'put API - Controlador',
            id: id
        });
    }

    const usuariosPost = (req, res = response) => {

        const { nombre, edad } = req.body;

        res.status(201).json({ // Respondemos en formato JSON
            msg: 'post API - Controlador',
            nombre,
            edad

        });
    }

    const usuariosDelete = (req, res = response) => {
        res.json({ // Respondemos en formato JSON
            msg: 'delete API - Controlador'
        });
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