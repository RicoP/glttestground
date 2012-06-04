clippy.load('Clippy', function(agent) {
	agent.show();
	var s = "\u2006\u200B";
	var space = s+s+s+s+s+s+s+s+s+s+s+s+s+s+s+s+s+s+s+s;

	agent.play("GetAttention");	
	agent.speak("Hi,It appears to be that you are using Internet Explorer\u2122." + space);
	agent.speak("You may haven't noticed, but the internet has changed the last 10 years." + space);
	agent.speak("There are other and better non proprietary internet browsers out there." + space);
	agent.speak("These browsers bind you not to the dedecisions made by a gigantic company, which only implements new HTML standards as long they are not against their interests." + space);
	agent.speak("So get Mozilla Firefox or Google Chrome today so you can experience new and fun HTML5 technologies." + space);
});

