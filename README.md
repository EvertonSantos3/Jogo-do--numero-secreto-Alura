# 🔢 Jogo do Número Secreto

Um mini game divertido de adivinhação onde o usuário precisa descobrir qual é o número secreto gerado aleatoriamente entre 1 e 10. O jogo fornece dicas se o número é maior ou menor, contabiliza as tentativas e ainda usa voz sintetizada para tornar tudo mais imersivo! 🧠🎤

## 🚀 Funcionalidades

- Geração aleatória do número secreto sem repetir os anteriores.
- Contador de tentativas.
- Feedback em texto e voz utilizando **responsiveVoice**.
- Dica automática se o número digitado é maior ou menor que o número secreto.
- Botão de reiniciar habilitado apenas após acerto.
- Validação de input com limpeza automática após cada tentativa.

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3 (opcional para estilização)
- JavaScript (Vanilla JS)
- [responsiveVoice.js](https://responsivevoice.org/) (para voz sintetizada)

## 🧠 Como funciona?

1. Ao iniciar o jogo, um número aleatório entre 1 e 10 é gerado.
2. O jogador deve inserir um palpite no campo de input.
3. O sistema verifica se o palpite é igual ao número secreto:
   - Se for menor: o jogo avisa que o número secreto é maior.
   - Se for maior: o jogo avisa que o número secreto é menor.
   - Se acertar: o jogo parabeniza, mostra o número de tentativas e libera o botão "Reiniciar".
4. Ao clicar em "Reiniciar", o número é refeito e o jogo reiniciado.

## 📦 Estrutura do Projeto

