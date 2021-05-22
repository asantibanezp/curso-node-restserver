
const express = require('express');
var cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        this.authPath = '/api/auth';

        // Conectar a base de datos
        this.conectarDB();

        // Middlewares 
        this.middlewares(); 

        // Rutas de mi aplicación
        this.routes(); 
    }

    async conectarDB() {
        await dbConnection();
    }

    // Los middlewares son funciones que se ejecutan antes de llamar a un control, o seguir con la ejecucion de las peticiones
    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Directorio Público
        this.app.use(express.static('public'));

    }

    // Define la ruta de acuerdo al path y los manda a routes. Routes las deriva al controlador respectivo
    routes() {

        this.app.use(this.authPath, require('../routes/auth'));
        this.app.use(this.usuariosPath, require('../routes/usuarios'));

    }

    listen() {

        this.app.listen(this.port, () => {
            console.log('servidor corriendo en ', this.port);
        });

    }



}



module.exports = Server;
