document.addEventListener('mouseup',up);
function up(){
	box.removeEventListener('mousemove',fn);
	document.removeEventListener('mouseup',up);
}
