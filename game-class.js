class Game {
	constructor(game) {
		this.name = game.name;
		this.images = game.images
		this.weapons = game.weapons;
		this.timeOut = false;
		this.description = game.description;
		this.players = [];
		this.results = ''
	};

	addPlayers(player) {
		this.players = this.players.concat(player);
		for(var i = 0; i < this.players.length; i++) {
			this.players[i].weaponsChoice = this.weapons;
		};
	};

	resolveResults() {
		let number = 1;
		for(var i = 0; i < this.players.length; i++) {
			var index = i + number;
			if(this.players[i].weapon.strongAgainst.includes(this.players[index].weapon.name)) {
				this.players[i].wins++;
				this.results = `${this.players[i].name} Wins!`
				return;
			} number = -1;
		}	
			this.results = 'Looks like a draw!'
			return ;
		};
};