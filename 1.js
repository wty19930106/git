box.addEventListener('mousemove',fn)
function fn(ev){
	var l=ev.clientX-disX;
	var h=ev.clientY-disY;
	box.style.left=l+'px';
	box.style.top=h+'px';
}