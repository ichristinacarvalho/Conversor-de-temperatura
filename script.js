function converter() {

    //ENTRADA
    let valor = Number(document.getElementById("valor").value);
    let temperatura = document.getElementById("tipo").value;

    //VALIDAÇÃO
    if (valor <= 0) {
        alert("Digite um valor válido.");
        return;
    }

    if (temperatura === "") {
        alert("Escolha a temperatura que deseja converter.");
        return;
    }

    //PROCESSAMENTO
    let resultado;

    if (temperatura === "celsius") {
        resultado = (valor * 1.8) + 32;

    } else {
        resultado = (valor - 32) / 1.8;
    }

    //SAIDA
    document.getElementById("resultado").innerHTML = `O resultado é ${resultado}`.toFixed(2);
}

//LIMPAR CAMPOS
function limparCampos() {

    //INPUT
    document.getElementById("valor").value = "";
    document.getElementById("tipo").value = "";
}