javascript:(function(){var reg = /^(http:\/\/steamdb.info\/calculator\/\?player=[A-z0-9])/g;
	if(!reg.test(window.location.href)){
		var steamID=prompt("Please enter your SteamID, CommunityID, or Profile URL; then remember to click this bookmarklet again after the redirect!","");
		if(steamID != null && steamID != ""){
			window.location = "http://steamdb.info/calculator/?player="+steamID;
			return false;
		} else {
			window.location = "http://steamdb.info/calculator/";
			return false;
		}
	}
	if(!document.querySelector("[src='https://raw.github.com/sprngr/randomSteamGame/master/randomGame.js']")){
		var script = document.createElement("script");
		script.src = "https://raw.github.com/sprngr/randomSteamGame/master/randomGame.js";
		document.head.appendChild(script);
	}

	if(typeof chooseRandomGame == 'function'){
		chooseRandomGame();
	}
})()
