import {PlayersController} from './players.controller';
var template = require('./players.html');

export var playersComponent = {
    template: template,
    controller: PlayersController,
    controllerAs: 'vm',
};
