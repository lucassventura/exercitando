
// Exemplo: Classe
// class Cachorro {
//     constructor(cor){
//             this.cor = cor;
//     }

//     latir() {
//         console.log("Au, au");
//     }
// }

// ***********************************************************************************************************************

// Crie uma classe que simula uma conta em um banco;
// Deve conter a propriedade saldo;
// E os métodos de depósito e saque;
// Teste os métodos

// class Conta {
//     constructor (saldo){
//         this.saldo = saldo;
//     }
//     desposito(valor) {
//         return this.saldo += valor;
//     }
//     saque(valor){
//         return this.saldo-=valor;
//     }
// }

// let primeiraConta = new Conta(0);

// console.log(primeiraConta);
// primeiraConta.desposito(254);
// console.log(primeiraConta);
// primeiraConta.saque(50);
// console.log(primeiraConta);

// ---------------------------------------------------------------------------------------------------------------------

// Crie uma classe que simule um carrinho de compras;
// Propriedades: itens, quantidade total e valor total;
// Crie os métodos para adicionar e remover intens;


const banana = {
    nome: "banana",
    valor: 3
};
const cerveja = {
    nome: "cerveja",
    valor: 20
};

const feijao = {
    nome: "feijao",
    valor: 10
};

class Carrinho {
    constructor (itens, quantidadeTotal, valorTotal){
        this.itens = itens;
        this.quantidadeTotal = quantidadeTotal;
        this.valorTotal = valorTotal;
    }
    adicionarItem(item){
       this.itens.push(item);
       this.valorTotal += item.valor;
       this.quantidadeTotal++;
    }
    removerItem(item){
        this.itens.splice(this.itens.indexOf(item), 1);
        this.valorTotal -= item.valor;
        this.quantidadeTotal--;
     }
}

let novoCarrinho = new Carrinho([banana,], 2, 6);

// novoCarrinho.adicionarItem(cerveja);
// novoCarrinho.adicionarItem(banana);
// novoCarrinho.adicionarItem(cerveja);

// novoCarrinho.removerItem(banana);
// novoCarrinho.adicionarItem(feijao);
// console.log(novoCarrinho);

// ---------------------------------------------------------------------------------------------------------------------

// Crie um objeto que simula o endereço de um cliente;
// Propriedades: rua, bairro, cidade, estado;
// No construtor o endereço já deve ser definido por completo;
// Crie métodos para atualizar todas as propriedades

class Endereco {
    constructor(){
        this.rua = "Felicidade";
        this.bairro = "Brotas";
        this.cidade = "Salvador";
        this.estado = "BA";
    }

    atualizarRua(rua){
        this.rua = rua;
    }
    atualizarBairro(bairro){
        this.bairro = bairro
    }
    atualizarCidade(cidade){
        this.cidade = cidade;
    }
    atualizarEstado(estado){
        this.estado = estado;
    }
}

let novoEndereco = new Endereco;

// console.log(novoEndereco);
// novoEndereco.atualizarRua("Padre Daniel Lisboa");
// novoEndereco.atualizarBairro("Daniel Lisboa");
// console.log(novoEndereco);

// ---------------------------------------------------------------------------------------------------------------------

// Crie uma classe que simule um carro;
// Propriedades: marca, cor, gasolina restante;
// Crie um método de dirigir o carro que vá diminuindo a gasolina gradativamente;
// E um de abastecer para aumentar a gasolina quando necessário

class Carro{
    constructor(marca, cor, gasolinaRestante){
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
    }

    dirigir(){
        return this.gasolinaRestante -= 10;
    };
    abastecer(litrosDeGasolina){
        return this.gasolinaRestante += litrosDeGasolina
    };
}

let newCarro = new Carro("Palio", "Vermelho", 0);

// console.log(newCarro);
// newCarro.abastecer(10);
// newCarro.abastecer(10);
// newCarro.abastecer(10);
// newCarro.abastecer(10);
// console.log(newCarro);
// newCarro.dirigir();
// newCarro.dirigir();
// console.log(newCarro);

// ---------------------------------------------------------------------------------------------------------------------

// Crie uma classe conta bancária;
// Com as propriedades: saldo na conta corrente, saldo conta poupança, juros da poupança;
// Crie os métodos de depósito e saque, também um método para transferir dinheiro da poupança para a corrente;
// Além disso crie uma conta especial herdeira da conta normal;
// Na conta especial os juros são o dobro da conta normal;

class Conta{
    constructor (saldoCorrente, saldoPoupanca, jurosPoupanca){
        this.saldoCorrente = saldoCorrente;
        this.saldoPoupanca = saldoPoupanca;
        this.jurosPoupanca = jurosPoupanca;
    }

    deposito(valor){
        this.saldoCorrente += valor;
    };

    saque(valor){
        this.saldoCorrente -= valor;
    };

    transfereciaPoupanca(valor){
        this.saldoCorrente -= valor;
        this.saldoPoupanca += valor;
    };
    
    transfereciaCorrente(valor){
        this.saldoCorrente += valor;
        this.saldoPoupanca -= valor;
    };

    jurosDeAniversario(){
        let juros = (this.saldoPoupanca * this.jurosPoupanca) / 100;
        this.saldoPoupanca += juros;
    }
}

let newConta = new Conta (1000, 5000, 1);
// console.log(newConta);
// newConta.saque(500);
// console.log(newConta);
// newConta.deposito(5000);
// console.log(newConta);
// newConta.transfereciaPoupanca(3000);
// console.log(newConta);

class ContaEspecial extends Conta {
    constructor (saldoCorrente, saldoPoupanca, jurosPoupanca){
        super (saldoCorrente, saldoPoupanca, jurosPoupanca*2);
    };
};

let newContaEspecial = new ContaEspecial (3000, 5000, 1);

// console.log(newContaEspecial);
// newContaEspecial.saque(500);
// console.log(newContaEspecial);
// newContaEspecial.deposito(5000);
// console.log(newContaEspecial);
// newContaEspecial.transfereciaPoupanca(100);
// console.log(newContaEspecial);









