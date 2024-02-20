var botao = document.querySelector('#botao');
sorteador();

function sorteador() {
    let numero = parseInt(prompt("Escolha um número de 1 a 10:"));
    if (numero != 1 && numero != 2 && numero != 3 && numero != 4 && numero != 5 && numero != 6 && numero != 7 && numero != 8 && numero != 9 && numero != 10){
        alert("Por favor escolha um número de 1 a 10.")
    }
}

 function botaoHandler() {
        alert('Botão clicado');
    }
    botao.addEventListener('click', botaoHandler);