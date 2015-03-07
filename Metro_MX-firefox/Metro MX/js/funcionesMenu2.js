
$(document).ready(inicio);
function inicio(){
	var button = document.getElementById('mapa');
	opcion = localStorage.getItem("opcion");
	button.addEventListener('click',function(){
	if (opcion == "1"){
		var pagina="zoom/zoom-metro.html";
		location.href=pagina;
	}else{
		var pagina="zoom/zoom-metrobus.html"
		location.href=pagina
	}
	})
	var button = document.getElementById('donde');
	button.addEventListener('click',function(){
	if (opcion == "1"){
		var pagina="metro.html";
		location.href=pagina;
	}else{
		var pagina="metrobus.html";
		location.href=pagina;
	}
	});
}