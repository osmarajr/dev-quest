/*
    function nomeDaFuncao(){
        <bloco de execução>
    }

    nomedaFuncao()
*/
/*
    function nomeDaFuncao(parametro1, parametro2){
        <bloco de execução>
    }

    nomedaFuncao(parametro1, parametro2)
*/

function incentivarQuest(nomeQuester){
    alert('Muito bem ' + nomeQuester +', você chegou ao JS, continue assim!')
}

incentivarQuest('Roberto')

function soma(numero1, numero2){
    console.log(numero1 + numero2)
}

// soma(1,3)

let resultadoDaSoma = soma(1,3)
console.log(resultadoDaSoma)

resultadoDaSoma = soma(resultadoDaSoma, 10)
console.log(resultadoDaSoma)