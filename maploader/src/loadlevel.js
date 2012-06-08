//= GLT.js
//= head.js
//= datahelper.js 

if(!LOADLEVEL_JS) {
var LOADLEVEL_JS = true; 
(function() { 
"use strict"; 

function getObjectLevel(map, objects, callback) {
	var w = map.width; 
	var h = map.height; 

	var objectlayer = getObjectLayer(map); 
	var map = [];

	function loadModels(mapping, callback) {
		var files = []; 

		for(var model in mapping) {
			if(mapping.hasOwnProperty(model)) {
				var obj = GAME.datahelper.toPath(model.model);
				var tex = GAME.datahelper.toPath(model.texture);

				files.push(obj, tex); 
			}
		}

		GLT.loadmanager.loadfiles({
			"files" : files, 
			"finished" : function(files) {
				
			}
		});
	}

	function getObjectLayer(map) {
		for(var i = 0; i != map.leyers.length; i++) {
			if(map.layer[i].name === "objects") {
				return map.layer[i]; 
			}
		}
	}
}

GAME.loadlevel = function(name, callbackprogress, callbackfinished) {
	var pathmap = "data/" + name + ".json"; 
	var pathobjects = "data/objects.json"; 
	var mapdata = null; 
	var objects = null; 

	var map = {};
	var objects = {};
	
	GLT.loadmanager.loadfiles({
		"files" : [
			pathmap,
			pathobjects
		],
		"update" : callbackprogress, 
		"finsished" : function(files) {
			map = files[pathmap]; 
			objects = files[pathobjects]; 
		}, 
		"error" : function(file, message) {
			console.err(file, message); 
		}
	});
}

}()); 
}
