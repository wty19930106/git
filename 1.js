var box = document.getElementById('box');
box.addEventListener('mousedown',function(ev){
	var disX=ev.clientX-this.offsetLeft;
	var disY=ev.clientY-this.offsetTop;
})