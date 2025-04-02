document.getElementById("startButton").addEventListener("click", function() {
    comecar();
});

alert("Voce esta numa prova do ENEM, e precisa chutar o resultado de uma questao!")

function comecar() {
idade = prompt("quantos anos você tem?")
if(idade >= 16) {
    alert("você pode fazer a prova do ENEM")
}
// alert("vamos começar a jogar!")
if(idade >= 16) {
    let escolhaJogador = prompt ("A, B, C ou D?").toUpperCase()
    let escolhaComputador = Math.floor(Math.random()* 4) + 1;

    if(escolhaComputador == 1) {
        escolhaComputador = "A"
    }
    if(escolhaComputador == 2) {
        escolhaComputador = "B"
    }
    if(escolhaComputador == 3) {
        escolhaComputador = "C"
    }
    if(escolhaComputador == 4) {
        escolhaComputador = "D"
    }

    if(escolhaJogador == escolhaComputador) {
        alert("Voce acertou!!")
    } else {
        alert(`Voce errou, a resposta era ${escolhaComputador}`)
    }

    if(escolhaComputador == 1) {
        escolhaComputador = "A"
    }
    if(escolhaComputador == 2) {
        escolhaComputador = "B"
    }
    if(escolhaComputador == 3) {
        escolhaComputador = "C"
    }
    if(escolhaComputador == 4) {
        escolhaComputador = "D"
    }
}
}