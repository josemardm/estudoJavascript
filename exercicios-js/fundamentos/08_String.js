const nome = 'josemar damasceno 003';
console.log(nome);

//retorna um caracter em uma determinada posição
console.log(nome.charAt(4)); //letra m
console.log(nome.charCodeAt(4)); //valor letra m me ASCII
console.log(nome.indexOf('m')); //index da letra m na string
console.log(nome.substring(8)); //tras uma substring a partir de index
console.log(nome.substring(0,7)); //tras uma substring dentro de um intervalo
console.log("Meu nome: " .concat(nome) .concat(" ... Ola ...")); // concatenando strings
console.log(nome.replace('j', 'J')); //Trocando uma letra por outraconsole.log(nome.replace(/\d/, 'w')); //usando regx toca o primeiro digitos da string
console.log(nome.replace(/\d/g, 'w')); //usando regx toca todos os digitos da string

//transformando uma string em arrya
const frase = 'Olhe a casa olhe o bosque quem mora na casa do bosque';
console.log(frase.split(' '));

