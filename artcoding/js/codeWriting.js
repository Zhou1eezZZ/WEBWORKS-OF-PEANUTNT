  // $(document).ready(function () {
  //           $(".navgation input").each(function () {
  //               var this_div = $(".navgation div");
  //               var _inx = $(".navgation input").index(this);
  //               $(this).click(
  //               function () { this_div.eq(_inx).slideToggle(); },
  //               function () { this_div.eq(_inx).slideToggle(); }
  //          );
  //           });
  //       });

var numOfTabs = 1;
var myTextarea = document.getElementById('code0');
var editor = new Array();
	editor[0]=CodeMirror.fromTextArea(myTextarea,{
        lineNumbers: true,
        mode: "javascript",
        theme: 'eclipse',
        toggleComment: true,
        keyMap: 'sublime',
        indentWithTabs: true,
        tabSize: 2,
        foldGutter: true,
        fixedGutter: false,
//      foldOptions: {
//          widget: '\u2026'
//      },
        gutters: ['CodeMirror-foldgutter']
      });

$(document).ready(function() { 
$('.code_title li').hover(function() { 
$(this).find('.sub-menu').css('display', 'block'); 
}, function() { 
$(this).find('.sub-menu').css('display', 'none'); 

}); 

}); 


function toogle(th){  
  var ele = $(th).children(".move");  

  var tree1=document.getElementById("java1");
  var tree2=document.getElementById("java2");
  var tree3=document.getElementById("java3");

  if(ele.attr("data-state") == "on"){  
    ele.animate({left: "2px"}, 300, function(){  
        $("#mymodal").modal("toggle");
      ele.attr("data-state", "off"); 
         tree1.innerText ="java.applet";
         tree2.innerText ="java.awt ";
         tree3.innerText ="java.awt.image";
		 for(var i=0;i<editor.length;i++){
			editor[i].setOption("mode","text/x-java");
		 }
         $(".sub-menu").addClass("sub-menu2");

         
     
    });  
    $(th).removeClass("on").addClass("off");  
  }else if(ele.attr("data-state") == "off"){  
    ele.animate({left: '52px'}, 300, function(){  
      $(this).attr("data-state", "on");  
       $("#mymodal").modal("toggle");
      tree1.innerText ="p5.dom";
         tree2.innerText ="p5.sound ";
         tree3.innerText ="p5.collide2d";
		for(var i=0;i<editor.length;i++){
			editor[i].setOption("mode","javascript");
		 }
          $(".sub-menu").removeClass("sub-menu2");
         
    
    });  
    $(th).removeClass("off").addClass("on");  
  }  
}  

function toogle2(th){ 
var ele = $(th).children(".movetab"); 
if(ele.attr("data-state") == "on"){ 
ele.animate({left: "0"}, 300, function(){ 
ele.attr("data-state", "off"); 
}); 
$(th).removeClass("on").addClass("off"); 
}else if(ele.attr("data-state") == "off"){ 
ele.animate({left: '20px'}, 300, function(){ 
$(this).attr("data-state", "on"); 
}); 
$(th).removeClass("off").addClass("on"); 
} 
}  




var i=1;

function asidecode(){
     if(i%2==1){
         i++;
     	 $('.codeOptions').removeClass('active');
		 $('#codePanel').removeClass('codeOptionsActive');
 }
 else{
     i++;
     $('.codeOptions').addClass('active');
	 $('#codePanel').addClass('codeOptionsActive');
 }
}

function save(){
     $('#editSketchPanel').removeClass('inactive');
     $('#editSketchPanel').addClass('active');

     $('#codePanel').removeClass('active');
     $('#codePanel').addClass('inactive');

     $('#editSketchButton').text('提交');
	if($("#move").attr("data-state") == "on"){
		var canvas = window.frames["ifr"].document.getElementById("defaultCanvas0");
	}else if($("#move").attr("data-state") == "off"){
		var canvas = window.frames["ifr"].document.getElementById("processing-canvas");
	}
	var dataURL = canvas.toDataURL();
	var screenshot = document.getElementById("screenshot");
	screenshot.style.backgroundImage = "url("+dataURL+")";
}

