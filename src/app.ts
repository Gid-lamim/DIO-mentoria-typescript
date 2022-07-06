// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('addBtn')!;
let botaoLimpar = document.getElementById('clearBtn') ;
let campoSaldo = document.getElementById('saldoText') ;
let inputValor = document.getElementById('campo-valor') as HTMLInputElement;
let saldoAtual = 0;

//campoSaldo.value = 0   <-- isso não funciona em TS, pois o campo pode não existir.
if (campoSaldo){
    campoSaldo.innerHTML = "0";
};

function limpaCampo(){
    inputValor.value = "";
};

function somarAoSaldo(valorInput: number): void {
    saldoAtual += valorInput;
    if(campoSaldo){
        campoSaldo.innerHTML = saldoAtual.toString(); //o  innerHTML pede string, então devo transformar em string primeiro
    }
    limpaCampo();
 }

 function limparSaldo() {
    if(campoSaldo){
        campoSaldo.innerHTML = '0';
    }
 }

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(inputValor.value)); //devemos transformar em number primeiro
    console.log(Number(inputValor.value));
 });

 if(botaoLimpar){
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}

// /**
//     <h4>Valor a ser adicionado: <input id="soma"> </h4>
//     <button id="atualizar-saldo">Atualizar saldo</button>
//     <button id="limpar-saldo">Limpar seu saldo</button>
//     <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
//  */