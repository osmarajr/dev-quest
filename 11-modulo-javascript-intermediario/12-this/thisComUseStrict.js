// 'use strict' //evita de escopo vazando

// console.log(this)
// console.log(window === this)

// this.name = 'Ricardo'
// function saudar(){
//     console.log('This no contexto da funcao', this)
//     console.log('Olá, ' + this.name)
// }

// saudar()

// let usuario = {
//     nome: 'Ricardo',
//     saudar: function(){
//         console.log('this no contexto do metodo', this)

//         console.log('this.nome no contexto do metodo', this.nome)
//     }
// }

// usuario.saudar()

// let comida = {
//     nome: 'brocolis',
//     temperatura: 0
// }

// comida.cozinhar = function(comidaParaCozinhar, temperaturaDeCozimento){
//     comidaParaCozinhar.temperatura = temperaturaDeCozimento;
// }

// console.log(comida)

// comida.cozinhar(100)
// console.log(comida)
let comida = {
    nome: 'brocolis',
    temperatura: 0
}

comida.cozinhar = function(temperaturaDeCozimento){
    console.log('this no contexto no objeto comida', this)
    comidaParaCozinhar.temperatura = temperaturaDeCozimento;
    this.temperatura = temperaturaDeCozimento;
}

console.log(comida)

comida.cozinhar(100)
console.log(comida)