var panel = $('div.codeContainer');
var codeOptions = $('#codeOptions');
function addFont(){
	var txt=document.getElementById("txtFont");
	var a=txt.value;
	a++;
	txt.value=a;
	panel.css("font-size",a+'px');
	codeOptions.css("font-size",16+'px');
}
function subFont(){
	var txt=document.getElementById("txtFont");
	var a=txt.value;
	if(a>1){
		a--;
		txt.value=a;
		panel.css("font-size",a+'px');
		codeOptions.css("font-size",16+'px');
		if(a==12){
			window.alert("某些浏览器限制最小字体大小为12px");
		}
	}else{
		txt.value=1;
		panel.css("font-size",a+'px');
		codeOptions.css("font-size",16+'px');
	}

}
function addTab(){
	var txt=document.getElementById("txtTab");
	var a=txt.value;
	a++;
	txt.value=a;
	for(var i=0;i<editor.length;i++){
		editor[i].options.tabSize=a;
	}
}
function subTab(){
	var txt=document.getElementById("txtTab");
	var a=txt.value;
	if(a>1){
		a--;
		txt.value=a;
		for(var i=0;i<editor.length;i++){
			editor[i].options.tabSize=a;
		}
	}else{
		txt.value=1;
		for(var i=0;i<editor.length;i++){
			editor[i].options.tabSize=a;
		}
	}

}


var themeLight = $('#lightTheme');
var themeDark = $('#darkTheme');
var themeHighContrast = $('#highContrastTheme');
var isLight = true;
var isDark = false;
var isHighContrast = false;
function removeClass(){
//	$('#codeTabs ul').removeClass('lightThemeUlColor');
//	$('#codeTabs ul').find('li').removeClass('lightThemeLiBorderColor');
	$('#codeTabs ul').removeClass('darkThemeUlColor');
	$('#codeTabs ul').find('li').removeClass('darkThemeLiBorderColor');
	$('#codeTabs ul').removeClass('highContrastThemeUlColor');
	$('#codeTabs ul').find('li').removeClass('highContrastThemeLiBorderColor');
}
themeLight.click(function(){
	themeLight.removeClass('labelInactive');
	themeDark.addClass('labelInactive');
	themeHighContrast.addClass('labelInactive');
	for(var i=0;i<editor.length;i++){
		editor[i].setOption("theme","eclipse");
	}
	panel.css("background-color","#f7f7f7");
	removeClass();
	isLight = true;
	isDark = false;
	isHighContrast = false;
//	$('#codeTabs ul').addClass('lightThemeUlColor');
//	$('#codeTabs ul').find('li').addClass('lightThemeLiBorderColor');
})
themeDark.click(function(){
	themeLight.addClass('labelInactive');
	themeDark.removeClass('labelInactive');
	themeHighContrast.addClass('labelInactive');
	for(var i=0;i<editor.length;i++){
		editor[i].setOption("theme","pastel-on-dark");
	}
	panel.css("background-color","#34302f");
	removeClass();
	$('#codeTabs ul').addClass('darkThemeUlColor');
	$('#codeTabs ul').find('li').addClass('darkThemeLiBorderColor');
	isLight = false;
	isDark = true;
	isHighContrast = false;
})
themeHighContrast.click(function(){
	themeLight.addClass('labelInactive');
	themeDark.addClass('labelInactive');
	themeHighContrast.removeClass('labelInactive');
	for(var i=0;i<editor.length;i++){
		editor[i].setOption("theme","seti");
	}
	panel.css("background-color","#0e1112");
	removeClass();
	$('#codeTabs ul').addClass('highContrastThemeUlColor');
	$('#codeTabs ul').find('li').addClass('highContrastThemeLiBorderColor');
	isLight = false;
	isDark = false;
	isHighContrast = true;
})

//console.log(editor.getValue());

var codePlay = $('#codePlay');
var codeWrite = $('#codeWrite');
function beforeCodePlay(){
	codePlay.addClass('selected');
	codeWrite.removeClass('selected');
	$('#codePanel').removeClass('active');
    $('#codePanel').addClass('inactive');
	$('#sketch').removeClass('inactive');
    $('#sketch').addClass('active');
	$('#editSketchPanel').removeClass('active');
	$('#editSketchPanel').addClass('inactive');
	var iframe = document.getElementById('iframe');
	var iframedocument;
	var iframeWindow;
	var value = "";
	for(var i=0;i<editor.length;i++){
		value+=editor[i].getValue();
	}

	iframedocument =  iframe.contentDocument;//contentWindow.document;
	iframeWindow = iframe.contentWindow;
	iframedocument.open();
	if($(".move").attr("data-state") == "on"){
		iframedocument.write('<html><head><script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.js"></script></head><body style="margin:0;"><script>'+value+'</script></body></html>');
	}
	if($(".move").attr("data-state") == "off"){
		iframedocument.write('<html><head><script src="js/processing.js"></script> </head><body style="margin:0;"><script type="application/processing" target="processing-canvas">'+value+'</script><canvas id="processing-canvas"> </canvas></body></html>');
	}
	iframedocument.close();
}
document.getElementById("iframe").onload=function(){
	if($("#move").attr("data-state") == "on"){
		var canvas = window.frames["ifr"].document.getElementById("defaultCanvas0");
	}else if($("#move").attr("data-state") == "off"){
		var canvas = window.frames["ifr"].document.getElementById("processing-canvas");
	}
	var iframe = document.getElementById('iframe');
	iframe.style.width = canvas.width + "px";
	iframe.style.height = canvas.height + "px";
};
codeWrite.click(function(){
	codeWrite.addClass('selected');
	codePlay.removeClass('selected');
	$('#codePanel').removeClass('inactive');
    $('#codePanel').addClass('active');
	$('#sketch').removeClass('active');
    $('#sketch').addClass('inactive');
	$('#editSketchPanel').addClass('inactive');
})




