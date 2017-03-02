class TasksController {
  /** @ngInject */
  constructor($scope) {
    this.$scope = $scope;
  }

  removeTask(index) {
    this.$scope.$emit('REMOVE_TASK', {index});
  }
}

export const Task = {
  template: require('./task.html'),
  controller: TasksController,
  bindings: {
    currentItem: '='
  }
};
