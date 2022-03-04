var game = new Game(alternate)
var player1 = new Player()
var player2 = new Player('Daniel')
game.addPlayers(player1)
game.addPlayers(player2)
player1.takeTurn()
player2.takeTurn(alternate[2])
player2.chooseAvatar()
console.log(player1.token)
console.log(player2.token)
console.log(game.resolveResults())
console.log(game)
//~~~~~~~~~~~~~~~~~~SELECTORS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var avatarButton = document.querySelector('.change-avatar')
var generatePlayerButton = document.querySelector('.generate-user')
var userNameInput = document.querySelector('.user-name')

//~~~~~~~~~~~~~~~~~~EVENT LISTENERS~~~~~~~~~~~~~~~~~~~~~~~~~~~
window.addEventListener('load', displayForm)


//~~~~~~~~~~~~~~~~~~~FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function displayForm() {
	document.querySelector('.screen').classList.remove('hidden')
	document.querySelector('.form').classList.remove('hidden')
}
