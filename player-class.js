class Player {
	constructor(name) {
		this.name = name || 'computer';
		this.token = 'assets/Icons/evilComputer.png';
		this.wins = 0;
		this.weapon = {} 
		this.weaponsChoice = []
	}	

	takeTurn(playerChoice, currentGame) {
		if(this.name === 'computer') {
			this.weapon = this.weaponsChoice[Math.floor(Math.random() * this.weaponsChoice.length)]
		} else {
			for(var i = 0; i < this.weaponsChoice.length; i++) {
				if(this.weaponsChoice[i].name === playerChoice) {
					this.weapon = this.weaponsChoice[i]
					return 
				}
			}
		}
	}

	chooseAvatar() {
		this.token = avatar[Math.floor(Math.random() * avatar.length)]
	}
}