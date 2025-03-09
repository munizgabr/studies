class Person {

    steps = 0;
    _age = 0;
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;

    }

    takeASteps(){
        this.steps++;
    }

    get age(){
        return this._age;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set age(x){
        if(
            typeof x == 'number'
        ){
            this._age = x;
        } else {
            alert("A idade deve ser um número.")
        }
    }
    
}

let p1 = new Person("João","Henrique");
let p2 = new Person("Maria", "das Dores");
let p3 = new Person("Pedro","Caixinha");
p1.age = 31;
console.log(`${p1.fullName} tem ${p1.age} anos`);

