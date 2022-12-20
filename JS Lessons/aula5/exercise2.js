/*
    2) Crie uma classe para representar pessoas
    Para cada pessoa teremos os atributos nome, peso, e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura*altura));
    Instancie uma pessoa chamada José que tenha 70Kg de peso e 1,75 de altura e peçaao José dizer
    o valor do seu IMC;

*/

class Person {
    name;
    weight;
    height;
    imc;
    constructor(name, weight, height) {
        this.name,
        this.weight,
        this.height
        this.imc = weight / (height * height);
    }
    calculateIMC() {
        return this.weight / (Math.pow(this.height, 2));
    }

    classifyImc() {
        const imc = this.calculateIMC();
        if(imc < 18.5) {
            return ("Abaixo do peso");
        } else if (imc <= 18.5 && imc < 25) {
            return ("Peso normal");
        } else if (imc <= 25 && imc < 30) {
            return ("Acima do peso");
        } else if (imc <= 30 && imc < 40) {
            return ("Obesidade");
        } else {
            return ("Obesidade grave");
        }
    }
}

const joseph = new Person("José", 70, 1,75);

joseph.calculateIMC(); // <--- calculate imc

// console.log(jose.calculateIMC());

joseph.classifyImc();