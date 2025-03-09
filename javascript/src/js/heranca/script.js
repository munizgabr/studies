class Person {

    age = 0;
    
    constructor(name){
        this.name = name;
    }

    sayHi() {
        console.log(`${this.name} disse Olá!`);
    }
}

class Student extends Person {
    
    constructor(name, id){
        // esta função super() pega os atributos da classe pai, neste caso, Person.
        super(name);
        this.id = id;
    }
    // sobreescrevendo a função sayHi() da classe pai.
    sayHi() {
        console.log(`${this.name} é um estudante de inglês e disse Hi!`);
    }
    // utilizando a classe sayHi() da classe pai em uma outra função.
    sayHello() {
        super.sayHi();
    }
}

let p1 = new Student("Gabriel", 270021);
console.log(`Nome do aluno: ${p1.name} e seu ID de matrícula é: ${p1.id}`);

p1.sayHi();
p1.sayHello();