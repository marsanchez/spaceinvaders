var Enemigo = function(iniPosX, iniPosY) {
	this.iVida = 100;
	this.iPosX = iniPosX;
	this.iPosY = iniPosY;
	this.$divEnemigo;
	this.$pantalla = $('#juego');
	

	this.crearEnemigo = function() {
		this.$divEnemigo = $('<div>');
		this.$divEnemigo.addClass('enemigo');
		this.$divEnemigo.css('top', this.iPosY);
		this.$divEnemigo.css('left', this.iPosX);
		this.$pantalla.append(this.$divEnemigo);
	}


	this.crearEnemigo();
}