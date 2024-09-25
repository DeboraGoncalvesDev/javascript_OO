
class Profissao {
    constructor(nome, anosDeExperiencia) {
        this.nome = nome;
        this.anosDeExperiencia = anosDeExperiencia;
    }

    descrever() {
        throw new Error("Método 'descrever' deve ser implementado na classe derivada");
    }
}


class Engenheiro extends Profissao {
    descrever() {
        return `${this.nome} é engenheiro e tem ${this.anosDeExperiencia} anos de experiência.`;
    }
}


class Professor extends Profissao {
    descrever() {
        return `${this.nome} é professor e tem ${this.anosDeExperiencia} anos de experiência.`;
    }
}


const engenheiro1 = new Engenheiro("Carlos", 10);
const professor1 = new Professor("Ana", 8);
const engenheiro2 = new Engenheiro("Fernanda", 5);


console.log(engenheiro1.descrever());
console.log(professor1.descrever());
console.log(engenheiro2.descrever());
