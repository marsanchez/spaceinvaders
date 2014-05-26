/**
 * Main
 */
var $body = $('body');
var $navecita = $('#navecita');
var $pantalla = $('#juego');
var iVelNav = 20;
var iVelDis = 500;
var iOsci = 50;
var iTiemAni = 2000;

//Centrar nave
var posNavCen = parseInt($pantalla.css('width')) / 2 - parseInt($navecita.css('width')) / 2;
$navecita.css('left', posNavCen + 'px');

//Centrar eje Y de disparo
var posDisY = parseInt($navecita.css('bottom')) + parseInt($navecita.css('height'));

//Creamos los enemigos
new Enemigo(20, 20);
new Enemigo(220, 20);
new Enemigo(420, 20);
new Enemigo(620, 20);

var MoverDer = function() {
	if(parseInt($pantalla.css('width')) - iVelNav - parseInt($navecita.css('width')) > parseInt($navecita.css('left'))) 
				$navecita.css('left', '+=' + iVelNav + 'px');
}

var MoverIzq = function() {
	if(iVelNav < parseInt($navecita.css('left')))
				$navecita.css('left', '-=' + iVelNav + 'px');
}

var disparar = function() {
	var $divDisparo = $('<div>');
			$divDisparo.addClass('disparo');
			var iPosX = parseInt($navecita.css('left')) + parseInt($navecita.css('width')) / 2 - 10;
			$divDisparo.css({
				'left': iPosX + 'px',
				'bottom': posDisY + 'px'
			});
			//Animación disparo
			$pantalla.append($divDisparo);
			$divDisparo.animate({
				'bottom' : parseInt($pantalla.css('height'))
			}, iVelDis, 'linear', function() {
				//Cuando termina la animación, la elimina
				$divDisparo.remove();
			});
}