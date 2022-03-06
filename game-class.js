class Game {
	constructor(game) {
		this.name = game.name;
		this.images = game.images
		this.weapons = game.weapons;
		this.description = game.description;
		this.players = [];
	}

	addPlayers(player) {
		this.players = this.players.concat(player)
		for(var i = 0; i < this.players.length; i++) {
			this.players[i].weaponsChoice = this.weapons
		}
	}

	resolveResults() {
		var number = 1
		for(var i = 0; i < this.players.length; i++) {
		var index = i + number
		if(this.players[i].weapon.strongAgainst.includes(this.players[index].weapon.name)) {
			this.players[i].wins++
			return `${this.players[i].name} wins!`
			} number = -1;
		}	return 'Looks like a draw!'
		}
}