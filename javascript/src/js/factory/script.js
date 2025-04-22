// class Person {

//     age = 0;
    
//     constructor(name){
//         this.name = name;
//     }
// }

// function createPerson(name, age) {
//     let p = new Person(name);
//     p.age = age;
//     return p;
// }

// let p1 = createPerson("João", 31);
// console.log(`${p1.name} tem ${p1.age} anos`);


function createPerson(name, lastName, age) {
    return {
        name,
        lastName,
        age,
        getFullName() {
            return `${this.name} ${this.lastName}`;
        }
    }
}

let p1 = createPerson("João", "Henrique", 31);
console.log(`${p1.name} ${p1.lastName} tem ${p1.age} anos`);

let p2 = createPerson("Maria", "das Dores", 25);
console.log(`${p2.name} ${p2.lastName} tem ${p2.age} anos`);

console.log(p1.getFullName());