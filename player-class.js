class Player {
	constructor(name, avatar) {
		this.name = name || 'computer';
		this.token = avatar || 'img';
		this.wins = 0;
		this.weapon = {} 
		this.currentGame = {};
	}	

	takeTurn(playerChoice) {
		if(this.name === 'computer') {
			this.weapon = this.currentGame[Math.floor(Math.random() * this.currentGame.length)]
		} else {
			this.weapon = playerChoice
		}
	}

}