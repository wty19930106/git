
var box=document.getElementById('box');
box.addEventListener('mousedown'function(ev){
	var disX = ev.clientX-this.offsetLeft;
	var disY = ev.clientY-this.offsetTop;
})
box.addEventListener('mousemove',fn);
function fn(ev){
	var l=ev.clientX-disX;
	var h=ev.clientY-disY;
	box.style.left=l+'px';
	box.style.top=h+'px';
}

