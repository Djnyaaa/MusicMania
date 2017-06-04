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
        $('#padre').append($("<div class='container'><div class='row'><div class='col-md-1'></div><div id='separador"+(i+3)+"' class='col-md-10'></div><div class='col-md-1'></div></div></div><div class='container'><div class='col-xs-10 col-sm-6 col-md-4 col-lg-4' id='noticia"+(i+3)
+"'><img src='"+ noticia.img+"' alt='"+noticia.titulo +"'></div><div class='col-xs-10 col-sm-6 col-md-6 col-lg-8'><h3>"+noticia.titulo
+"</h3></div><div class='col-xs-10 col-sm-4 col-md-6 col-lg-8'>"+noticia.descripcion+"</div><div id='fecha"+(i+3)+ "' class='col-xs-8 col-sm-6 col-md-8 col-lg-8'><small>"
+noticia.fecha+"</small></div></div>")
		
		);
	}
	);
}

function ponerNoticias1(json) {
	$.each(json, function (i, noticia) {
        $('#padre').append($("<div class='container'><div class='row'><div class='col-md-1'></div><div id='separador"+(i+6)+"' class='col-md-10'></div><div class='col-md-1'></div></div></div><div class='container'><div class='col-xs-10 col-sm-6 col-md-4 col-lg-4' id='noticia"+(i+6)
+"'><img src='"+ noticia.img+"' alt='"+noticia.titulo +"'></div><div class='col-xs-10 col-sm-6 col-md-6 col-lg-8'><h3>"+noticia.titulo
+"</h3></div><div class='col-xs-10 col-sm-4 col-md-6 col-lg-8'>"+noticia.descripcion+"</div><div id='fecha"+(i+6)+ "' class='col-xs-8 col-sm-6 col-md-8 col-lg-8'><small>"
+noticia.fecha+"</small></div></div>")
		
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

