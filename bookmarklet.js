javascript:(function(){var reg = /^(http:\/\/steamdb.info\/calculator\/\?player=[A-z0-9])/g;
	if(!reg.test(window.location.href)){
		var steamID=prompt("Please enter your SteamID, CommunityID, or Profile URL; If you do not know any of these just leave it blank and hit OK, then follow the instructions on the page to find a profile.\n\nRemember to click this bookmarklet again once you get to a profile on steamdb.info!","");
		if(steamID != null && steamID != ""){
			window.location = "http://steamdb.info/calculator/?player="+steamID;
			return false;
		} else {
			window.location = "http://steamdb.info/calculator/";
			return false;
		}
	}
	if(typeof chooseRandomGame != 'function')){
		var script = document.createElement("script");
		script.src = "https://raw.github.com/sprngr/randomSteamGame/master/randomGame.js";
		document.head.appendChild(script);
	}

	if(typeof chooseRandomGame == 'function'){
		chooseRandomGame();
	}
})()
