function entregarDinero()
{
  var px= document.getElementById("px");
  var py= document.getElementById("py");
  var pz= document.getElementById("pz");
  var vx= document.getElementById("vx");
  var vy= document.getElementById("vy");
  var vz= document.getElementById("vz");

  var punto;
  punto=px.value*vx.value+py.value*vy.value+pz.value*vz.value;

  resultado1.innerHTML ="Ecuacion del plano: "+vx.value+"*x+"+vy.value+"*y+"+vz.value+"*z="+punto;
}
var resultado1 = document.getElementById("resultado1");

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