function addPage(){

	//console.log("add");
	document.getElementById("toptab").innerHTML+="<li class=\"selected\" contenteditable=\"false\" onClick=\"tabSelect(this)\"  ondblclick=\"changename(this)\" onblur=\"returnname(this)\">新草图<div contenteditable=\"false\" class=\"icon icon_x_small_dark tabCloseButton\" id=\"tabCloseButton"+ numOfTabs+"\" onclick=\"remove(this)\"></div></li>";
	for(var i=0;i<editor.length;i++){
		$("#tabCloseButton"+i).parent().removeClass("selected");
	}
	$("#codeOptions").before("<div class=\"codePane selected\"><textarea class=\"col-md-12 code\" id=\"code" + numOfTabs + "\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" style=\"display: none;\"></textarea>");
	var addTextarea = document.getElementById('code'+numOfTabs);
		editor[numOfTabs] = CodeMirror.fromTextArea(addTextarea,{
			lineNumbers: true,
			mode: "javascript",
			//theme: 'eclipse',
			toggleComment: true,
			keyMap: 'sublime',
			indentWithTabs: true,
			tabSize: 2,
			foldGutter: true,
			fixedGutter: false,
			gutters: ['CodeMirror-foldgutter']
		  });
	if(isLight){
		editor[numOfTabs].setOption("theme","eclipse");
	}else if(isDark){
		editor[numOfTabs].setOption("theme","pastel-on-dark");
		$("#tabCloseButton"+numOfTabs).parent().addClass("darkThemeLiBorderColor");
	}else if(isHighContrast){
		editor[numOfTabs].setOption("theme","seti");
		$("#tabCloseButton"+numOfTabs).parent().addClass("highContrastThemeLiBorderColor");
	}
	for(var i=0;i<editor.length-1;i++){
		$("#code"+i).parent().removeClass("selected");
	}
	numOfTabs++;
}
function tabSelect(e){
	var str = $(e).children('div').attr('id');
	var num = parseInt(str.replace(/[^0-9]/ig,""));
	for(var i=0;i<editor.length;i++){
		$("#tabCloseButton"+i).parent().removeClass("selected");
	}
	for(var i=0;i<editor.length;i++){
		$("#code"+i).parent().removeClass("selected");
	}
	$(e).addClass("selected");
	$("#code"+num).parent().addClass("selected");
}

var DEL = false;
function remove(e){
	if(DEL){
		if (e && e.stopPropagation) {//非IE浏览器 
		  e.stopPropagation(); 
		} 
		else {//IE浏览器 
		window.event.cancelBubble = true; 
		} 
		var str = $(e).attr('id');
		var num = parseInt(str.replace(/[^0-9]/ig,""));
		var index = $(e).parent().index();
		$(e).parent().remove();
		$("#code"+num).parent().remove();
		$("#hh").click();
	}else{
		alert("删除这个TAB后里面所有代码不会被保存！请再次点击叉号确认删除操作！");
		DEL = true;
	}
}
var strId="";
function changename(e){
	//console.log($(e).attr('contenteditable'));
	$(e).attr("contenteditable",true);
	strId=$(e).children("div").attr("id");
	$(e).children().remove();
}

function returnname(e){
	$(e).attr("contenteditable",false);
	console.log(strId);
	$(e)[0].innerHTML+="<div contenteditable=\"false\" class=\"icon icon_x_small_dark tabCloseButton\" id=\""+strId+"\" onclick=\"remove(this)\"></div>";
}