// let jogo1 = {
//     nome: 'Final fantasy'
// }
// let jogo2 = {
//     nome: 'Fallout'
// }


// let videoGame = {
//     nome: 'Xbox',
//     valor: 3000,
//     jogos: [jogo1, jogo2]
// }
// //antes do jogo3
// console.log(videoGame)

// let jogo3 = {
//     nome: 'Fifa'
// }

// videoGame.jogos.push(jogo3)
// //depois do jogo3 adicionado com o push
// console.log(videoGame)

let cliente = {
    nome: 'Ricardo',
    ultimoPedido: {
        produto: 'Xbox',
        valor: 3000,
        jogos: [
            { nome: 'Fifa'}
        ]
    }
}

console.log(cliente.ultimoPedido.jogos[0].nome)