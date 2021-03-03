function mostrar()
{
  let tipocursada;
let CantidadDeMaterias;
let sexo;
let NotaDelPromedio;
let edad;
let seguir = "si";
let mejorpromedio;
let nombrepromedio;
let nombre;
let nomlibre;
let edadmin;
let acumpromM = 0;
let acumpromF = 0;
let acumpromN = 0;
let promM;
let promF;
let promN;
let alumM;
let alumF;
let alumN;
let totalmaterias;
let materiasMax;
let nombremat;
let edadmat;

 do{
  nombre = prompt("Ingrese su nombre:");

  tipocursada = prompt("Ingrese la cursada que se encuentra'libre', 'presencial', 'remota'):");

  CantidadDeMaterias = prompt("Ingrese cantidad de materias(mas de 0, menos de 8):");

  sexo = prompt("Ingrese sexo (femenino(f)/masculino(m)/no binario(n)):").toLowerCase();
  while(sexo != "m" && sexo != "f" && sexo != "n"){
    sexo = prompt("Dato incorrecto/equivocado.Ingrese sexo (femenino(f)/masculino(m)/no binario(n)):");
  }

NotaDelPromedio = parseInt(prompt("Ingrese su nota del promedio(entre 0 y 10):"));
  while(!(NotaDelPromedio>=0 && NotaDelPromedio<=10)){
    NotaDelPromedio = parseInt(prompt("Dato incorrecto. Ingrese la nota promedio nuevamente(entre 0 y 10):"));
  }

  edad = parseInt(prompt("Ingrese su edad:"));
  while( edad>= 0 && isNaN(edad)){
    edad = parseInt(prompt("Dato incorrecto. Ingrese nuevamente su edad."))
  }

  if(sexo != "m"){
    if(prom>mejorpromedio){
      mejorpromedio = prom;
      nombrepromedio= nombre;
    }

  }

  if(tipocursada == "libre"){
    if(edad<edadmin){
      edadmin = edad;
      nomlibre = nombre;
    }

  }

  if(sexo == "m"){
    acumpromM += NotaDelPromedio;
    alumM++;
  }else if(sexo == "f"){
    acumpromF += NotaDelPromedio;
    alumF++;
  }else{
    acumpromN += NotaDelPromedio
    alumN++;
  }

  promM = acumpromM / alumM;
  promF = acumpromF / alumF;
  promN = acumpromN / alumN;

  if(tipocursada != "remota"){
    totalmaterias + CantidadDeMaterias;
    if(totalmaterias>materiasMax){
      materiasMax = totalmaterias;
      nombremat = nombre;
      edadmat = edad;

    }


  }

  seguir = prompt("Desea seguir ingresando datos?  s/n");

}while( seguir == "si")

console.log("El nombre del mejor promedio femenino y no binario es" + nombrepromedio +"<br>")
console.log("El nombre del más joven de los alumnos que quedaron libres es:" + nomlibre +"<br>")
console.log("El promedio de nota por sexo es: masculino:" + promM + "femenino:" + promF + "no binario:" + promN +"<br>" )
console.log("La edad y el nombre del que curso mas materias:" + nombremat + "y tiene" + edadmat + "años." + "<br>")

}



 
