class Game {
	constructor(game) {
		this.game = game;
		this.players = []
	}

	addPlayers(player) {
		player.currentGame = this.game
		this.players.push(player)
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









	// resolveResults() {
	// 	for(var i = 0; i < this.players[0].strongAgainst.length; i++) {
	// 	if(this.players[0].weapon.strongAgainst[i].includes(this.player[1].weapon.name)) {
	// 		return `${this.players[0].name} wins!`
	// 	}
	// 	if(this.players[0].weapon.name === this.player[1].weapon.name) {
	// 		return 'Looks like a draw!'
	// 	}
	// 	if(this.players[1].weapon.strongAgainst === this.player[0].weapon.name) {
	// 		return `${this.players[1].name} wins!`
	// 	}
	// }
	// }

}