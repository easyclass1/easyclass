function entregarDinero()
{
  var ux= document.getElementById("ux");
  var uy= document.getElementById("uy");
  var uz= document.getElementById("uz");
  var vx= document.getElementById("vx");
  var vy= document.getElementById("vy");
  var vz= document.getElementById("vz");

  var punto;
  var cx;
  var cy;
  var cz;
  var px;
  var py;
  var pz;
  var mu;
  var mv;
  var cruz;

  cx=uy.value*vz.value-uz.value*vy.value;
  cy=-ux.value*vz.value+uz.value*vx.value;
  cz=ux.value*vy.value-uy.value*vx.value;
  punto=ux.value*vx.value+uy.value*vy.value+uz.value*vz.value;

  px=((1*punto)/(vx.value**2+vy.value**2+vz.value**2))*vx.value;
  py=((1*punto)/(vx.value**2+vy.value**2+vz.value**2))*vy.value;
  pz=((1*punto)/(vx.value**2+vy.value**2+vz.value**2))*vz.value;

  mu=(ux.value**2+uy.value**2+uz.value**2)**0.5;
  mv=(vx.value**2+vy.value**2+vz.value**2)**0.5;

  
  cruz=cx**2+cy**2+cz**2;

  if (punto==0){
    orto.innerHTML ="Los vectores son ortogonales (perpendiculares): ";
  }
  else
  {
    orto.innerHTML ="Los vectores NO son ortogonales (perpendiculares): ";
  }

  if (cruz==0){
    para.innerHTML ="Los vectores son paralelos: ";
  }
  else
  {
    para.innerHTML ="Los vectores NO son paralelos: ";
  }

  
  resultado.innerHTML ="Producto Punto u*v: "+ punto;
  ccx.innerHTML ="Wx: "+ cx;
  ccy.innerHTML ="Wy: "+ cy;
  ccz.innerHTML ="Wz: "+ cz;

  ppx.innerHTML ="Px: "+ px;
  ppy.innerHTML ="Py: "+ py;
  ppz.innerHTML ="Pz: "+ pz;

  mmu.innerHTML ="│u│: "+ mu;
  mmv.innerHTML ="│v│: "+ mv;

}

var resultado = document.getElementById("resultado");

var ccx = document.getElementById("ccx");
var ccy = document.getElementById("ccy");
var ccz = document.getElementById("ccz");

var ppx = document.getElementById("ppx");
var ppy = document.getElementById("ppy");
var ppz = document.getElementById("ppz");

var mmu = document.getElementById("mmu");
var mmv = document.getElementById("mmv");

var orto = document.getElementById("orto");
var para = document.getElementById("para");

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
