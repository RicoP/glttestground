//= lib/glt.js
//= game.js
//= game.pathhelper.js 

if(!GAME_LEVELMANAGER_JS) {
(function() { 
"use strict"; 

GAME.LEVELMANAGER = {}; 

GAME.LEVELMANAGER.loadlevel = function(name, gl, callbackprogress, callbackfinished) {
	var mappath = "maps/" + name + ".json"; 

	GLT.loadmanager.loadFiles({
		"files" : [ mappath ], 
		"error" : function (file, m) {
			console.error(file, m); 
		}, 
		"finished" : function(files) {
			var mapdata = files[mappath]; 
			processLevel(mapdata, gl, callbackprogress, callbackfinished);  
		}
	}); 
}

function processLevel(map, gl, onupdate, onfinished) {
	var map = {}; 

	GLT.loadmanager.loadFiles({
		"files" : map.data, 
		"update" : onupdate, 
		"error" : function (file, m) {
			console.error(file, m); 
		}, 
		"finished" : function(data) {
			console.log("loaded"); 
			var dict = mapTagToKey(data); 
			var models = [];
			for(var i = 0; i != map.objects.models.length; i++) {
				var model = map.objects.models[i]; 

			}
		}
	});
}

}()); 
}
var GAME_LEVELMANAGER_JS = true; 
