const express = require('express');
const router = express.Router();

const aluno = require("../controllers/alunos.controller");

router.post("/senai/post", aluno.create);
router.delete("/senai/delete/:id_aluno", aluno.del);
router.get("/senai/get", aluno.readAll);
router.put("/senai/put", aluno.update);

module.exports = router;