/*
    1 - Cire uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Km rodado
    Crie um método que dado a quantidade de quilometros e o preço de combustível nos de o valor 
    gasto em rais para realizar este percurso.
 */

class Cars {
    brand;
    color;
    averageMilage;

    constructor(brand, color, averageMilage) {
        this.brand = brand;
        this.color = color;
        this.averageMilage = averageMilage; //      miles/galon
    }

    calculateTravelCost(miles, gasPrice) {
        return miles * this.averageMilage * gasPrice;
    }
}

const a4 = new Cars("Audi", "white", 1/12);

console.log(a4.calculateTravelCost(70, 5));
// you spent this (top) on gas 