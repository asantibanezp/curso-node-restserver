
const express = require('express');
var cors = require('cors');
const { dbConnection } = require('../database/config');
const fileUpload = require('express-fileupload');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            auth:       '/api/auth',
            usuarios:   '/api/usuarios',
            categorias: '/api/categorias',
            productos:  '/api/productos',
            buscar:     '/api/buscar',
            uploads:    '/api/uploads',
            noticias:   '/api/noticias',
            sucursales:   '/api/sucursales',
            especialidades:   '/api/especialidades'
        }

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

        // Fileupload - carga archivos
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true
        }));

    }

    // Define la ruta de acuerdo al path y los manda a routes. Routes las deriva al controlador respectivo
    routes() {

        this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use(this.paths.usuarios, require('../routes/usuarios'));
        this.app.use(this.paths.categorias, require('../routes/categorias'));
        this.app.use(this.paths.productos, require('../routes/productos'));
        this.app.use(this.paths.buscar, require('../routes/buscar'));
        this.app.use(this.paths.uploads, require('../routes/uploads'));
        this.app.use(this.paths.noticias, require('../routes/noticias'));
        this.app.use(this.paths.sucursales, require('../routes/sucursales'));
        this.app.use(this.paths.especialidades, require('../routes/especialidades'));
    }

    listen() {

        this.app.listen(this.port, () => {
            console.log('servidor corriendo en ', this.port);
        });

    }



}



module.exports = Server;
