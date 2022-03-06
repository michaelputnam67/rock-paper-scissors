var classic = {
	name: 'ROCK, PAPER, SCISSORS CLASSIC',
	description: 'Rock beats Scissors. Paper beats Rock. 			Scissors beats Paper. Click one of the above icons to make your choice. Choose wisely!',
	images: 
		[	{img:'assets/Icons/paper.png', alt:'paper icon'},
			{img:'assets/Icons/rock-2.png', alt:'rock icon'},
			{img:'assets/Icons/scissors.png', alt:'scissors icon'}],
	weapons: [
		{name: "paper", strongAgainst: ['rock'], img:'assets/Icons/paper.png', alt:'paper icon'},
		{name: "rock", strongAgainst: ['scissors'], img:'assets/Icons/rock-2.png', alt:'rock icon'},
		{name: "scissors", strongAgainst: ['paper'], img:'assets/Icons/scissors.png', alt:'scissors icon'},]
		
}

var alternate = {
	name: 'BATTLE OF THE ELEMENTS',
	description: 'Heart beats water and earth. Water beats fire and earth. Earth beats fire and wind. Fire beats heart and wind. Wind beats water and heart. Click one of the above icons to make your choice. Choose Wisely!',
	images: [
		{img:'assets/Icons/earth.png', alt:'rock icon'},
		{img:'assets/Icons/flames.png', alt:'flames icon'},
		{img:'assets/Icons/wind.png', alt:'wind icon'},
		{img:'assets/Icons/water.png', alt:'water icon'},
		{img:'assets/Icons/heart.png', alt:'heart icon'}
	],
	weapons: [
		{name: 'earth', strongAgainst: ['fire', 'wind'],img:'assets/Icons/rock.png', alt:'rock icon'},
		{name: 'fire', strongAgainst: ['heart', 'wind'],img:'assets/Icons/flames.png', alt:'flames icon'},
		{name: 'wind', strongAgainst: ['water', 'heart'],img:'assets/Icons/wind.png', alt:'wind icon'},
		{name: 'water', strongAgainst: ['fire', 'earth'],img:'assets/Icons/water.png', alt:'water icon'},
		{name: 'heart', strongAgainst: ['water', 'earth'], img:'assets/Icons/heart.png', alt:'heart icon'}]
	}

var avatar = [
	'./assets/Icons/chick.png',
	'./assets/Icons/dinosaur.png',
	'./assets/Icons/elephant.png',
	'./assets/Icons/fox.png',
	'./assets/Icons/jellyfish.png',
	'./assets/Icons/koala.png',
	'./assets/Icons/snake.png',
	'./assets/Icons/toucan.png',
	'./assets/Icons/turtle.png',
	'./assets/Icons/whale.png'
]









