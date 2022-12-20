class Person {
    name;
    age;
    dob;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.dob = 2022 - age;
    }

    describe() {
        console.log('My name is ${this.name} and my age is ${this.age}');
    }
}

function comparePeople(p1, p2) {
    if (p1.age > p2.age) {
        console.log('${p1.name} is older than ${p2.name}');
    } else if (p1.age < p2.age){
        console.log('${p2.name} is older than ${p1.name}');
    } else {
        console.log('${p2.name} and ${p1.name} have the same age');
    }
}

const amanda = new Person("Amanda", 26);

const gustavo = new Person("Gustavo", 30);

comparePeople(amanda, gustavo);