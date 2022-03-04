// var game = new Game(alternate)
// var player1 = new Player()
// var player2 = new Player('Daniel')
// game.addPlayers(player1)
// game.addPlayers(player2)
// player1.takeTurn()
// player2.takeTurn(alternate.weapons[3])
// player2.chooseAvatar()
// console.log(game.resolveResults())
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
// window.addEventListener('load', displayForm)
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
	if(currentPlayers[0].score) {
		document.getElementById('userScore').innerText = `Wins = ${currentPlayers[0].score}`;
	}
	if(currentPlayers[1].score) {
		document.getElementById('computerScore').innerText = `Wins = ${currentPlayers[1].score}`;
	}
}

function startNewGame(event) {
	console.log(event.target.dataset.game)
	if(event.target.dataset.game === "classic" || event.target.dataset.game === "alternate") {
		currentGame = new Game(eval(event.target.dataset.game))
		currentGame.addPlayers(currentPlayers)
		console.log(currentGame)
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

function addDisplayEventListener() {
	var battleInterface = document.getElementById('battleInterface')
	battleInterface.addEventListener('click', function(event) {
		test(event)
	})
}

function test(event) {
	console.log(event.target)
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
