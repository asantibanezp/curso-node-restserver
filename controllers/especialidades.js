const { response } = require("express");
const { query, buildParams } = require("../database/sql-connection");
var TYPES = require("tedious").TYPES;




const especialidadesGet = async(req, res = response) => {

    const suc = Number(req.query.suc);
    const params = [];
    let sql = '';

    switch(suc){
        case 1:
        sql = "select Id, Nombre from Especialidades";
        break
        case 2:
        sql = "select Id, Nombre from EspecialidadesVina";
        break;
        case 3:
        sql = "select Id, Nombre from Especialidades";
        break;
    }

    console.log()
    await query(params, sql, undefined, result => {
       
        res.status(201).json({
            result
        })

    });


}



module.exports = {
    especialidadesGet
}