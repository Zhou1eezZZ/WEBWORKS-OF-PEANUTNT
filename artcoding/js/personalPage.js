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