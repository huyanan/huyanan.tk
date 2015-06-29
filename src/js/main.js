var Chongzi = function(){
	this.x;
	this.y;
	this.picSrc;
	this.image;
}

Chongzi.prototype.init = function(){
	this.x = 0;
	this.y = 0;
	this.picSrc  = '../../resource/image/chongzi.gif';
	this.image = new Image(this.picSrc);
}

Chongzi.prototype.move = function(){
	var sW = screen.width;
	var sH = screen.height;
	this.y += 1;
	this.image.style.y
}

var chongzimen = [];

function chongziDaJun(){
	var chongzi = new Chongzi();
}

var documentReady = function(){

}