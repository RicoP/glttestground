//= lib/glt.js
//= game.js
//= game.pathhelper.js 

if(!GAME_LEVELMANAGER_JS) {
(function() { 
"use strict"; 

GAME.LEVELMANAGER = {}; 

GAME.LEVELMANAGER.loadlevel = function(name, callbackprogress, callbackfinished) {
	var mappath = "maps/" + name + ".json"; 

	GLT.loadmanager.loadFiles({
		"files" : [ mappath ], 
		"error" : function (file, m) {
			console.error(file, m); 
		}, 
		"finished" : function(files) {
			var mapdata = files[mappath]; 
			console.log(mapdata); 
		}
	}); 
}

}()); 
}
var GAME_LEVELMANAGER_JS = true; 
