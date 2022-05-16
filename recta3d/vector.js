function entregarDinero()
{
  var px= document.getElementById("px");
  var py= document.getElementById("py");
  var pz= document.getElementById("pz");
  var vx= document.getElementById("vx");
  var vy= document.getElementById("vy");
  var vz= document.getElementById("vz");

  resultado1.innerHTML ="Ecuaciones parametricas: ";
  resultado2.innerHTML ="x="+px.value+"+t*"+vx.value;
  resultado3.innerHTML ="y="+py.value+"+t*"+vy.value;
  resultado4.innerHTML ="z="+pz.value+"+t*"+vz.value;


  resultado5.innerHTML ="Ecuaciones simetricas: ";
  resultado6.innerHTML ="(x-"+px.value+")/("+vx.value+")="+"(y-"+py.value+")/("+vy.value+")="+"(z-"+pz.value+")/("+vz.value+")";

}

var resultado1 = document.getElementById("resultado1");
var resultado2 = document.getElementById("resultado2");
var resultado3 = document.getElementById("resultado3");
var resultado4 = document.getElementById("resultado4");
var resultado5 = document.getElementById("resultado5");
var resultado6 = document.getElementById("resultado6");

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

