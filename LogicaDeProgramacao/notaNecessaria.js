/* função para somar notas do Array;

outra função para calcular o total de pontos necessários para para ter a média desejada
(esta segunda calcula o total de pontos necessários considerando que você ainda tem +1 nota pendente).

a terceira função recebe um array e executa as duas funções anteriores,
pegando o total de pontos necessários e subtraindo deste o total de pontos já somados.

a execução retornará sempre a quantidade de pontos necessária (mesmo que seja >10 ou <=0),
    mas nestes dois casos mencionados, o programa informa que o estudante já está aprovado (ou reprovado).
*/
function somarArray () {
    let soma=0;
    for (let i=0; i<arguments.length; i++) {
        soma += arguments[i];
    }
    return soma;
}

function totalNecessario (mediaNecessaria, array) {
    let pontosNecessarios = mediaNecessaria * (array.length + 1);
    return pontosNecessarios;
}

function paraMedia (array) {
    let notaNecessaria = totalNecessario(mediaNecessaria, array) - (somarArray.apply(null, array));
        return notaNecessaria;
}

var mediaNecessaria, nota, mediaAluno, addNota, situacao;
const notas = [];

// EXECUÇÃO
mediaNecessaria = parseFloat(prompt("Qual a média necessária para aprovação? "))
do {
    nota = parseFloat(prompt("Digite a nota: "));
    
    notas.push(nota);
    
    mediaAluno = somarArray.apply(null, notas)/notas.length;
    console.log("Com " + notas.length + " notas, o aluno tem média " + mediaAluno.toFixed(2));
    console.log("Para alcançar média " + mediaNecessaria + " com apenas +1 nota, ele precisa tirar " + paraMedia(notas).toFixed(2));
    
    addNota = prompt("Ainda tem notas a adicionar? ( S  ou  N  )   ");
} while (addNota.toUpperCase() == "S" || addNota.toUpperCase() == "SIM");

if (paraMedia(notas) <= 0 || paraMedia(notas) > 10) {
    situacao = paraMedia(notas) <= 0 ? "Parabéns! Já está APROVADO" : "É, parece que você já está REPROVADO";
    console.log(situacao);
}