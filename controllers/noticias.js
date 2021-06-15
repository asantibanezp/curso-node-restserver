const { response } = require("express");
const { query, buildParams } = require("../database/sql-connection");
var TYPES = require("tedious").TYPES;



const noticiasGet = async (req, res = response) => {

    const { desde, limite } = req.query;
    // const suc = Number(req.query.suc);


    // var number = 1;
    var params = [];
    var sql = "select * from noticias order by Id offset @desde rows fetch next @limite rows only";
    // For each param do: db.buildParams(params, "name", TYPES.type, variable)
    buildParams(params, "desde", TYPES.Int, desde);
    buildParams(params, "limite", TYPES.Int, limite);

    await query(params, sql, undefined, result => {
        res.json({
            msg: result
        })
    });

}


module.exports = {
    noticiasGet
}