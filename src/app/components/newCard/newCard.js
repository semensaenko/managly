import './newCard.scss';

class newCardController {
  /** @ngInject */
  constructor(kanban) {
    this.kanban = kanban;
    this.adding = false;
    this.newColumnName = '';
  }

  addNewColumn() {
    this.kanban.addNewCard(this.newColumnName);
    this.adding = false;
    this.newColumnName = '';
  }
}

export const NewCard = {
  template: require('./newCard.html'),
  controller: newCardController,
  bindings: {
    currentItem: '='
  }
};
