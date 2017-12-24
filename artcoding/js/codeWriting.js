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


var myTextarea = document.getElementById('code');
var editor=CodeMirror.fromTextArea(myTextarea,{
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
    ele.animate({left: "0"}, 300, function(){  
        $("#mymodal").modal("toggle");
      ele.attr("data-state", "off"); 
         tree1.innerText ="java.applet";
         tree2.innerText ="java.awt ";
         tree3.innerText ="java.awt.image";
         editor.setOption("mode","text/x-java");
         $(".sub-menu").addClass("sub-menu2");
         console.log(editor);

         
     
    });  
    $(th).removeClass("on").addClass("off");  
  }else if(ele.attr("data-state") == "off"){  
    ele.animate({left: '40px'}, 300, function(){  
      $(this).attr("data-state", "on");  
       $("#mymodal").modal("toggle");
      tree1.innerText ="p5.dom";
         tree2.innerText ="p5.sound ";
         tree3.innerText ="p5.collide2d";
          $(".sub-menu").removeClass("sub-menu2");
         
    
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
    console.log("save");
     $('#editSketchPanel').removeClass('inactive');
     $('#editSketchPanel').addClass('active');

     $('#codePanel').removeClass('active');
     $('#codePanel').addClass('inactive');

     $('#editSketchButton').text('提交');
}

var panel = document.getElementById("fontSizePanel");
function addFont(){
	var txt=document.getElementById("txtFont");
	var a=txt.value;
	a++;
	txt.value=a;
	panel.style.fontSize = a+'px';
}
function subFont(){
	var txt=document.getElementById("txtFont");
	var a=txt.value;
	if(a>1){
		a--;
		txt.value=a;
		panel.style.fontSize = a+'px';
		if(a==12){
			window.alert("某些浏览器限制最小字体大小为12px");
		}
	}else{
		txt.value=1;
		panel.style.fontSize = a+'px';
	}

}
function addTab(){
	var txt=document.getElementById("txtTab");
	var a=txt.value;
	a++;
	txt.value=a;
	//console.log(editor);
	editor.options.tabSize=a;
}
function subTab(){
	var txt=document.getElementById("txtTab");
	var a=txt.value;
	if(a>1){
		a--;
		txt.value=a;
		editor.options.tabSize=a;
	}else{
		txt.value=1;
		editor.options.tabSize=1;
	}

}


var themeLight = $('#lightTheme');
var themeDark = $('#darkTheme');
var themeHighContrast = $('#highContrastTheme');
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
	editor.setOption("theme","eclipse");
	panel.style.background = '#f7f7f7';
	removeClass();
//	$('#codeTabs ul').addClass('lightThemeUlColor');
//	$('#codeTabs ul').find('li').addClass('lightThemeLiBorderColor');
})
themeDark.click(function(){
	themeLight.addClass('labelInactive');
	themeDark.removeClass('labelInactive');
	themeHighContrast.addClass('labelInactive');
	editor.setOption("theme","pastel-on-dark");
	panel.style.background = '#34302f';
	removeClass();
	$('#codeTabs ul').addClass('darkThemeUlColor');
	$('#codeTabs ul').find('li').addClass('darkThemeLiBorderColor');
})
themeHighContrast.click(function(){
	themeLight.addClass('labelInactive');
	themeDark.addClass('labelInactive');
	themeHighContrast.removeClass('labelInactive');
	editor.setOption("theme","seti");
	panel.style.background = '#0e1112';
	removeClass();
	$('#codeTabs ul').addClass('highContrastThemeUlColor');
	$('#codeTabs ul').find('li').addClass('highContrastThemeLiBorderColor');
})

//console.log(editor.getValue());

var codePlay = $('#codePlay');
var codeWrite = $('#codeWrite');
codePlay.click(function(){
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

	iframedocument =  iframe.contentDocument;//contentWindow.document;
	iframeWindow = iframe.contentWindow;
	iframedocument.open();
	if($(".move").attr("data-state") == "on"){
		iframedocument.write('<html><head><script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.js"></script></head><body><script>'+editor.getValue()+'</script></body></html>');
	}
	if($(".move").attr("data-state") == "off"){
		iframedocument.write('<html><head><script src="js/processing.js"></script> </head><body><script type="application/processing" target="processing-canvas">'+editor.getValue()+'</script><canvas id="processing-canvas"> </canvas></body></html>');
	}
	iframedocument.close();
})
codeWrite.click(function(){
	codeWrite.addClass('selected');
	codePlay.removeClass('selected');
	$('#codePanel').removeClass('inactive');
    $('#codePanel').addClass('active');
	$('#sketch').removeClass('active');
    $('#sketch').addClass('inactive');
})
