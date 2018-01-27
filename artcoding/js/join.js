function person(){
	
	
	$("#topPanel01").removeClass("inactive").addClass("active"); 
	$("#topPanel02").removeClass("active").addClass("inactive"); 
	$("#personcolor").css('color', '#27b0be'); 
	$("#studentcolor").css('color', 'black'); 

}

function student(){


	$("#topPanel01").removeClass("active").addClass("inactive"); 
	$("#topPanel02").removeClass("inactive").addClass("active");
	$("#studentcolor").css('color', '#27b0be'); 
	$("#personcolor").css('color', 'black');  

}

$(function(){
	init_city_select($("#sel1"));
});