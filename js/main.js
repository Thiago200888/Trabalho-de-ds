var botao = document.querySelector('#botao');

let numero = parseInt(prompt("Escolha um número de 0 a 10:"));
if (numero != 0 && numero != 1 && numero != 2 && numero != 3 && numero != 4 && numero != 5 && numero != 6 && numero != 7 && numero != 8 && numero != 9 && numero != 10){
        alert("Por favor escolha um número de 0 a 10.")
}


 function botaoHandler() {
        let final = Math.round(Math.random(0,1)*10);   
        if(numero == final){
           alert("Você acertou! O número sorteado foi: " + final)
    } else {
        alert("Você errou! O número sorteado foi: " + final)
    }
}
    botao.addEventListener('click', botaoHandler);

