function buscaLetra (voto) {
    if (isNaN(voto)) {
        throw new Error;
        return true;
    } else {
        return false;
    }
}

function confereVoto (voto) {
    if (parseInt(voto) == CANDIDATOS.candX) {
        votosX++;
        console.log ("Voto computado!");
    } else if (parseInt(voto) == CANDIDATOS.candY) {
        votosY++;
        console.log ("Voto computado!");
    } else if (parseInt(voto) == CANDIDATOS.candZ) {
        votosZ++;
        console.log ("Voto computado!");
    } else {
        votosNuloBranco++;
        console.log ("Voto ANULADO!");
    }
}

const CANDIDATOS = {
    candX: 889,
    candY: 847,
    candZ: 515,
    nuloBranco: 0
}

var votosX = 0, votosY = 0, votosZ = 0, votosNuloBranco = 0;
var continuar = true;
do {
    while (true) {
        console.log(CANDIDATOS);
        var voto = prompt("Agora digite o número: ");
        try {
            buscaLetra(voto);
            if (buscaLetra(voto) == false) {
                confereVoto(voto);
            }
        } catch (Error) {
            console.log ("Tu é burro? Só digite números.");
            break;
        }
        continuar = prompt("\nVocê quer continuar votando?  ( S  ou N  )");
        if (continuar.toUpperCase() == "S" || continuar.toUpperCase() == "SIM") {
            continuar = true;
        } else {
            continuar = false;
            break;
        }
    }
} while (continuar);

console.log("\nCandidato X: " + votosX + "\nCandidato Y: " + votosY + "\nCandidato Z: " + votosZ + "\nBrancos e Nulos: " + votosNuloBranco);