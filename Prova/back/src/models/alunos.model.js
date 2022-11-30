class alunos {
    alunos = [];
    constructor(data) {
        this.id - data.id_aluno;
        this.nome = data.nome;
        this.nescimento = data.nascimento;
         if (data.alunos != undefined)
            data.alunos. forEach(e =>   
                this.alunos.push(e));
             };
    addTratamento(trat){
        this.alunos.push(trat);
    }
    static readAll(){
         return "SELECT * FROM alunoss";
    }
}

const create = (model) => {
    return `INSERT INTO alunos VALUES(default, '${model.nome}',${model.nascimento})`;
}

const update = (model) => {
    return `UPDATE alunos set nome = '${model.nome}', nascimento = ${model.nascimento} where id_aluno = ${model.id_aluno}`;
    
}

const readAll = () => {
    return `SELECT * FROM alunos`;
}

const del = (model) => {
    return `delete FROM alunos where id_aluno = ${model.id_aluno}`;
}

module.exports = alunos;
module.exports = {
    update,
    create,
    readAll,
    del
}
    