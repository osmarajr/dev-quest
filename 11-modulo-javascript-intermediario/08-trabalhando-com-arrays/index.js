let frutas = ['banana', 'maçã', 'laranja', 'pêra']

// for(let i = 0; i < frutas.length; i++){
//     console.log('Fruta: ' + frutas[i])
// }

frutas.forEach(function(item, indice, array){
    console.log('Fruta: ' + frutas[indice])
})
frutas.forEach(function(item){
    console.log('Fruta: ' + item)
})

//
frutas.push('manga')
console.log(frutas)

frutas.pop('manga')
console.log(frutas)

frutas.unshift('morango')
console.log(frutas)

frutas.indexOf('laranja')
console.log(frutas)
