//funções de multiplicação

// function multiNumb(x,y){
//     let result = x * y
//     return result
// }

// console.log(multiNumb(2,6))


// let mult = function(x,y){
//     let result = x * y
//     return result
// }

// console.log(mult(10,3))

// let objMult={
//     func:function(x,y){
//         let result = x * y
//         return result
//     }
// }

// console.log(objMult.func(5,5))


//função aninhada

// function myName(value){


//     let name 
    // function setName(){
        //OBS: a função interna acessa todos os parâmetros da função externa, mas a função externa não acessa os parâmetros da interna
//         if(value == 1){  
//             name = 'Gabriel'
//         }else if( value == 2){
//             name = 'Lohane'
//         }else{
//             name = 'Nenhum nome foi atribuido'
//         }
//         return name
//     }
//     return setName()
// }
// console.log(myName(3))
/*------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Arrow function

// let sum = (x , y) =>{
//     return x + y
// }
// console.log(sum(2,3))

// let sum2 = (x , y) => x + y
// console.log(sum2(5,10))
/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/ 
//objetos personalizados
// nome:'Webdeveloper',
//ação: 'desenvolver()'

//Formal
// let person = new Object()
//person.name = 'Gabriel'

//Literal
// // let person2 = {
    //name:'Gabriel'
    //lastName:'Muniz'
    //age:'24 anos'
    //skils:['wordpress','html','css','tailwind','sass']
    // //develop:function(){
    //     alert('I am programing')
    // }
    // webDeveloperJr: person
// }
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

let person = {
    name: 'Gabriel',
    age: '24',
    contaCorrente: 123
}

let operation ={
    sacar: function(saldo, valor){
        return saldo -= valor
    },
    depositar: function(saldo, valor){
        return saldo += valor
    }
}

let bank ={
    person: person,
    operation: operation,
    saldo: 1000
}

let value = 10

console.log(bank.person.name +', portador da conta corrente '+bank.person.contaCorrente + ' realizou um saque no valor de '+ value
+ ' reais. Seu saldo atual é: ' +bank.operation.sacar(  
    saldo, value)
)
