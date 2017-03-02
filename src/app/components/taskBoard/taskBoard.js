class TaskBoardController {
  /** @ngInject */
  constructor(kanban) {
    this.kanban = kanban;
    this.epics = kanban.BASIC_EPICS;
    this.current = kanban.current;
    this.newEpicName = '';
  }

  addNewEpic() {
    this.kanban.addNewEpic(this.newEpicName);
    this.newEpicName = '';
  }

  addNewTask() {
    this.kanban.addNewTask();
  }
}

export const TaskBoard = {
  template: require('./taskBoard.html'),
  controller: TaskBoardController,
  bindings: {
    todos: '=',
    filter: '<'
  }
};
