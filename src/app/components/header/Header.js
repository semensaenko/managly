class HeaderController {
  /** @ngInject */
  constructor($scope) {
    this.$scope = $scope;
  }
}

export const Header = {
  template: require('./Header.html'),
  controller: HeaderController,
  bindings: {
    todos: '='
  }
};
