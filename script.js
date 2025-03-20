function verificarPar(numero) {
    if (numero % 2 === 0) {
        console.log("par");
    }
    else{
        console.log("impar");
    }
}
verificarPar(1)

function calcular(n1, n2){
    console.log(n1+n2);
    console.log(n1-n2);
    console.log(n1*n2);
    console.log(n1/n2);
}
calcular(4, 2);

let i = 10;
while (i>=1) {
    console.log(i);
    i--;
}

function inverterTexto(str){
    str = str.split(""); 
    str = str.reverse(); 
    str = str.join(""); 
    console.log(str);
}
inverterTexto("bom dia");

function contarCaracteres(str) {
    console.log(str.length)
}
contarCaracteres("animal")

var carro = new Object();
carro.marca = "Fiat";
carro.modelo = "uno";
carro.ano = "2010";
console.log(carro.modelo);

function mensagemPersonalizada (nome, mensagem){
    
}