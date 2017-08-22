//Player constructure
function player(x,y,w,h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	this.show = function(){
		var image = new Image();
		image.src = "Images/player.png";
		ctx.fillStyle = "red";
		ctx.drawImage(image,this.x,this.y,this.w,this.h);
	}

	this.move = function(dir){
		this.clear();
		this.x += dir;
		this.show();
	}

	this.clear = function(){
		ctx.clearRect(this.x,this.y,this.w,this.h);

	}
}