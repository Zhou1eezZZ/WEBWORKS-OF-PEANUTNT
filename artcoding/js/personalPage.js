// JavaScript Document
var isListView = false;
var icon = document.getElementById("listToggle");
var hl = document.getElementById("heartsList");

function setListView(){
	if(isListView){
		icon.classList.remove("listView");
		hl.classList.remove("listView");
		isListView = false;
	}else{
		icon.classList.add("listView");
		hl.classList.add("listView");
		isListView = true;
	}
}

var i=1;

function loag() {
            var btn = $("#eiditButton");
              if(i%2==1){
            btn.val('active');
              i++;
              document.getElementById('editButton').innerHTML='保存';


              $('#topPanel').addClass('edit');
			  $('#fullname').addClass('edit');
              $('#location').addClass('edit');
              document.getElementById("fullname").contentEditable = true;
				document.getElementById("location").contentEditable = true;
               $('#passwordField').addClass('hide');

          
           $('#additionalFormFields').removeClass('fadeInOnEdit hide');
           $('#changepic').removeClass('row fadeInOnEdit hide');
           $('#content').hide();
           $('#toptabs').hide();
           $('#describeme').hide();

           $('#changePasswordLink').on('click', function (e) {
        //clog(e);
        //e.preventDefault();
        $(this).hide();
        $('#changePassword').addClass('active');
        $('#passwordField').removeClass('hide').focus();
        return false;
    });
            }
            else{
              document.getElementById('editButton').innerHTML='编辑';
             i++;

			  $('#topPanel').removeClass('edit');
              $('#fullname').removeClass('edit');
              $('#location').removeClass('edit');
              document.getElementById("fullname").contentEditable = false;
              document.getElementById("location").contentEditable = false;
                  $('#passwordField').removeClass('hide'); 

           $('#additionalFormFields').addClass('fadeInOnEdit hide');
           $('#changepic').addClass('row fadeInOnEdit hide');
           $('#content').show();
           $('#toptabs').show();
           $('#describeme').show();

              btn.button('loading');
             setTimeout(function () { btn.val('normal'); },500);
            }
           
           
          
}



function readFiles(evt){  
var files=evt.target.files;  
if(!files){  
console.log("the file is invaild");  
return;  
}  
for(var i=0, file; file=files[i]; i++){  
var imgele=new Image();  
var thesrc=window.URL.createObjectURL(file);  
imgele.src=thesrc;  
imgele.onload=function(){  

 
$("#toppic").attr("src",this.src);  
}  
}  
}  


$(document).ready(function(){  
$("#logoimg").change(function(e){  
readFiles(e)  
});  
}); 
