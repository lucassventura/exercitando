// Crie um array com 5 itens;
// Acesse o item 1,3,4;

/* 
let array = [6,5,8,7,4];

console.log(array[0]);
console.log(array[2]);
console.log(array[3]); 
*/

// ---------------------------------------------------------------------------------------------------------------------

// Crie um array comn 2 elementos e outro com 4
// Imprima o número de elementos de cada um na tela

/*
let letras = ["a", "e"];
let letras2 = ["a", "e", "i", "o"];

console.log(letras.length);
console.log(letras2.length);
*/

// ---------------------------------------------------------------------------------------------------------------------

// Crie um objeto onibus;
// Com as propriedade: rodas = 8; passageiros = 40; portas =2;
// Imprima todas as propriedades no console

/*
const onibus = {
    rodas: 8,
    passageiros: 40,
    portas: 2
}

console.log(onibus);
console.log(onibus.rodas);
console.log(onibus.portas);
*/

// ---------------------------------------------------------------------------------------------------------------------

// Adicione a propriedade janelas no onibus, delete a propriedade rodas,
// imprima a propriedade janelas no console

/*
const onibus = {
    rodas: 8,
    passageiros: 40,
    portas: 2
}

onibus.janelas = 10;
delete onibus.rodas;

console.log(onibus.janelas);
console.log(onibus);
console.log(onibus.rodas);
*/

// ---------------------------------------------------------------------------------------------------------------------

// Crie um array com 5 nomes, incluindo o seu;
// Verifique se o seu nome existe no array;
// Se existir imprima alguma mensagem no console

/*
const nomes = ["Rogerio", "Lucas", "Miguel" , "Angelo", "Joaquim"];

if(nomes.includes("Lucas") === true){
    console.log("Nome encontrado");
}else{
    console.log("Nome não encontrado");
};
*/

// ***********************************************************************************************************************

// O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.

// array.includes(searchElement[, fromIndex])

// searchElement - O elemento a buscar
// fromIndex - Opcional. A posição no array de onde a busca pelo searchElement se iniciará. Por padrão, 0.

// ***********************************************************************************************************************

// Crie dois arrays, um com mais de 5 elementos e outro com menos;
// Faça uma função que verifica o número de elementos;
// Se possuir menos que 5, imprima "Poucos elementos" no console;
// Se tiver mais, imprima "Muitos elementos"

/*
const array1 = [2,5,5,6,65,24,36];
const array2 = ["a", "d", "s"];

function numElementos (arr){
    return arr.length > 5 ? "Muitos elementos" : "Poucos elementos"
};

console.log(numElementos(array1));
console.log(numElementos(array2));
*/

// ---------------------------------------------------------------------------------------------------------------------

// Crie um array com 5 elementos;
// Faça uma iteração entre todos eles e imprima no console o valor

/*
let arr = [5,4,3,2,1];

for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
*/

// ---------------------------------------------------------------------------------------------------------------------

// Crie um JSON com 3 propriedades;
// Atribua ele a uma variável;
// Acesse as propriedades imprimindo no console

// const pessoa = {
//     "nome" : "Lucas",
//     "idade": 37,
//     "hobby": "gamer"
// }

// console.log(pessoa["nome"]);
// console.log(pessoa["idade"]);
// console.log(pessoa["hobby"]);

// ---------------------------------------------------------------------------------------------------------------------

// Crie um array a partir de uma frase;
// Imprima cada palavra do array, no console por meio de um for

// let frase = "O rato roeu a roupa do rei de Roma";

// let array = frase.split(" ");

// for( let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }

// ***********************************************************************************************************************

// O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método.

// str.split([separator[, limit]])

// Parâmetros:
// O caso mais simples é quando o separador é apenas um único caractere que será usado para dividir a string. Por exemplo, uma string contendo valores separados por tabulação (TSV) poderia ser analisada passando um caractere de tabulação como separador, como este: myString.split ("\ t").
// Se o separator contiver vários caracteres, toda a sequência de caracteres deve ser encontrada para ser dividida.
// Se o separator for omitido ou não aparecer dentro da str, o array retornará um elemento consistindo em toda a string.
// Se o separator aparecer no início (ou no final) da string, ele ainda terá o efeito de divisão. O resultado é uma string vazia (ou seja, str.length == 0), que aparece na primeira (ou última) posição do array retornado.
// Se o separator for uma string vazia (""), str será convertido em um array contendo cada um de seus caracteres em UTF-16.

// ***********************************************************************************************************************

// Crie um objeto calculadora;
// Que tem os seguintes métodos: somar, subtrair, multiplicar e dividir
// Os métodos so devem aceitar dois parâmetros;
// Utilize cada um dos métodos e imprima os valores no console

// const calculadora = {
//     somar: (a,b) => a + b,
//     subtrair: (a,b) => a - b,
//     multiplicar: (a,b) => a * b,
//     dividir: (a,b) => a / b
// }

// console.log(calculadora.somar(8,7));
// console.log(calculadora.subtrair(8,7));
// console.log(calculadora.multiplicar(8,7));
// console.log(calculadora.dividir(8,7));








