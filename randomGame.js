(function(){
	//Runs once to establish styling
	var setupCSS = function() {
		var css = ".selectedGame td,.selectedGame td:hover{color:#fff !important;background:#84bc3c !important;font-weight:bold}.launchButton{float:right;display:inline-block;position:relative;overflow:visible;width:auto;padding:3px 10px;border-bottom:1px solid rgba(0,0,0,0.25);background:#222;color:#fff !important;font-size:13px;font-weight:bold;line-height:1;text-decoration:none;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;-webkit-box-shadow:0 1px 3px rgba(0,0,0,0.25);-moz-box-shadow:0 1px 3px rgba(0,0,0,0.25);box-shadow:0 1px 3px rgba(0,0,0,0.25);text-shadow:0 -1px 1px rgba(0,0,0,0.25);cursor:pointer}.launchButton:hover{background-color:#111;text-decoration:none}";
		var style = document.createElement("style");
		style.type = "text/css";
		style.appendChild(document.createTextNode(css));
		document.head.appendChild(style);
	}

	//Essentially reset the table
	var cleanup = function() {
		var launchBtn = document.querySelector(".launchButton");
		document.querySelector(".selectedGame td:nth-child(3)").removeChild(launchBtn);
		document.querySelector(".selectedGame").className = document.querySelector(".selectedGame").className.replace( /(?:^|\s)selectedGame(?!\S)/g , "" );
	}

	//Most of the magic
	var chooseRandomGame = function() {
		if (document.querySelector(".selectedGame")){
			cleanup();
		} else {
			setupCSS();
		}

		var appList = document.querySelectorAll("table#table-apps tbody tr td:nth-child(3)");
		var appListCount = appList.length;
		var rand = Math.floor(Math.random() * appListCount);

		document.querySelectorAll("table#table-apps tbody tr")[rand].className += "selectedGame";
		if(document.querySelector(".selectedGame td:nth-child(2)").innerHTML != "Game"){
			//Rerolls when it isn"t of app type game
			chooseRandomGame();
		} else {
			var appID = document.querySelector(".selectedGame td:first-child a").text;

			//Rerolls if it hits Steam for Linux
			if(appID == "221410"){
				chooseRandomGame();
				return;
			}
			
			var launchBtn = document.createElement("a");
			launchBtn.href= "steam://run/"+appID;
			launchBtn.appendChild(document.createTextNode("Launch Game"));

			document.querySelector(".selectedGame td:nth-child(3)").appendChild(launchBtn);
			document.querySelector(".selectedGame td:nth-child(3) a").className += "launchButton";

			document.querySelector(".selectedGame").scrollIntoView(true);
			}
		
	}

	//Expose function
	if(typeof window.chooseRandomGame != "function"){
		window.chooseRandomGame = chooseRandomGame;
	}

})()

//Initial run, every one after will be done by the bookmarklet
chooseRandomGame();