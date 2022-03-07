//~~~~~~~~~~~~~~~~~Globals~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var currentPlayers = [];
var currentGame;

//~~~~~~~~~~~~~~~~~~SELECTORS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var avatarButton = document.querySelector('.change-avatar');
var generateUserButton = document.querySelector('.generate-user');
var userNameInput = document.getElementById('userNameInput');
var formAvatarIcon = document.querySelector('.avatar-icon');
var alternateButton = document.getElementById('alternate');
var classicButton = document.getElementById('classic');
var topDisplay = document.getElementById('homeTopView');
var bottomDisplay = document.getElementById('playerDisplay');
var main = document.getElementById('main');
var gameDisplay = document.getElementById('gameOptions');

//~~~~~~~~~~~~~~~~~~EVENT LISTENERS~~~~~~~~~~~~~~~~~~~~~~~~~~~
window.addEventListener('load', displayForm);
avatarButton.addEventListener('click', changeFormAvatarIcon);

console.log(userNameInput.value)

generateUserButton.addEventListener('click', function() {
	event.preventDefault()
	generatePlayerOne()
});

gameDisplay.addEventListener('click', function(event){
	startNewGame(event)
});

//~~~~~~~~~~~~~~~~~~~FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function displayForm() {
	document.querySelector('.screen').classList.remove('hidden');
	document.querySelector('.form').classList.remove('hidden');
};

function changeFormAvatarIcon() {
	formAvatarIcon.src = avatar[Math.floor(Math.random() * avatar.length)];
};

function generatePlayerOne() {
	if(userNameInput.value) {
		currentPlayers.push(new Player(userNameInput.value));
		currentPlayers[0].token = formAvatarIcon.src;
		currentPlayers.push(new Player);
		populateUserData();
		document.querySelector('.screen').classList.add('hidden');
		document.querySelector('.form').classList.add('hidden');
	};
};

function populateUserData() {
	document.getElementById('userAvatar').src = currentPlayers[0].token;
	document.getElementById('userName').innerText = currentPlayers[0].name;
	generateScores();
};

function startNewGame(event) {
	if(event.target.dataset.game === "classic" || event.target.dataset.game === "alternate") {
		currentGame = new Game(eval(event.target.dataset.game));
		currentGame.addPlayers(currentPlayers);
		switchToAlternateBattleWindow();
	};
};

function switchToAlternateBattleWindow() {
	topDisplay.classList.add('hidden');
	var battleSection = createElement({tag:'section', class:['top-display'], id:'battleInterface', needEL:true, event:'click', function(e){chooseWeapon(e)}});
	addHeader(battleSection);
	addGameIcons(battleSection);
	addLabel(battleSection);
	main.insertBefore(battleSection, bottomDisplay);
};

function addLabel(battleSection) {
	var label = createElement({tag:'p', class:['game-description'], innerText:currentGame.description});
	battleSection.appendChild(label);
};

function addHeader(battleSection) {
	var header = createElement({tag:'h1', innerText: currentGame.name});
		header.appendChild(createElement({tag:'button', innerText:'Return Home', class:['return-home-button'], needEL:true, event:'click', function() {returnHome(battleSection)}}));
		header.appendChild(createElement({tag:'button', innerText:'Reset Score', needEL:true, class:['reset-button'], event:'click', function() {resetScore()}}));
	battleSection.appendChild(header);
};

function resetScore() {
	for(var i = 0; i < currentPlayers.length; i++) {
		currentPlayers[i].wins = 0;
	};
	generateScores();
};

function returnHome(battleSection) {
	battleSection.remove();
	topDisplay.classList.remove('hidden');
};

function createElement(object) {
	var element = document.createElement(object.tag);
	if(object.class) {
		element.classList.add(...object.class)
	};
	element.src = object.src || null;
	element.alt = object.alt || null;
	element.id = object.id || null;
	element.innerText = object.innerText || null;
	if(object.needEL) {
		element.addEventListener(object.event, function(e){
			object.function(e)
		})
	};
	return element;
};

function addGameIcons(battleSection) {
	var icons = createElement({tag:'div', class:['game-view-weapons']});
	for(var i = 0; i < currentGame.images.length; i++) {
		img = createElement({tag:'img', src: currentGame.images[i].img, alt:currentGame.images[i].alt, class:['figures-weapon', 'test1', 'test2']})
		img.setAttribute('data-weapon', currentGame.weapons[i].name);
		icons.appendChild(img);
	};
	battleSection.appendChild(icons);
};

function chooseWeapon(event) {
	if(!event.target.dataset.weapon) {
		return
	};
	if(event.target.dataset.weapon) {
		for(var i = 0; i < currentPlayers.length; i++) {
			currentPlayers[i].takeTurn(event.target.dataset.weapon, currentGame)
		};
	};
	if(!currentGame.timeOut) {
		currentGame.timeOut = true;
		currentGame.resolveResults();
		generateScores();
		displayResults();
	};
};

function generateScores() {
		document.getElementById('userScore').innerText = `Wins = ${currentPlayers[0].wins}`;
		document.getElementById('computerScore').innerText = `Wins = ${currentPlayers[1].wins}`;
};

function displayResults() {
	var resultsDisplay = createElement({tag:'section', class:['results-display']});
	for(var i = 0; i < currentGame.players.length; i++) {
		var figure = createElement({tag:'figure'});
			figure.appendChild(createElement({tag:'img', src:currentGame.players[i].weapon.img, alt:currentGame.players[i].weapon.alt, class:['results-icon']}));
			figure.appendChild(createElement({tag:'figcaption', innerText:`${currentGame.players[i].name}'s Choice`}));
		resultsDisplay.appendChild(figure);
	};
	displayWinner(resultsDisplay);
};

function displayWinner(resultsDisplay) {
	if(battleInterface.lastChild.className === 'results-display') {
		battleInterface.replaceChild(resultsDisplay, battleInterface.lastChild);
	} else {
		battleInterface.appendChild(resultsDisplay);
	}
	var winnerPara = createElement({tag:'para', class:['results-para'], innerText:currentGame.results});
	resultsDisplay.appendChild(winnerPara);
	setTimeout(function() {
		currentGame.timeOut = false;
		resultsDisplay.remove();
	}, 2000);
};
