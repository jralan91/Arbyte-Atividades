let rs = require('readline-sync')

let palavra = rs.question('Digite uma palavra: ')

if(palavra.indexOf('a') >= 0 ||palavra.indexOf('e') >= 0 ||palavra.indexOf('i') >= 0 ||palavra.indexOf('o') >= 0 ||palavra.indexOf('u') >= 0 ) {
    console.log('Sua palavra têm vogais.')
} else {
    console.log('Sua palavra não tem vogais')
}
  

