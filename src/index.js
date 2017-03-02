import angular from 'angular';

import {App} from './app/containers/App';
import {Header} from './app/components/header/Header';
import {TaskBoard} from './app/components/taskboard/taskBoard';
import {Footer} from './app/components/footer/Footer';
import {LeftMenu} from './app/components/leftMenu/leftMenu';
import {Card} from './app/components/card/card';
import {NewCard} from './app/components/newCard/newCard';
import {Task} from './app/components/task/task';
import {Epic} from './app/components/epic/epic';

import 'angular-ui-router';
import routesConfig from './routes';
import 'jquery-mousewheel';
import 'malihu-custom-scrollbar-plugin';
import 'ng-scrollbars';
import 'ng-sortable';
import './index.scss';
import {BASIC_EPICS} from './app/constants/basicEpics';
import {Kanban} from './app/services/kanban';

angular
  .module('app', ['ui.router', 'as.sortable', 'ngScrollbars'])
  .config(routesConfig)
  .component('app', App)
  .component('headerComponent', Header)
  .component('footerComponent', Footer)
  .component('taskBoard', TaskBoard)
  .component('leftMenu', LeftMenu)
  .component('card', Card)
  .component('newCard', NewCard)
  .component('task', Task)
  .component('epic', Epic)
  .service('kanban', Kanban)
  .constant('BASIC_EPICS', BASIC_EPICS);
