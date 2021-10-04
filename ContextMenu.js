let p = document.querySelector(".container");
let h,w,x,y;

function myContextMenu(e){
	e = e || window.event;
	e.preventDefault();
	w = window.innerWidth;
	h = window.innerHeight;
	x = e.pageX;
	y = e.pageY;
	
	p.style.display="block";
	if(x <= eval(  w - p.offsetWidth ) ){
		p.style.left = x + "px" ;
		p.classList.remove("right");
		p.classList.add("left");
	}
	else{
		p.style.left = eval( x - p.offsetWidth ) + "px" ;
		p.classList.remove("left");
		p.classList.add("right");
	}

	if(y <= eval(  h - p.offsetHeight ) ){
		p.style.top = y + "px" ;
		p.classList.remove("bottom");
		p.classList.add("top");
	}
	else{
		p.style.top = eval( y - p.offsetHeight ) + "px" ;
		p.classList.remove("top");
		p.classList.add("bottom");
	}
	

}

window.onmouseup=()=>{p.style.display="none";}