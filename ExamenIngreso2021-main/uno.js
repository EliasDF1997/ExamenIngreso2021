
function mostrar()
{
	function mostrar() {
		let tipoProducto;
		let precioProducto;
		let cantUnidades;
		let tipoInflamable;
		let marca;
		let cantAlc = 0;
		let sumAlc = 0;
		let cantIac = 0;
		let sumaIac = 0;
		let cantIacMen = 0;
		let cantQuat = 0;
		let sumaQuat = 0;
		let cantInifugo = 0;
		let cantCombustible = 0;
		let cantExplosivo = 0;
		let marcaMasCaro;
		let tipoMasCaro;
		let precioMayor = 0;
	  
	  
		for (let i = 0; i < 5; i++) {
		  tipoProducto = prompt("Ingrese el tipo de producto: alcohol,iac,quat ");
		  while ( tipoProducto != "alcohol" && tipoProducto != "iac" && tipoProducto != "quat") {
			tipoProducto = prompt("dato erroneo. Por favor, ingrese su tipo de producto: ");
		  }
		  precioProducto = parseFloat(prompt("Ingrese su precio(100 a 300): ")).toFixed(2);
		  while (
			(precioProducto <= 100 && precioProducto >= 300) || isNaN(precioProducto)) {
			temp = prompt("dato erroneo. Por favor, ingrese el precio: ");
		  }
		  cantUnidades = parseInt(
			prompt("Ingresar la cantidad (mayor de 0 y menor a 100)"));
		  while (cantUnidades <= 0 || cantUnidades > 100 || isNaN(cantUnidades)) {
			cantUnidades = parseInt(
			  prompt("dato erroneo. Por favor, ingrese la cantidad de unidades: "));
		  }
		  tipoInflamable = prompt(
			"Ingrese su tipo de ínflamable (inifugo , combustible, explosivo): ");
		  while (
			tipoInflamable != "inifugo" && tipoInflamable != "combustible" && tipoInflamable != "explosivo") {
			tipoProducto = prompt("dato erroneo. Por favor, ingrese su tipo de producto: ");
		  }
		  marca = prompt("Ingresar la marca");
	  
		  switch (tipoProducto) {
			case "alcohol":
			  cantAlc++;
			  sumAlc = sumAlc + precioProducto;
			  break;
			case "quat":
			  cantQuat++;
			  sumaQuat = sumaQuat + precioProducto;
			  break;
			case "iac":
			  cantIac++;
			  sumaIac = sumaIac + precioProducto;
			  if (precioProducto <= 200) {
				cantIacMen++;
			  }
			  break;
		  }
		  switch (tipoInflamable) {
			case "inifugo":
			  cantInifugo++;
			  break;
			case "combustible":
			  cantCombustible++;
			  break;
			case "explosivo":
			  cantExplosivo++;
			  break;
		  }
		  if (precioProducto > precioMayor) {
			precioMayor = precioProducto;
			marcaMasCaro = marca;
			tipoMasCaro = tipoProducto;
		  }
		}
	  
		if (cantAlc > 0) {
		  document.write("El promedio de alcohol es :" + sumAlc / cantAlc + "<br>");
		}
		if (cantIac > 0) {
		  document.write("El promedio de iacA es:" + sumaIac / cantIac + "<br>");
		}
		if (cantQuat > 0) {
		  document.write("El promedio de quat es:" + sumaQuat / cantQuat + "<br>");
		}
		if (cantInifugo > cantCombustible && cantInifugo > cantExplosivo) {
		  document.write(
			"El tipo de inflamable con mas cant de unidades es inifugo" + "<br>"
		  );
		} else {
		  if (cantCombustible > cantInifugo && cantCombustible > cantExplosivo) {
			document.write(
			  "El tipo de inflamable con mas cant de unidades es combustible" + "<br>"
			);
		  } else {
			document.write(
			  "El tipo de inflamable con mas cant de unidades es explosivo" + "<br>"
			);
		  }
		}
	  
		document.write("La marca del producto mas cara es:" + marcaMasCaro + "<br>");
		document.write("El tipo del producto mas caro es: " + tipoMasCaro + "<br>");
} 

}