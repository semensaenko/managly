class AppController {
  /** @ngInject */
  constructor($scope) {
    this.$scope = $scope;
  }
}

export const App = {
  template: require('./app.html'),
  controller: AppController
};
