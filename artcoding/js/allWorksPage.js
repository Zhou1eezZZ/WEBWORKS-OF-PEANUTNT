// JavaScript Document
var isListView = false;
var icon = document.getElementById("allWorksPageIcon");
var sr = document.getElementById("searchResults");

function setListView(){
	if(isListView){
		icon.classList.remove("listView");
		sr.classList.remove("listView");
		isListView = false;
	}else{
		icon.classList.add("listView");
		sr.classList.add("listView");
		isListView = true;
	}
}