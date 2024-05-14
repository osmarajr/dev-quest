
/*

if(true){
    const mensagem = 'Ola'
}

console.log(mensagem)

//Não vai imprimir pois esta fora do escopo do bloco


if(true){
    var mensagem = 'Ola'
}

console.log(mensagem)
//atraves do var é possivel imprimir fora do escopo
*/
function falar(){
    let mensagem = 'Ola Mundo!'
    console.log(mensagem)
    function falarOutraCoisa(){
        
    }
}

falar() // chama a variavel dentro do escopo, não importa se é utilizado var, let ou const
console.log(mensagem)