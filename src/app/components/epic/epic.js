import './epic.scss';
class EpicsController {
  /** @ngInject */
  constructor($scope) {
    this.$scope = $scope;
  }
}

export const Epic = {
  template: require('./epic.html'),
  controller: EpicsController,
  bindings: {
    currentItem: '='
  }
};

