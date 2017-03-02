export class Kanban {
  /** @ngInject */
  constructor(BASIC_EPICS) {
    this.BASIC_EPICS = BASIC_EPICS;
    this.current = {
      epicIndex: 0,
      phaseIndex: 0
    };
  }

  addNewCard(title) {
    title = title ? title : 'new Column';
    this.BASIC_EPICS[this.current.epicIndex].phases[this.current.phaseIndex].columns.push(Kanban.getBlankColumn(title));
  }

  addNewPhase(title) {
    title = title ? title : 'new Phase';
    this.BASIC_EPICS[this.current.epicIndex].phases.push(Kanban.getBlankPhase(title));
  }

  static getBlankColumn(title) {
    return {
      name: title,
      tasks: []
    };
  }

  static getBlankPhase(title) {
    return {
      title,
      columns: [
        this.getBlankColumn("New Tasks"),
        this.getBlankColumn("In Progress"),
        this.getBlankColumn("In Review"),
        this.getBlankColumn("Done")
      ]
    };
  }
}
