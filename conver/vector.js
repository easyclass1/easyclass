function m1()
{
  var x1= document.getElementById("x1");
var x2= document.getElementById("x2");
var moleculas;
var masa;
var atomos;
masa=x1.value*x2.value;
moleculas=6.022*10**23*x1.value;
atomos=6.022*10**23*x1.value;
resultado1.innerHTML ="La masa es: "+ masa+" gr";
resultado2.innerHTML ="Numero de atomos: "+ atomos;
resultado3.innerHTML ="Numero de moleculas: "+ moleculas;
}
var resultado1 = document.getElementById("resultado1");
var resultado2 = document.getElementById("resultado2");
var resultado3 = document.getElementById("resultado3");
var b = document.getElementById("extraer1");
b.addEventListener("click", m1);

function m2()
{
  var x3= document.getElementById("x3");
var x4= document.getElementById("x4");
var mol2
var moleculas2;
var atomos2;
mol2=x3.value/x4.value;
moleculas2=6.022*10**23*mol2;
atomos2=6.022*10**23*mol2;
resultado4.innerHTML ="Numero de Moles es: "+ mol2+" gr/mol";
resultado5.innerHTML ="Numero de atomos: "+ atomos2;
resultado6.innerHTML ="Numero de moleculas: "+ moleculas2;
}
var resultado4 = document.getElementById("resultado4");
var resultado5 = document.getElementById("resultado5");
var resultado6 = document.getElementById("resultado6");
var b = document.getElementById("extraer2");
b.addEventListener("click", m2);


function m3()
{
  var x5= document.getElementById("x5");
var x6= document.getElementById("x6");
var mol3
var moleculas3;
var masa3;
mol3=x5.value/(6.022*10**23);
moleculas3=x5.value;
masa3=mol3*x6.value;
resultado7.innerHTML ="La masa es: "+ masa3+" gr/mol";
resultado8.innerHTML ="Numero de moles: "+ mol3;
resultado9.innerHTML ="Numero de moleculas: "+ moleculas3;
}
var resultado7 = document.getElementById("resultado7");
var resultado8 = document.getElementById("resultado8");
var resultado9 = document.getElementById("resultado9");
var b = document.getElementById("extraer3");
b.addEventListener("click", m3);


function m4()
{
  var x7= document.getElementById("x7");
var x8= document.getElementById("x8");
var mol4
var atomos4;
var masa4;
mol4=x7.value/(6.022*10**23);
atomos4=x7.value;
masa4=mol4*x8.value;
resultado10.innerHTML ="La masa es: "+ masa4+" gr/mol";
resultado11.innerHTML ="Numero de moles: "+ mol4;
resultado12.innerHTML ="Numero de moleculas: "+ atomos4;
}
var resultado10 = document.getElementById("resultado10");
var resultado11 = document.getElementById("resultado11");
var resultado12 = document.getElementById("resultado12");
var b = document.getElementById("extraer4");
b.addEventListener("click", m4);
