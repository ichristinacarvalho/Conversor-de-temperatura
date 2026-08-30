function converter() {

    //pegando o valor dos inputs
    let InputValor = document.getElementById("valor").value;
    let valor = Number(InputValor);
    let temperatura = document.getElementById("tipo").value;

    //validando valor vazio e temperatura
    if (InputValor === "") {
        alert("Digite um valor válido.");
        return;
    }

    if (temperatura === "") {
        alert("Escolha a temperatura que deseja converter.");
        return;
    }

    //processando as temperaturas
    let resultado;
    let unidadeOrigem;
    let unidadeDestino;

    if (temperatura === "celsius") {
        resultado = (valor * 1.8) + 32;
        unidadeOrigem = "°C";
        unidadeDestino = "°F";

    } else {
        resultado = (valor - 32) / 1.8;
        unidadeOrigem = "°F";
        unidadeDestino = "°C";
    }

    //saída
    document.getElementById("resultado").innerHTML = `O resultado da conversão de ${valor} ${unidadeOrigem} é ${resultado.toFixed(2)} ${unidadeDestino}.`;

    //limpar cinputs
    document.getElementById("valor").value = "";
    document.getElementById("tipo").value = "";
}

//LIMPAR CAMPOS
function limparCampos() {
    document.getElementById("valor").value = "";

    document.getElementById("tipo").value = "";

    document.getElementById("resultado").innerHTML = "";
}

/* --- EVENTOS --- */
//chamando o evento de converter
document.getElementById("btn-converter").addEventListener("click", converter);

//chamando o evento de limpar campos
document.getElementById("btn-limpar").addEventListener("click", limparCampos);