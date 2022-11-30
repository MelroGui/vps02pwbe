class cursos {
    cursos = [];
    constructor(data) {
        this.id - data.id_curso;
        this.curso = data.curso;
        this.duracao = data.duracao;
         if (data.cursos != undefined)
            data.cursos. forEach(e =>
                this.cursos.push(e));
             };
    addTratamento(trat){
        this.cursos.push(trat);
    }
    static readAll(){
         return "SELECT * FROM cursos";
    }
}

const readAll = () => {
    return `SELECT * FROM cursos`;
}

module.exports = cursos;
module.exports = {
    readAll
}
    