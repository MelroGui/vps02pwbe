drop database if exists senai;
create database senai charset=utf8 collate utf8_general_ci;
use senai;

create table alunos(
    id_aluno integer not null auto_increment primary key,
    nome varchar(30) not null,
    nascimento varchar(11) not null
);

create table cursos(
    id_curso integer not null auto_increment primary key,
    curso varchar(30) not null,
    duracao varchar(30) not null
);

create table cursados(
    id_aluno integer not null,
    id_curso integer not null,
    data varchar(11) not null,
    foreign key (id_aluno) references alunos(id_aluno) on delete cascade,
    foreign key (id_curso) references cursos(id_curso) on delete cascade
);

describe alunos;
describe cursos;
describe cursados;
show tables;

LOAD DATA INFILE 'D:/guim/Senai2022/2DES/pwbe/Prova/docs/alunos.csv'
INTO TABLE alunos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from alunos;

LOAD DATA INFILE 'D:/guim/Senai2022/2DES/pwbe/Prova/docs/cursos.csv'
INTO TABLE cursos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from cursos;

LOAD DATA INFILE 'D:/guim/Senai2022/2DES/pwbe/Prova/docs/cursados.csv'
INTO TABLE cursados
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from cursados;

create view vw_cursados as
select a.nome, a.nascimento, c.curso, c.duracao, cur.id_aluno, cur.id_curso, cur.data
from cursados cur
inner join alunos a on cur.id_aluno = a.id_aluno
inner join cursos c on c.id_curso = cur.id_curso;

select * from vw_cursados;