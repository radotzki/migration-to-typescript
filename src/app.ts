import * as angular from 'angular';
import {playersComponent} from './players.component';
import {playersService} from './players.service';

angular
    .module('app', [])
    .component('playersComponent', playersComponent)
    .service('playersService', playersService);

angular.bootstrap(document.body, ['app']);