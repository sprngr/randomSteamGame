#Random Steam Game Bookmarklet

Lets you select a random game to play from your game list (or anyone's) via steamdb.info

[Random Steam Game](javascript:%28function%28%29%7var reg=/^%28http:\/\/steamdb.info\/calculator\/\?player=[A-z0-9]%29/g;if%28!reg.test%28window.location.href%29%29%7var steamID=prompt%28"Please enter your SteamID or profile name, then remember to click this bookmarklet again after the redirect!",""%29;if%28steamID!=null&&steamID!=""%29%7window.location="http://steamdb.info/calculator/?player="+steamID;return false%7Delse%7window.location="http://steamdb.info/calculator/";return false%7D%7Dif%28!document.querySelector%28"[src='https://raw.github.com/sprngr/randomSteamGame/master/randomGame.js']"%29%29%7var script=document.createElement%28"script"%29;script.src="https://raw.github.com/sprngr/randomSteamGame/master/randomGame.js";document.head.appendChild%28script%29%7Dif%28typeof chooseRandomGame=="function"%29%7chooseRandomGame%28%29%7D%7D%29%28%29;)
