// código para calcular calcular média a partir de um array de notas fornecidas pelo user.

function somarArray () {
    var soma=0;
    for (let i=0; i<arguments.length; i++) {
        soma += arguments[i];
    }
    return soma;
}

var nota, addNota, media, situacao;
const notas = [];


do {
    nota = parseFloat(prompt("Digite a nota: "));
    
    notas.push(nota);
    
    addNota = prompt("Ainda tem notas a adicionar? ( S  ou  N  )   ");
} while (addNota.toUpperCase() == "S" || addNota.toUpperCase() == "SIM");


media = somarArray.apply(null, notas)/notas.length;

situacao = media >= 7 ? "APROVADO" : "REPROVADO";

console.log("Com " + notas.length + " notas e " + somarArray.apply(null, notas) + " pontos somados, resultando numa média " + media.toFixed(2) + ", o estudante está " + situacao);