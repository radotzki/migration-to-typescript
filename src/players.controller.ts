import {Player, playersService} from './players.service';

export class PlayersController {
    players: Player[] = [];

    constructor(private playersService: playersService) { }

    $onInit() {
        this.playersService.getPlayers().then(resp => {
            this.players = resp;
        });
    }

    addPlayer(name, age) {
        var newPlayer: Player = { name, age };
        this.playersService.addPlayer(newPlayer);
    }
}
