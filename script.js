// var game = new Game(alternate)
// var player1 = new Player()
// var player2 = new Player('Daniel')
// game.addPlayers(player1)
// game.addPlayers(player2)
// player1.takeTurn()
// player2.takeTurn(alternate[2])
// player2.chooseAvatar()
// console.log(player1.token)
// console.log(player2.token)
// console.log(game.resolveResults())
// console.log(game)
//~~~~~~~~~~~~~~~~~Globals~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var currentPlayers = []
var currentGame;


//~~~~~~~~~~~~~~~~~~SELECTORS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var avatarButton = document.querySelector('.change-avatar')
var generateUserButton = document.querySelector('.generate-user')
var userNameInput = document.querySelector('.user-name')
var formAvatarIcon = document.querySelector('.avatar-icon')

//~~~~~~~~~~~~~~~~~~EVENT LISTENERS~~~~~~~~~~~~~~~~~~~~~~~~~~~
window.addEventListener('load', displayForm)
avatarButton.addEventListener('click', changeFormAvatarIcon)
generateUserButton.addEventListener('click', function() {
	event.preventDefault()
	generatePlayerOne()
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
		console.log(currentPlayers)
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
