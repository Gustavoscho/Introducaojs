function verificarPar(numero) {
    if (numero % 2 === 0) {
        console.log("par");
    }
    else {
        console.log("impar");
    }
}
verificarPar(1)

function calcular(n1, n2) {
    console.log(n1 + n2);
    console.log(n1 - n2);
    console.log(n1 * n2);
    console.log(n1 / n2);
}
calcular(4, 2);

let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

function inverterTexto(str) {
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

const carro = {
    marca: "Fiat",
    modelo: "uno",
    ano: "2010",
};
console.log(carro.modelo);

function mensagemPersonalizada(nome, msg) {
    console.log(nome + msg);
}
mensagemPersonalizada("gustavo ", "olá");

function media(n1, n2, n3){
    console.log((n1+n2+n3)/3)
}
media(4,5,8);

for(multiplo=1; multiplo<=20; multiplo++){
    if (multiplo % 3 == 0)
    {
       console.log(multiplo + " multiplo de 3");
    }else{
        console.log(multiplo + " não é multiplo de 3");
    }
}

function verificarPalindromo(str){
    let str2 = str
    str = str.split("");
    str = str.reverse();
    str = str.join("");
    if (str = str2)
    {
       console.log("palindromo verdadeiro");
    }else{
        console.log("palindromo falso");
    }
}
verificarPalindromo(arara);