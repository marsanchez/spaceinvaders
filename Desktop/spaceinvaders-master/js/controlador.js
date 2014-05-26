/**
 * Controlador
 */
$body.keydown(function(event) {
	switch(event.which) {
		case 39: //Mover: Derecha
			MoverDer();
		break;
		case 37: //Mover: Izquierda
			MoverIzq();
		break;
		case 90: //Disparo: letra Z
			disparar();
		break;
	}
});

//Raton
var $botonIzq = $('#izquierda');
$botonIzq.click(function(event){
	MoverIzq();
});

var $botonDer = $('#derecha');
$botonDer.click(function(event){
	MoverDer();
});

var $botonDisparo = $('#disparo');
$botonDisparo.click(function(event){
	disparar();
});