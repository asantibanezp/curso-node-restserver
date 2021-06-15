const { response } = require("express");
const { query, buildParams } = require("../database/sql-connection");
var TYPES = require("tedious").TYPES;



const sucursalesGet = async (req, res = response) => {

    const params = [];
    const sql = "select * from Sucursal order by Orden desc";

    await query(params, sql, undefined, result => {
        res.json({
            msg: result
        })
    });

}


module.exports = {
    sucursalesGet
}