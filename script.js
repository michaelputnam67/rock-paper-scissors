var game = new Game('classic')
player1 = new Player('Mike', weaponsClassic[1])
console.log('Mike', player1.weapon.name)
player2 = new Player('Artan', weaponsClassic[1])
console.log('Artan', player2.weapon.name)
game.addPlayers(player1)
game.addPlayers(player2)


console.log(game.resolveResults())
