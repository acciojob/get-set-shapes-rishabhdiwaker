//complete this code
class Rectangle {
	constructor(width,height){
		this.width=width;
		this.height=height;
	}
	get width(){
		this.width=width;
	}
	get height(){
		this.height=height;
	}
	getArea(){
		return this.width*this.height;
	}
}
	
class Square extends Rectangle {
	constructor(side){
		super(side,side);
	}
	getPerimeter(){
		4*this.width;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
