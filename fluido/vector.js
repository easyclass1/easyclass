

function Reynolds()
{
var x1= document.getElementById("x1");
var x2= document.getElementById("x2");
var x3= document.getElementById("x3");
var x4= document.getElementById("x4");
var x5;

x5=(x1.value*x2.value*x3.value)/x4.value;

resultado1.innerHTML ="El numero Reynolds es: "+ x5;

}
var resultado1 = document.getElementById("resultado1");
var b = document.getElementById("extraer1");
b.addEventListener("click", Reynolds);




function factor()
{
var x5;
x5=(x1.value*x2.value*x3.value)/x4.value;

var x6= document.getElementById("x6");
var a=0.0001;
var error=0.000001;
var b=1000;
var f;
var x7;
var tol=0.2;

while(tol>error){
  x7=(a+b)/2;
  f=1/x7**0.5+2*Math.log10((x6.value*1)/(3.7*x3.value)+2.51/(x5*x7**0.5));
  if(f<0){
    b=x7;
  }
  else{
    a=x7;
  }
  tol=Math.abs(b-a);
}
  
resultado2.innerHTML ="El factor de fricción es: "+x7;
}
var resultado2 = document.getElementById("resultado2");
var b = document.getElementById("extraer2");
b.addEventListener("click", factor);
