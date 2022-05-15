function c()
{
var T1= document.getElementById("T1");

var c1;
var c2;
var c3;
var c4;
c1=1*T1.value;
c2=(T1.value*(9/5))+32;
c3=1*T1.value+273.15;
c4=(T1.value*(9/5))+491.67;

resultadoc1.innerHTML ="ºC: "+ c1;
resultadoc2.innerHTML ="ºF: "+ c2;
resultadoc3.innerHTML ="ºK: "+ c3;
resultadoc4.innerHTML ="ºR: "+ c4;
}

function f()
{
var T2= document.getElementById("T2");

var f1;
var f2;
var f3;
var f4;
f1=(T2.value-32)*(5/9);
f2=1*T2.value;
f3=(1*T2.value-32)*(5/9)+273.15;
f4=1*T2.value+459.67;

resultadof1.innerHTML ="ºC: "+ f1;
resultadof2.innerHTML ="ºF: "+ f2;
resultadof3.innerHTML ="ºK: "+ f3;
resultadof4.innerHTML ="ºR: "+ f4;
}

function k()
{
var T3= document.getElementById("T3");

var k1;
var k2;
var k3;
var k4;
k1=1*T3.value-273.15;
k2=k1*(9/5)+32;
k3=1*T3.value;
k4=(k1*(9/5))+491.67;

resultadok1.innerHTML ="ºC: "+ k1;
resultadok2.innerHTML ="ºF: "+ k2;
resultadok3.innerHTML ="ºK: "+ k3;
resultadok4.innerHTML ="ºR: "+ k4;
}

function r()
{
var T4= document.getElementById("T4");

var r1;
var r2;
var r3;
var r4;
r2=1*T4.value-459.67;
r1=(1*r2-32)*(5/9);
r3=(1*r2-32)*(5/9)+273.15;
r4=1*T4.value;

resultador1.innerHTML ="ºC: "+ r1;
resultador2.innerHTML ="ºF: "+ r2;
resultador3.innerHTML ="ºK: "+ r3;
resultador4.innerHTML ="ºR: "+ r4;
}


var resultadoc1 = document.getElementById("resultadoc1");
var resultadoc2 = document.getElementById("resultadoc2");
var resultadoc3 = document.getElementById("resultadoc3");
var resultadoc4 = document.getElementById("resultadoc4");
var b1 = document.getElementById("extraer1");
b1.addEventListener("click", c);

var resultadof1 = document.getElementById("resultadof1");
var resultadof2 = document.getElementById("resultadof2");
var resultadof3 = document.getElementById("resultadof3");
var resultadof4 = document.getElementById("resultadof4");
var b2 = document.getElementById("extraer2");
b2.addEventListener("click", f);

var resultadok1 = document.getElementById("resultadok1");
var resultadok2 = document.getElementById("resultadok2");
var resultadok3 = document.getElementById("resultadok3");
var resultadok4 = document.getElementById("resultadok4");
var b3 = document.getElementById("extraer3");
b3.addEventListener("click", k);

var resultador1 = document.getElementById("resultador1");
var resultador2 = document.getElementById("resultador2");
var resultador3 = document.getElementById("resultador3");
var resultador4 = document.getElementById("resultador4");
var b4 = document.getElementById("extraer4");
b4.addEventListener("click", r);




