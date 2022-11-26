// function writeName (name) {
//     return "Olá, " + name
// }

// console.log(writeName("Gabriel"));

// function calcAge(age) {
//     if (age >= 18) {
//         return "Você é maior de idade"
//     } else {
//         return "Você é menor de idade"
//     }
// }
// console.log(calcAge(17))

function verifyPayment(price, type) {
    if ( type === 1 ) {
        return "Valor total: " + (price - (price * 0.10)).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    } else if (type === 2 ) {
        return "Valor total: " + (price - (price * 0.15)).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    } else if (type === 3 ) {
        return "Valor total: " + (price).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    } else {
        return "Valor total: " + (price + (price * 0.10)).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    }
}

console.log(verifyPayment(300, 1))
console.log(verifyPayment(300, 2))
console.log(verifyPayment(300, 3))
console.log(verifyPayment(300, 4))