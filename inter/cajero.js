function entregarDinero()
{
  var t1 = document.getElementById("t1");
  var t2 = document.getElementById("t2");
  var t3= document.getElementById("t3");
  var t4 = document.getElementById("t4");
  var t6= document.getElementById("t6");
  var t5;
  t5=((t4.value-t6.value)/(t1.value-t3.value))*(t2.value-t1.value)+1*t4.value;

  resultado.innerHTML=t5;

}

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);