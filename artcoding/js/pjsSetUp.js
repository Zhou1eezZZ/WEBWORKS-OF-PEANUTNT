window.processor = false;
$(window).on('load', function(){
    value = "";
	for (var i = 0; i < parent.window.editor.length; i++) {
		if (i != 0) {
			value += " \n ";
		}
		value += parent.window.editor[i].getValue();
	}
    var jsCode = Processing.compile(value);
    var canvas = document.getElementById("processing-canvas");
    // attaching the sketchProc function to the canvas
    window.processor = new Processing(canvas, jsCode);
    //console.log('processor', processor);
    extendPjs(processor); //extends for draw function
});



//extend createCanvas to also set the iframe dimensions
var extendPjs = function (p, sk) {
    window.parent.processor = p;
    if (arguments.length > 1) {
        //you can use onLoop onSetup etc here.
    }

    //instead of extending, catch size change event
    //setupSizeChange();
	 var curColorMode, colorModeX, colorModeY, colorModeZ, colorModeA;
    var cm = p.colorMode;
    //set default color mode

    p.colorMode = function () { // mode, range1, range2, range3, range4
        cm.apply(this, arguments);
        p.curColorMode = arguments[0];
        if (arguments.length > 1) {
            p.colorModeX = arguments[1];
            p.colorModeY = arguments[2] || arguments[1];
            p.colorModeZ = arguments[3] || arguments[1];
            p.colorModeA = arguments[4] || arguments[1];
        }
    };

    /*//extend background to set bg color // this is handled in processing.js, backgroundHelper
    var bg = p.backgroundHelper;
    p.backgroundHelper = function (x,y,z,a) {


        //console.log('pjs calls bg!');
        var ret = bg.apply(this, arguments);

        p._setOPbackground(arguments);
    }*/
    p._setOPbackground = function () {
        var args = arguments[0];
        //calculate css colors
        var colorCss = '';
        if (this.PImage && args[0] instanceof this.PImage) {
            colorCss = 'url("")';
        } else {

            c = this.color(args[0],args[1],args[2],args[3]);
            red = Math.round(this.red(c) * 255 / this.colorModeX);
            green = Math.round(this.green(c) * 255 / this.colorModeY);
            blue = Math.round(this.blue(c) * 255 / this.colorModeZ);
            alpha = Math.round(this.alpha(c) * 255 / this.colorModeA);
            colorCss = 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
        }
        window.parent.sketchEngine.setSketchBackground(colorCss);
    }



    //add fullScreen
    var canvasCreated = false;
    p.fullScreen = p.fullscreen = function () {
        var self = this;
        //add itself to browser behavior
        $(window.parent).off("resize");
        $(window.parent).resize(function () {
            //self.noLoop();
            self.fullScreen();
            //window.setTimeout(function(){self.loop();},1200);
        });

        var dims = window.parent.sketchEngine.getSketchFullScreenDimensions();
        this.size(dims[0], dims[1]);

    }
    //add clear()
	window.clear = p.clear =  function () {
		$('canvas').get()[0].getContext('2d').clearRect(0, 0, $(window).width(), $(window).height()); //clear bg
    }

    //print and println
    window.println = p.println = function (msg) {
        window.parent.sketchConsole.showMessage(msg);
    }
    window.print = p.print = function (msg) {
        window.parent.sketchConsole.showMessage(msg, true);
    }
}