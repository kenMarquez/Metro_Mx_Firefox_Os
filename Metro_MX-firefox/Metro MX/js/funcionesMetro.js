
var estacionesMetro = 	["Acatitla","Aculco","Agricola Oriental","Allende","Apatlaco","Aquiles Serdán",
					"Aragón","Atlalilco","Auditorio","Autobuses del Norte","Azcapotzalco","Balbuena",
					"Balderas","Barranca del Muerto","Bellas Artes","Bondojito","Bosque de Aragón","Boulevard Puerto Aéreo",
					"Buenavista","Calle 11","Camarones","Canal del Norte","Canal de SanJuan","Candelaria","Centro Médico",
					"Cerro de la Estrella","Chabacano","Chapultepec","Chilpancingo","Ciudad Azteca","Ciudad Deportiva",
					"Colegio Militar","Constitución de 1917","Constituyentes","Consulado","Copilco","Coyoacán",
					"Coyuya","Cuatro Caminos","Cuauhtémoc","Cuitlahuac","Culhuacán","Deportivo 18 de Marzo","Deportivo Oceanía",
					"División del Norte","Doctores","Ecatepec","Eduardo Molina","Eje Central","El Rosario","Ermita",
					"Escuadrón 201","Etiopía Plaza de la Transparencia","Eugenia","Ferrería","Fray Servando","Garibaldi/Lagunilla",
					"General Anaya","Gómez Farías","Guelatao","Guerrero","Hangares","Hidalgo","Hospital 20 de Noviembre","Hospital General",
					"Impulsora","Indios Verdes","Instituto del Petróleo","Insurgentes","Insurgentes Sur","Isabel la Católica",
					"Iztacalco","Iztapalapa","Jamaica","Juanacatlán","Juárez","Lagunilla","La Paz","La Raza","La Viga",
					"La Villa-Basílica","Lindavista","Lomas Estrella","Los Reyes","Lázaro Cárdenas","M. A. de Quevedo","Martín Carrera",
					"Merced","Mexicaltzingo","Misterios","Mixcoac","Mixiuhca","Moctezuma","Morelos","Muzquiz","Nativitas","Nezahualcóyotl",
					"Niños Héroes","Nopalera","Normal","Norte 45","Obrera","Observatorio","Oceanía","Olivos","Olímpica",
					"Panteones","Pantitlán","Parque de los Venados","Patriotismo","Peñón Viejo","Periférico Oriente","Pino Suárez",
					"Plaza Aragón","Polanco","Politécnico","Popotla","Portales","Potrero","Puebla","Refinería",
					"Revolución","R. Flores Magón","Río de los Remedios","Romero Rubio","Salto del Agua","San Andrés Tomatlán","San Antonio",
					"San Antonio Abad","San Cosme","San Joaquín","San Juan de Letrán","San Lázaro","San Pedro de los Pinos","Santa Anita",
					"Santa Marta","Sevilla","Tacuba","Tacubaya","Talismán","Tasqueña","Tepalcates","Tepito","Terminal Aérea",
					"Tezonco","Tezozomoc","Tlaltenco","Tlatelolco","Tláhuac","UAM-I","Universidad","Valle Gómez","Vallejo",
					"Velódromo","Viaducto","Villa de Aragón","Villa de Cortés","Viveros Derechos Humanos","Xola","Zapata",
					"Zapotitlán","Zaragoza","Zócalo"];					
var trasnbordes = 	["10","8","10","2","8","7","5","8,12","7","5","6","1","1,3","7",
				  	"2,8","4","11","1","11","12","7","4","10","1,4","3,9","8","2,8,9",
				  	"4","9","11","9","2","8","7","4,5","3","3","8","2","1","2","12",
				  	"3,6","11","3","8","11","5","12","6,7","2,12","8","3","3","6","4",
					"8,11","2","1","10","3,11","5","2,3","12","3","11","3","5,6","1","12",
					"1","8","8","4,9","1","3","11","10","3,5","8","6","6","12","10","9",
					"3","4,6","1","12","5","7,12","9","1","4,11","11","2","11","3","12",
					"2","6","8","1","5,11","12","11","2","1,5,9,10","12","9","10","12","2,1",
					"11","7","5","2","2","3","9","7","2","11","11","11","1,8","12","7","2",
					"2","7","8","1,11","7","5,8","10","1","2,7","1,7,9","4","2","10","11",
					"5","12","6","12","3","12","8","3","5","6","9","2","11","2","3","2",
					"3,12","12","1","2"];

$(document).ready(llenarSelect);

	
function mapear(ide){
	var x = document.getElementById(ide);
	var estaciones = x[x.selectedIndex].value;
	if (estaciones == "nada") {return;}
	var array = estaciones.split(",");
	var divf;
	if (ide == "estacionActual"){
		divf = $("#resultadoActual");
		divf.html("<p>Tu estación esta en la línea:</p>");
	}else{
		divf = $("#resultadoDestino");
		divf.html("<p>La estación a llegar esta en la línea:</p>");
	}
	for (var i = 0; i < array.length; i++) {
		switch(array[i]){
			case "1":
				divf.append("<img src='../img/linea1.png'></img>");
			break;
			case "2":
				divf.append("<img src='../img/linea2.png'></img>");
			break;
			case "3":
				divf.append("<img src='../img/linea3.png'></img>");
			break;
			case "4":
				divf.append("<img src='../img/linea4.png'></img>");
			break;
			case "5":
				divf.append("<img src='../img/linea5.png'></img>");
			break;
			case "6":
				divf.append("<img src='../img/linea6.png'></img>");
			break;
			case "7":
				divf.append("<img src='../img/linea7.png'></img>");
			break;
			case "8":
				divf.append("<img src='../img/linea8.png'></img>");
			break;
			case "9":
				divf.append("<img src='../img/linea9.png'></img>");
			break;
			case "10":
				divf.append("<img src='../img/linea-a.png'></img>");
			break;
			case "11":
				divf.append("<img src='../img/linea-b.png'></img>");
			break;
			case "12":
				divf.append("<img src='../img/linea12.png'></img>");
			break;			
		}

	}
}

function llenarSelect(){
	var select = document.getElementById("estacionDestino");
	var selectA = document.getElementById("estacionActual");
	for (var i = 0; i < estacionesMetro.length; i++) {
		var opcion = document.createElement("option");
		var opcion2 = document.createElement("option");
		opcion2.value = trasnbordes[i];
		opcion.value = trasnbordes[i];
		opcion.innerHTML = estacionesMetro[i];
		opcion2.innerHTML= estacionesMetro[i];
		selectA.add(opcion2);
		select.add(opcion);
	}
}
function mapa(){
	var link = document.getElementById('link');
	link.href = "../html/zoom-metro.html";
}
