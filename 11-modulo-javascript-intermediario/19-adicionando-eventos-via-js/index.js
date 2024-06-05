// let selectDeEstado = document.querySelector("select[name='estado']");
// //observa quando um evento é ativado
// selectDeEstado.addEventListener('change', function (){
//     alert('mudou o select');
// })


//outro modo
// document
//     .querySelector("select[name='estado']")
//     .addEventListener('change', function (){
//     alert('mudou o select');
// })

document
    .querySelector("select[name='estado']")
    .addEventListener('change', function (event){
        console.log(event.target.value)
})