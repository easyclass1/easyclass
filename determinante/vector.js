function entregarDinero()
{
  var x1= document.getElementById("x1");
var x2= document.getElementById("x2");
var x3= document.getElementById("x3");
var x4= document.getElementById("x4");
var x5= document.getElementById("x5");
var x6= document.getElementById("x6");
var x7= document.getElementById("x7");
var x8= document.getElementById("x8");
var x9= document.getElementById("x9");

var det;
det=(x1.value*x5.value*x9.value+x2.value*x6.value*x7.value+x3.value*x4.value*x8.value)-(x7.value*x5.value*x3.value+x8.value*x6.value*x1.value+x9.value*x4.value*x2.value);

resultado.innerHTML ="El determinante de A es: "+ det;

}

var resultado = document.getElementById("resultado");

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
