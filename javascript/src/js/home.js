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

// let person = {
//     name: 'Gabriel',
//     age: '24',
//     contaCorrente: 123
// }

// let operation ={
//     sacar: function(saldo, valor){
//         return saldo -= valor
//     },
//     depositar: function(saldo, valor){
//         return saldo += valor
//     }
// }

// let bank ={
//     person: person,
//     operation: operation,
//     saldo: 1000
// }

// let value = 10

// console.log(bank.person.name +', portador da conta corrente '+bank.person.contaCorrente + ' realizou um saque no valor de '+ value
// + ' reais. Seu saldo atual é: R$' +bank.operation.sacar(  
//     saldo, value)
// )

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Métodos de Arrays
let arr1 = [1,2,3,4,5]
let arr2 = ['a','b','c']

//Concatenação

let arrFinal = arr1.concat(arr2)
console.log(arrFinal)

//Every
// let x = arrFinal.every(
//     function verifyElement(el, index, obj){
//         return(typeof el == 'number')
//     }
// )
// console.log(x)

//Filter

// let filterX = arrFinal.filter(
//     function verifyElement(el, index, obj){
//         return(el >3)
//     }
// )
// console.log(filterX)

//foreach


// let data = ""
// let forEachX = arrFinal.forEach(
//     function verifyArray(elem, ind, obj){
//         if(typeof elem == 'number'){
//             data += "Índice "+ind+":"+elem+" (este elemento é um número)"+'\n'
//         }else{
//             data += "Índice "+ind+":"+elem+" (este elemento não é um número)"+'\n'
//         }
//     }
// )
// console.log(data)

//indexOf

let indexOfX = arrFinal.indexOf('a')
    if(indexOfX == -1){
        alert('Este dado não existe')
    }
    console.log(indexOfX)
