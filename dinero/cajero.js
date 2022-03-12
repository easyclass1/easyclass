function entregarDinero()
{
  var t1 = document.getElementById("dinero1");
  var t2 = document.getElementById("dinero2");
  var t3= document.getElementById("dinero3");
  var t4 = document.getElementById("dinero4");
  var t5 = document.getElementById("dinero5");
  var t6 = document.getElementById("dinero6");
  var t7 = document.getElementById("dinero7");
  var t8 = document.getElementById("dinero8");
  var t9 = document.getElementById("dinero9");
  var t10 = document.getElementById("dinero10");
  var t11 = document.getElementById("dinero11");
  var total;
  total=50*t1.value+100*t2.value+200*t3.value+500*t4.value+1000*t5.value+2000*t6.value+5000*t7.value+10000*t8.value+20000*t9.value+50000*t10.value+100000*t11.value;

  resultado.innerHTML ="El valor total de dinero es: $"+ total;

}

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
