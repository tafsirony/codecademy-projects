const team = {
  _players: [
    {
      firstName: "Pablo",
      lastName: "Sanchez",
      age: 11,
    },
    {
      firstName: "Pete",
      lastName: "Wheeler",
      age: 54,
    },
    {
      firstName: "Messi",
      lastName: "Striker",
      age: 31,
    },
  ],
  _games: [
    {
      opponent: "Broncos",
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: "Defence",
      teamPoints: 22,
      opponentPoints: 17,
    },
    {
      opponent: "MidField",
      teamPoints: 62,
      opponentPoints: 37,
    },
  ],

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    this.players.push(player);
  },
  addGame(name, myteamPoints, OppPoints) {
    const game = {
      opponent: name,
      teamPoints: myteamPoints,
      opponentPoints: OppPoints,
    };
    this.games.push(game);
  },
};

const newPlayer = team.addPlayer("ony", "khan", 23);
console.log(team._players[3]);
const newGame = team.addGame("wings", 78, 67);
console.log(team.games[3]);
