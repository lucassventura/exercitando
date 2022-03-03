// Escreva uma função que retorne um número aleatório. 
// O número máximo retornado deve ser passado via parâmetro.

function numAleatorio (num){
    return Math.floor(Math.random() * num) + 1;
};

//console.log(numAleatorio(20));

// Escreva uma função que recebe a idade de uma pessoa;
// Se ela tem mais de 18 anos ela pode entrar na auto escola, imprima uma mensagem informando isso;
// Se ela tem menos, ela não pode, imprima outra mensagem com este aviso;
// Execute a função nos dois casos.

function cnh (idade){
    if (idade>=18){
        return "Maior de idade, pode tirar";
    }else{
        return "Menor de idade, não pode tirar";
    }
}

// console.log(cnh(23));
// console.log(cnh(15));

// Escreva uma função que detecta o tipo de dado passado;
// Verifique se é um: number, boolean ou string;
// Retorne uma mensagem para cada tipo;
// Execute uma função para cada caso.

function tipoDeDado (dado){
    if (typeof dado === 'number'){
        console.log("Esse dado é do tipo number")
    }else if (typeof dado === 'boolean'){
        console.log("Esse dado é do tipo boolean")
    }else if (typeof dado === 'string'){
        console.log("Esse dado é do tipo string")
    }
}

// tipoDeDado(123);
// tipoDeDado('123');
// tipoDeDado(false);

// Escreva uma função que receba um número negativo e retorne um número positivo;

function numeroAbsoluto (num){
    return Math.abs(num);
}

// console.log(numeroAbsoluto(-234));

// Escreva uma função que recebe uma string;
// Se o texto tiver mais de 10 caracteres imprima: "Texto muito longo"
// Se tiver menos, imprima: "Texto dentro do linmite"

function limiteDotexto (str){
    if (str.length > 10){
        console.log("Texto muito longo")
    }else{
        console.log("Texto dentro do linmite")
    }
}

// limiteDotexto("O rato roeu a roupa do rei de Roma");
// limiteDotexto("Eu te amo");

function elevandoAPotencia (base, potencia){
    return base ** potencia;
}

// console.log(elevandoAPotencia(2, 2));
// console.log(elevandoAPotencia(3, 2));
// console.log(elevandoAPotencia(5, 3));

// Escreva uma função que recebe um número, e o decrementa de 1 em 1 com um loop;
// Além disso imprima somente os números pares no console

function imprimePar (num){
    for(let i = num; i >= 0; i--){
        if(i % 2 === 0){
            console.log(i)
        }
    }
}

// imprimePar(10);