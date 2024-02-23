let botao1 = document.querySelector("#calcularSoma")

botao1.addEventListener('click' ,function(){
    let primeiroValor = parseFloat(document.querySelector("#input1").value)
    let segundoValor = parseFloat(document.querySelector("#input2").value)

    let resultado = primeiroValor + segundoValor

    document.querySelector("#resultado").innerText = "Resultado: " + resultado
})

function calcularSubtracao(){
    let input1 = parseInt(document.querySelector("#input1").value)
    let input2 = parseInt(document.querySelector("#input2").value)

    let resultado = input1 - input2

    document.querySelector("#resultado").innerText = "Resultado: " + resultado
}
function calcularDivisao(){
    let input1 = parseInt(document.querySelector("#input1").value)
    let input2 = parseInt(document.querySelector("#input2").value)

    let resultado = input1 / input2

    document.querySelector("#resultado").innerText = "Resultado: " + resultado
}
function calcularMultiplicacao(){
    let input1 = parseInt(document.querySelector("#input1").value)
    let input2 = parseInt(document.querySelector("#input2").value)

    let resultado = input1 * input2

    document.querySelector("#resultado").innerText = "Resultado: " + resultado
}