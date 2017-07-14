
var box=document.getElementById('box');
box.addEventListener('mousedown',function(ev){
	var disX = ev.clientX-this.offsetLeft;
	var disY = ev.clientY-this.offsetTop;
	document.addEventListener('mousemove',fn);
	document.addEventListener('mouseup',up);
	function fn(ev){
		var l=ev.clientX-disX;
		var h=ev.clientY-disY;
		box.style.left=l+'px';
		box.style.top=h+'px';
	}
	function up(){
		document.removeEventListener('mousemove',fn);
		document.removeEventListener('mouseup',up);
	}
})



