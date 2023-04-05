var A = 0
var B = 0
var C = 0
var delta = 0
var X1 = 0
var X2 = 0
let erro = document.getElementById('erro');
let xis1 = document.getElementById('x1');
let xis2 = document.getElementById('x2');

function capturar() {
    A = document.getElementById('valorA').value;
    B = document.getElementById('valorB').value;
    C = document.getElementById('valorC').value;

    delta = (B*B)-(4*A*C)

    function mostrarErro() {
        erro.style.display = "block";
        xis1.style.display = "none";
        xis2.style.display = "none";
    }

    if (delta <= 0){
        mostrarErro();
        return;
    }

    X1 = (-B + Math.sqrt(delta))/(2*A)
    X2 = (-B - Math.sqrt(delta))/(2*A)

    document.getElementById('x1').innerHTML = X1.toFixed(2);
    document.getElementById('x2').innerHTML = X2.toFixed(2);
}