var i=1;
function heartarrow(){
	if(i%2==1){
         i++;
	$('.icon_arrowToHeart').addClass('shoot');
	var x=document.getElementById("heartnum").innerHTML;
	x=parseInt(x)+1;
	
	document.getElementById("heartnum").innerHTML=x;
}
else{
	i++;
	$('.icon_arrowToHeart').removeClass('shoot');
	var x=document.getElementById("heartnum").innerHTML;
	x=parseInt(x)-1;
	document.getElementById("heartnum").innerHTML=x;
}
}

function post(){
	var tr=$('#comment_post').html();
	$('.comment').append(tr);
	
}

