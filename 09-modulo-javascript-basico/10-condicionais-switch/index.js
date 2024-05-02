// switch(parametro){
//  case valor1:
//      <bloco de delcaracao>
//        break
//  case valor2:
//        <bloco de declaracao></bloco>
//         break
//}

// let nomeFilme = 'Homem Aranha'

// switch(nomeFilme){
//     case 'Vingadores':
//         console.log('É o filme dos Vingadores')
//         break
//     case 'Batman vs Superman':
//         console.log('É o filme do Batman vs Superman')
//         break
//     default:
//         console.log('É outro filme')
// }

let avaliacao = 1

switch(avaliacao){
    case 1:
    case 2:
        console.log('Filme Ruim')
        break // lembrar de usar o break para quebrar o case aqui
    case 3:
    case 4:
        console.log('Filme Mediano')
        break
    case 5:
        console.log('Filme excelente')
        break
    default:
        console.log('Nota inválida')
        break
}