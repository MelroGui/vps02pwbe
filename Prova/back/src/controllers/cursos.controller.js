const cursos = require('../models/cursos.model');
const con = require('../dao/senai.dao');

const readAll = (req, res) => {
    con.query(cursos.readAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

module.exports = {
    readAll
}