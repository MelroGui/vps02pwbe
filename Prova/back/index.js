require('dotenv').config(); //Habilita variáveis de Ambiente
const PORT = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');

const aluno = require('./src/routes/alunos.route');
const curso = require('./src/routes/cursos.route');

//Iniciar a API
const app = express()
    .use(express.json())
    .use(cors())
    .use('/alunos',aluno)
    .use('/cursos',curso);

app.listen(PORT, () => {
    console.log('Bom dia com uma fro proce na porta ' + PORT);
});