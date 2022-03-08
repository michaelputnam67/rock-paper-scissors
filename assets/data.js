var classic = {
	name: 'ROCK, PAPER, SCISSORS CLASSIC',
	description: 'Rock beats Scissors. Paper beats Rock. 			Scissors beats Paper. Click one of the above icons to make your choice. Choose wisely!',
	images: 
		[	{img:'assets/Icons/happy-paper.png', alt:'paper icon'},
			{img:'assets/Icons/weapon-icons/rock.png', alt:'rock icon'},
			{img:'assets/Icons/happy-scissors.png', alt:'scissors icon'}],
	weapons: [
		{name: "paper", strongAgainst: ['rock'], img:'assets/Icons/happy-paper.png', alt:'paper icon'},
		{name: "rock", strongAgainst: ['scissors'], img:'assets/Icons/weapon-icons/rock.png', alt:'rock icon'},
		{name: "scissors", strongAgainst: ['paper'], img:'assets/Icons/happy-scissors.png', alt:'scissors icon'},]
		
}

var alternate = {
	name: 'BATTLE OF THE ELEMENTS',
	description: 'Heart beats water and earth. Water beats fire and earth. Earth beats fire and wind. Fire beats heart and wind. Wind beats water and heart. Click one of the above icons to make your choice. Choose Wisely!',
	images: [
		{img:'assets/Icons/weapon-icons/rock.png', alt:'rock icon'},
		{img:'assets/Icons/weapon-icons/flames.png', alt:'flames icon'},
		{img:'assets/Icons/weapon-icons/wind.png', alt:'wind icon'},
		{img:'assets/Icons/weapon-icons/water.png', alt:'water icon'},
		{img:'assets/Icons/weapon-icons/heart.png', alt:'heart icon'}
	],
	weapons: [
		{name: 'earth', strongAgainst: ['fire', 'wind'],img:'assets/Icons/weapon-icons/rock.png', alt:'rock icon'},
		{name: 'fire', strongAgainst: ['heart', 'wind'],img:'assets/Icons/weapon-icons/flames.png', alt:'flames icon'},
		{name: 'wind', strongAgainst: ['water', 'heart'],img:'assets/Icons/weapon-icons/wind.png', alt:'wind icon'},
		{name: 'water', strongAgainst: ['fire', 'earth'],img:'assets/Icons/weapon-icons/water.png', alt:'water icon'},
		{name: 'heart', strongAgainst: ['water', 'earth'], img:'assets/Icons/weapon-icons/heart.png', alt:'heart icon'}]
	}

var avatar = [
	'assets/Icons/avatars/chick.png',
	'assets/Icons/avatars/dinosaur.png',
	'assets/Icons/avatars/elephant.png',
	'assets/Icons/avatars/fox.png',
	'assets/Icons/avatars/jellyfish.png',
	'assets/Icons/avatars/koala.png',
	'assets/Icons/avatars/snake.png',
	'assets/Icons/avatars/toucan.png',
	'assets/Icons/avatars/turtle.png',
	'assets/Icons/avatars/whale.png'
]









