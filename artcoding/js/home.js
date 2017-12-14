// JavaScript Document
var featuresSrc = [
	'works/colorsmoke/colorsmoke.html',
	'works/frozen brush/frozen brush.html',
	'works/Psychodelic Sieve of Eratosthenes/Psychodelic Sieve of Eratosthenes.html',
	'works/Solar Flare/Solar Flare.html'
];
var featuresName = [
	'Color smoke','frozen brush','Psychodelic Sieve of Eratosthenes','Solar Flare'
];
var featureWriter = [
	'Isura','Jason Labbe','jarrn','Jacob Joaquin'
];
var ifr = document.getElementById("iframe");
var ft = document.getElementById("featuredTitle");
var fw = document.getElementById("featuredFullname");
var numOfFeature = parseInt(4 * Math.random());

function initIframe(){
	ifr.src = featuresSrc[numOfFeature];
	ft.innerHTML = featuresName[numOfFeature];
	fw.innerHTML = featureWriter[numOfFeature];
}

//初始化iframe
initIframe();

window.onresize = function(){
	ifr.src = featuresSrc[numOfFeature];
}

function nextFeature(){
	if(numOfFeature == 3){
		numOfFeature = 0;
		initIframe();
	}else{
		numOfFeature++;
		initIframe();
	}
}

function previousFeature(){
	if(numOfFeature == 0){
		numOfFeature = 3;
		initIframe();
	}else{
		numOfFeature--;
		initIframe();
	}
}