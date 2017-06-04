/* 9
	* To change this license header, choose License Headers in Project Properties.
	* To change this template file, choose Tools | Templates
	* and open the template in the editor.
*/
var x = 0;
var datos1 = null;
var datos2 = null;



$(function () {
    //cargar noticias
    $.getJSON("data/1.json", function (json1) {
		datos1 = json1;
	});
    $.getJSON("data/2.json", function (json2) {
		datos2 = json2;
	});
	$(window).scroll(function(){
		if($(window).scrollTop()+$(window).height()>$(document).height()-1){
			cargarNoticias();
		}
	});
    $('#boton').click(function () {
		cargarNoticias();
	});
	
});

function ponerNoticias(json) {
	$.each(json, function (i, noticia) {
        $('#padre').append($("<div class='container'><div class='col-xs-4 col-sm-4 col-md-4 col-lg-4' id='noticias"+(i+3)
		+"'><div class='thumbnail featured-thumbnail'><img src='" + noticia.img 
		+ "' alt='Grant Bowtie'></a></div></div><div class='col-xs-4 col-sm-4 col-md-4 col-lg-4'><h3>" + noticia.titulo 
		+ "</h3><div class='col-xs-10 col-sm-10 col-md-10 col-lg-10'>" + noticia.descripcion 
		+ "</div></div><div id=fecha"+(i+3)+" class='col-xs-8 col-sm-8 col-md-6 col-lg-6'><small>"+noticia.fecha+"</small></div></div>")
		
		);
	}
	);
}

function ponerNoticias1(json) {
	$.each(json, function (i, noticia) {
        $('#padre').append($("<div class='container'><div class='col-xs-4 col-sm-4 col-md-4 col-lg-4' id='noticias"+(i+6)
		+"'><div class='thumbnail featured-thumbnail'><img src='" + noticia.img 
		+ "' alt='Grant Bowtie'></a></div></div><div class='col-xs-4 col-sm-4 col-md-4 col-lg-4'><h3>" + noticia.titulo 
		+ "</h3><div class='col-xs-10 col-sm-10 col-md-10 col-lg-10'>" + noticia.descripcion + "</div></div><div id=fecha"+(i+6)
		+" class='col-xs-8 col-sm-8 col-md-6 col-lg-6'><small>"+noticia.fecha+"</small></div></div>")
		
		);
	}
	);
}

function cargarNoticias() {
	if (x === 1) {
		ponerNoticias1(datos2);
		x++;
		$('#boton').hide();
		} else if (x === 0) {
		ponerNoticias(datos1);
		x++;
	}
}

