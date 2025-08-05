let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
function iniciarJogo() {
    exibirTextoNaTela('h1' , 'Jogo do número secreto');
    exibirTextoNaTela('p' , 'Insira um número de 1 a 10');
}
iniciarJogo();


function verificarChute(){
    let chute = parseInt(document.querySelector('input').value);
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1' , 'Acertou!');
        let palavraTentativa = tentativa > 1 ? ' tentativas' : ' tentativa';
        let mensagemTentativa = `Você acertou o número secreto com ${tentativa}${palavraTentativa}!`;
        exibirTextoNaTela('p' , mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p' , 'O número secreto é menor!');
        } else {
            exibirTextoNaTela('p' , 'O número secreto é maior!');
        }
        tentativa++;
        limparCampo();
    }
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista === numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    iniciarJogo();
    document.getElementById('reiniciar').setAttribute('disabled', true);  
}
