//~~~~~~~~~~~~~~~~~Globals~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var currentPlayers = []
var currentGame;

//~~~~~~~~~~~~~~~~~~SELECTORS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var avatarButton = document.querySelector('.change-avatar')
var generateUserButton = document.querySelector('.generate-user')
var userNameInput = document.querySelector('.user-name')
var formAvatarIcon = document.querySelector('.avatar-icon')
var alternateButton = document.getElementById('alternate')
var classicButton = document.getElementById('classic')
var topDisplay = document.getElementById('homeTopView')
var bottomDisplay = document.getElementById('playerDisplay')
var main = document.getElementById('main')
var gameDisplay = document.getElementById('gameOptions')

//~~~~~~~~~~~~~~~~~~EVENT LISTENERS~~~~~~~~~~~~~~~~~~~~~~~~~~~
window.addEventListener('load', displayForm)
avatarButton.addEventListener('click', changeFormAvatarIcon)

generateUserButton.addEventListener('click', function() {
	event.preventDefault()
	generatePlayerOne()
})

gameDisplay.addEventListener('click', function(event){
	startNewGame(event)
})

//~~~~~~~~~~~~~~~~~~~FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function displayForm() {
	document.querySelector('.screen').classList.remove('hidden')
	document.querySelector('.form').classList.remove('hidden')
}

function changeFormAvatarIcon() {
	formAvatarIcon.src = avatar[Math.floor(Math.random() * avatar.length)]
}

function generatePlayerOne() {
	if(userNameInput.value) {
		currentPlayers.push(new Player(userNameInput.value))
		currentPlayers[0].token = formAvatarIcon.src
		currentPlayers.push(new Player)
		populateUserData()
		document.querySelector('.screen').classList.add('hidden')
		document.querySelector('.form').classList.add('hidden')
	}
}

function populateUserData() {
	document.getElementById('userAvatar').src = currentPlayers[0].token;
	document.getElementById('userName').innerText = currentPlayers[0].name;
	generateScores()
}

function startNewGame(event) {
	if(event.target.dataset.game === "classic" || event.target.dataset.game === "alternate") {
		currentGame = new Game(eval(event.target.dataset.game))
		currentGame.addPlayers(currentPlayers)
		switchToAlternateBattleWindow()
		addDisplayEventListener()	
	}
}

function switchToAlternateBattleWindow() {
	topDisplay.classList.add('hidden')
	var battleSection = document.createElement('section')
	battleSection.id = 'battleInterface'
	battleSection.classList.add('top-display')
	addHeader(battleSection)
	addGameIcons(battleSection)
	addLabel(battleSection)
	main.insertBefore(battleSection, bottomDisplay)
}

function addLabel(battleSection) {
	var label = document.createElement('p')
	label.classList.add('game-description')
	label.innerText = currentGame.description
	battleSection.appendChild(label)
}


function addHeader(battleSection) {
	var header = document.createElement('h1')
	header.innerText = currentGame.name
	battleSection.appendChild(header)
}

function addGameIcons(battleSection) {
	var icons = document.createElement('div')
	icons.classList.add('game-view-weapons')
	for(var i = 0; i < currentGame.images.length; i++) {
		var img = document.createElement('img')
		img.src = currentGame.images[i].img
		img.setAttribute('data-weapon', currentGame.weapons[i].name)
		img.alt = currentGame.images[i].alt
		img.classList.add('figures-weapon')
		icons.appendChild(img)
	}
	battleSection.appendChild(icons)
}

function addDisplayEventListener() {
	var battleInterface = document.getElementById('battleInterface')
	battleInterface.addEventListener('click', function(event) {
		chooseWeapon(event)
		results()
		displayResults(battleInterface)
	})
}

function chooseWeapon(event) {
	if(event.target.dataset.weapon) {
		for(var i = 0; i < currentPlayers.length; i++) {
			currentPlayers[i].takeTurn(event.target.dataset.weapon, currentGame)
		}
	}
}

function results() {
	currentGame.resolveResults()
	generateScores()
}

function generateScores() {
		document.getElementById('userScore').innerText = `Wins = ${currentPlayers[0].wins}`;
		document.getElementById('computerScore').innerText = `Wins = ${currentPlayers[1].wins}`;
}

function displayResults(battleInterface) {
	var resultsDisplay = document.createElement('section')
	resultsDisplay.classList.add('results-display')
	for(var i = 0; i < currentGame.players.length; i++) {
		var figure = document.createElement('figure')
			var img = document.createElement('img')
				img.src = currentGame.players[i].weapon.img
				img.alt = currentGame.players[i].weapon.alt
				img.classList.add('figures-weapon', 'results-icon')
			var figcaption = document.createElement('figcaption')
					figcaption.innerText = `${currentGame.players[i].name}'s Choice`
				figure.appendChild(img)		
				figure.appendChild(figcaption)
		resultsDisplay.appendChild(figure)
	}
	battleInterface.appendChild(resultsDisplay)
}

// function createLabel(resultsDisplay, i) {
// 	var label = document.createElement('label')
// 	label.innerText = `${currentGame.players[i].name}'s Choice`
// 	label.classList.add('label')
// 	resultsDisplay.appendChild(label)
// }