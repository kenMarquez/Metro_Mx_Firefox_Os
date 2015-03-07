var estacionesMetB =["314.Memorial New's Divine","5 de mayo","Álamos","Altavista",
	"Álvaro Obregón","Amores","Andrés Molina Enríquez","Antonio Maceo","Archivo General de la Nación",
	"Ayuntamiento","Balderas","Bellas Artes","Buenavista"," Campeche","Canal del Norte",
	"Canal de San Juan","Canela","CCH Oriente","Cd. de los Deportes","Cecilio Robelo",
	"Centro Cultural Universitario","Centro Médico","Centro SCOP","Chilpancingo",
	"Churubusco","Circuito","Circunvalación","Ciudad Universitaria","Col. del Valle",
	"Coltongo","Constitución de patzingán","Corregidora","Coyuya","Cuauhtémoc",
	"Cuitláhuac","De la Salle","Delegación Cuauhtémoc","Del Moral","Deportivo 18 de Marzo",
	"Deportivo Eduardo Molina","Doctor Gálvez","Doctor Márquez","Doctor Vértiz","Durango",
	"Eduardo Molina","Eje Central","El Caminero","El Chopo","El Coyol","El Rodeo",
	"El Salvador","Escandón","Etiopía","Euzkaro","Expo Reforma","Félix Cuevas",
	"Ferrocarril de Cintura","Francia","Fuentes Brotantes","General Antonio de León",
	"Glorieta de Colón","Goma","Guerrero","Hamburgo","Héroe de Nacozari","Hidalgo",
	"Hospital Balbuena","Hospital General","Hospital La Raza","Indios Verdes",
	"Insurgentes","Isabel La Católica","Iztacalco","Jardín Pushkin","José María Velasco",
	"Juárez","Júpiter","La Bombilla","La Joya","La Merced","La Patera","La Raza",
	"Las Américas","Las Cruces","La Viga","Leyes de Reforma","Magdalena de las Salinas",
	"Manuel González","Mercado Morelos","Mercado Sonora","Mina","Mixcalco","Moctezuma",
	"Montevideo","Morelos","Museo de la Ciudad","Museo San Carlos","Nápoles",
	"Nicolás Bravo","Nuevo León ","Obrero Mundial","Olivo","Oriente 101","Parque Hundido",
	"Parque Lira","Patriotismo","Perisur","Pino Suárez ","Plaza de la República",
	"Plaza San Juan","Polifórum","Poniente 128","Poniente 134","Poniente 146",
	"Potrero","Preparatoria 3","Progreso Nacional","Puente de Alvarado"," Reforma",
	"Rep. de Argentina","Rep. de Chile","Revolución","Ricardo Flores Magón",
	"Río Consulado","Río de Guadalupe","Rio de los Remedios","Río Frío","Río Mayo",
	"Río Piedad","Río Santa Coleta","Río Tecolutla","Rojo Gómez","San José de la Escalera",
	"San Juan de Aragón","San Lazaro","San Simón","Santa Úrsula","Sonora","Tacubaya",
	"Talismán","Teatro del Pueblo","Teatro Insurgentes","Teatro lanquita",
	"Tenayuca","Tepalcates","Terminal Aereopuerto 1","Terminal Aereopuerto 2","Tlacotal",
	"Tlatelolco","Tolnahuac","Tres Anegas","UPIICSA",
	"Vasco de Quiroga","Viaducto","Victoria","Villa Olímpica","Vocacional 5 ","Xola"];

var trasnbordes = 	["5","5","2","1","1","2","2","2","4,5","1","3","4","1,3,4",
	"1","5","2","2","2","1","4","1","3","2","1","1","1,3","4","1","1","3","2","1",
	"2","3","3","2","4","2","1","5","1","3","2","1","4","4","1","1","5","2","4",
	"2","2,3","1","4","1","4","1","1","2","4","2","3","1","3","4","4","3","3","1",
	"1","4","2","3","1","3,4","3","1","1","4","3","1,3","2","4","2","2","3","1","5",
	"4","3,3","4","4","3","4","4","4","1","2","1,2","3","1","5","1","2","2","1","4",
	"1,4","4","1","3","3","3","1","5","3","4","1","4","4","1","3","5","5","5","2",
	"2","1","5","2","2","3","5","4,5","1","1","1","2","5","4","1","4","3","2","4","4","2",
	"3","3","3","2","5","2","5","1","4","2"];

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
				divf.append("<img src='../img/l1.jpg'></img>");
			break;
			case "2":
				divf.append("<img src='../img/l2.jpg'></img>");
			break;
			case "3":
				divf.append("<img src='../img/l3.jpg'></img>");
			break;
			case "4":
				divf.append("<img src='../img/l4.jpg'></img>");
			break;
			case "5":
				divf.append("<img src='../img/l5.png'></img>");
			break;		
		}

	}
}

function llenarSelect(){
	var select = document.getElementById("estacionDestino");
	var selectA = document.getElementById("estacionActual");
	for (var i = 0; i < estacionesMetB.length; i++) {
		var opcion = document.createElement("option");
		var opcion2 = document.createElement("option");
		opcion2.value = trasnbordes[i];
		opcion.value = trasnbordes[i];
		opcion.innerHTML = estacionesMetB[i];
		opcion2.innerHTML= estacionesMetB[i];
		selectA.add(opcion2);
		select.add(opcion);
	}
}
function mapa(){
	var link = document.getElementById('link');
	link.href = "zoom/zoom-metrobus.html";
}