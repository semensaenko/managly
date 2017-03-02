class LeftMenuController {
  /** @ngInject */
  constructor(kanban, $scope, $rootScope) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.menuVisible = false;
    this.epics = kanban.BASIC_EPICS;
    this.current = kanban.current;
  }

  changeEpic(index) {
    this.current.epicIndex = index;
    this.current.phaseIndex = 0;
  }
}

export const LeftMenu = {
  template: require('./leftMenu.html'),
  controller: LeftMenuController
};

