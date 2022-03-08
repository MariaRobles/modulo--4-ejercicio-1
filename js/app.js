
var numA = () => parseInt(document.getElementById("numberA").value);
var numB = () => parseInt(document.getElementById("numberB").value);

//operaciones

var sumNumber = () => numA() + numB();
var restNumber = ()  => numA() - numB();
var multiplyNumber = () => numA() * numB();
var divNumber = ()  => numA() / numB();

//metemos resultados en el DOM

var resultadoSum = () => document.getElementById("result").innerText = sumNumber();
var resultadoRest = () => document.getElementById("result").innerText = restNumber();
var resultadoMulti = () => document.getElementById("result").innerText = multiplyNumber();
var resultadoDiv = () => document.getElementById("result").innerText = divNumber();

//evento para que al dar click haga la función de meter el resultado

document.getElementById("sumar").addEventListener("click", validateSum );
document.getElementById("restar").addEventListener("click", resultadoRest);
document.getElementById("multiplicar").addEventListener("click", resultadoMulti);
document.getElementById("dividir").addEventListener("click", resultadoDiv);

 

function validateSum (){
if (isNaN(numA())|| isNaN(numB())){
   document.getElementById("result").innerText = "Rellena los campos numéricos";
}else{
  resultadoSum();
}
}


