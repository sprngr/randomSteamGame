#Random Steam Game Bookmarklet

*Lets you select a random game to play from your game list (or anyone's) via steamdb.info*

###How to use
Copy the contents of either bookmarklet.min.js or the code below into the URL field for a new bookmark in your browser.

**Bookmarklet code**
```javascript
javascript:(function(){var reg=/^(http:\/\/steamdb.info\/calculator\/\?player=[A-z0-9])/g;if(!reg.test(window.location.href)){var steamID=prompt("Please enter your SteamID or profile name, then remember to click this bookmarklet again after the redirect!","");if(steamID!=null&&steamID!=""){window.location="http://steamdb.info/calculator/?player="+steamID;return false}else{window.location="http://steamdb.info/calculator/";return false}}if(!document.querySelector("[src='https://raw.github.com/sprngr/randomSteamGame/master/randomGame.js']")){var script=document.createElement("script");script.src="https://raw.github.com/sprngr/randomSteamGame/master/randomGame.js";document.head.appendChild(script)}if(typeof chooseRandomGame=="function"){chooseRandomGame()}})();
```

Once the bookmark has been made, either view your profile under steamdb.info/calculator/ or click the bookmark you just made & follow the instructions.


###Why was this made?

I have way too many games on Steam and in an attempt to play new ones, I would run a random number gen and find the game in my list. 
That got too tedious so I started manipulating my page on steamdb via the javascript console. At that point I figured why not make it just
a simple button to click rather than copy in code each time; it kind of evolved from there.

###Features

- Lets you enter a steamID if you are too lazy to go to the page before clicking the bookmark.
- Highlights and scrolls to the game it has just selected for you.
- Adds a handy launch button to start the game right away.
- Bookmarklet calls latest code from here so you never have to worry about updating what you have.

###Future Updates

Unknown at this time, too busy playing games.
