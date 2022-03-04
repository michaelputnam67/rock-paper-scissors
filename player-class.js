class Player {
	constructor(name) {
		this.name = name || 'computer';
		this.token = 'assets/Icons/evilComputer.png';
		this.wins = 0;
		this.weapon = {} 
		this.weaponsChoice = []
	}	

	takeTurn(playerChoice) {
		if(this.name === 'computer') {
			this.weapon = this.weaponsChoice[Math.floor(Math.random() * this.weaponsChoice.length)]
		} else {
			this.weapon = playerChoice
		}
	}

	chooseAvatar() {
		this.token = avatar[Math.floor(Math.random() * avatar.length)]
	}

}