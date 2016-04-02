const players: Player[] = [
    { name: 'John', age: 30 },
    { name: 'Staas', age: 40 },
];

export class playersService {
    constructor(private $q: ng.IQService) { }

    getPlayers() {
        return this.$q.when(players);
    }

    addPlayer(player: Player) {
        players.push(player);
    }
}

export interface Player {
    name: string;
    age: number;
}