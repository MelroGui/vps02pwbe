const express = require('express');
const router = express.Router();

const curso = require("../controllers/cursos.controller");

router.get("/senai/getCur", curso.readAll);

module.exports = router;