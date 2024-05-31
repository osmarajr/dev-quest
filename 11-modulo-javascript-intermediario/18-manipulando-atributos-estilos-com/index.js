function alterarCorDeFundoPrimeiroPost(){
    let posts = document.getElementsByClassName('post');

    console.log(posts)

    let primeroPost = posts[0];
    console.log('primeiroPost', primeroPost)
    primeroPost.style.backgroundColor = 'red';
}

function aumentarFontSegundoPost(){
    let textoPosts = document.getElementsByClassName('texto-post');

    console.log(textoPosts[1].classList);

    textoPosts[1].classList.add('fonte-grande')
}

function marcarRadio(genero){
    let radioMasculino = document.getElementById('genero-masculino');

    let radioFeminino = document.getElementById('genero-feminino');

    if(genero === 'M'){
        radioMasculino.checked = true;
    }else if(genero === 'F'){
        radioFeminino.checked = true;
    }
}