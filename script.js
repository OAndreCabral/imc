// @ts-nocheck
document.getElementById("calculadoraImcInfoInputAltura").addEventListener("input", function (event) {
    const input = event.target;
    const valor = input.value;

    const valorNumerico = valor.replace(/[^\d.]/g, "");

    const partes = valorNumerico.split(".");
    const parteInteira = partes[0];
    const parteDecimal = partes.length > 1 ? partes[1] : "";

    let novoValor = parteInteira + "." + parteDecimal;

    input.value = novoValor;
});

function getNome() {
    const nome = document.getElementById("calculadoraImcInfoInputNome").value;
    return `${nome},`;
}

function getIdade() {
    const idade = document.getElementById("calculadoraImcInfoInputIdade").value;
    return `${idade} anos`;
}

function getSexo() {
    const selecionarSexo = document.getElementById("calculadoraImcInfoInputSexoSelected")
    const sexoEscolhido = selecionarSexo.value;
    return (sexoEscolhido.toUpperCase());
}

function getAltura() {
    const alturaInput = document.getElementById("calculadoraImcInfoInputAltura")
    const altura = parseFloat(alturaInput.value);
    return altura;
}

function getPeso() {
    const pesoInput = document.getElementById("calculadoraImcInfoInputPeso")
    const peso = pesoInput.value;
    return peso;
}

function getTextoImc() {
    return `Seu IMC é:`;
}

function calcularIMC() {
    const nome = getNome();
    document.getElementById("nome").innerHTML = `${nome}`;

    const idade = getIdade();
    document.getElementById("idade").innerHTML = `${idade}`;

    const altura = getAltura();
    document.getElementById("altura").innerHTML = `${altura.toFixed(2)}m - `;

    const peso = getPeso();
    document.getElementById("peso").innerHTML = `${peso}kg`;

    const sexo = getSexo();
    document.getElementById("sexo").innerHTML = `${sexo}`;

    const textoImc = getTextoImc();
    document.getElementById("textoSeuIMC").innerHTML = `${textoImc}`

    const imc = (peso / (altura * altura));

    let resultado;

    if (imc < 18.5) {
        resultado = `${imc.toFixed(2)} Baixo Peso`;
    } else if (imc < 24.9) {
        resultado = `${imc.toFixed(2)} Peso normal`;
    } else if (imc < 29.9) {
        resultado = `${imc.toFixed(2)} Sobrepeso`;
    } else if (imc < 34.9) {
        resultado = `${imc.toFixed(2)} Obesidade Grau 1`;
    } else if (imc < 39.9) {
        resultado = `${imc.toFixed(2)} Obesidade Grau 2`;
    } else {
        resultado = `${imc.toFixed(2)} Obesidade Grau 3`
    }
    document.getElementById("resultadoIMC").innerHTML = resultado;
}
