// (OBRIGATÓRIO) ​ Faça um programa que escreva na tela os números múltiplos de 5
// entre 0 e 1000, usando um comando For. Não utilize nenhum IF/THEN neste programa,
// apenas o comando For.

let readlineSync = require('readline-sync')

for (let contador = 0; contador <= 1000; contador = contador + 5) {
    console.log(contador)
}