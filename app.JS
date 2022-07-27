const inputA = document.getElementById('a');
const inputB = document.getElementById('b');

const btnSum = document.querySelector('.js-button-sum');
const btnRes = document.querySelector('.js-button-res');
const btnMul = document.querySelector('.js-button-mul');
const btnDiv = document.querySelector('.js-button-div');

var result = document.querySelector('.js-result-sum');
var result = document.querySelector('.js-result-res');
var result = document.querySelector('.js-result-mul');
var result = document.querySelector('.js-result-div');


//Funciones para los operandos 

var sumar = (a,b) => {
  result.innerHTML = a.value !== "" && b.value !== "" ? parseInt(a.value) + parseInt(b.value) : "Error, debes introducir dos valores" ;
}

var restar = (a,b) => {
  result.innerHTML = a.value !== "" && b.value !== "" ? parseInt(a.value) - parseInt(b.value) : "Error, debes introducir dos valores" ;
  }

var multiplicar = (a,b) => {
  result.innerHTML = a.value !== "" && b.value !== "" ? parseInt(a.value) * parseInt(b.value) : "Error, debes introducir dos valores" ;
  }

var dividir = (a,b) => {
  result.innerHTML = a.value !== "" && b.value !== "" ? parseInt(a.value) / parseInt(b.value) : "Error, debes introducir dos valores" ;
  }

//Eventos que llaman a las funciones

  btnSum.addEventListener('click', () => sumar(inputA, inputB));
  btnRes.addEventListener('click', () => restar(inputA, inputB));
  btnMul.addEventListener('click', () => multiplicar(inputA, inputB));
  btnDiv.addEventListener('click', () => dividir(inputA, inputB));


