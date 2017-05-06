function Aluno () {
  var nome;
  var idade;
  var curso;

  this.setNome = function (nome) {
    this.nome = nome;
  }

  this.getNome = function () {
    return this.nome;
  }

  this.setIdade = function (idade) {
    this.idade = idade;
  }

  this.getIdade = function () {
    return this.getIdade;
  }

  this.setCurso = function (curso) {
    this.curso = curso;
  }

  this.getCurso = function () {
    return this.curso;
  }

  this.mostraDados = function () {
    console.log("Nome: " + this.nome + "\nIdade: " + this.idade + "\nCurso: " + this.curso);
  }
}

var aluno = new Aluno();
aluno.setNome("Elvis");
aluno.setIdade(27);
aluno.setCurso("ADS");

aluno.mostraDados();
