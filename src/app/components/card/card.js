import './card.scss';

class CardController {
  /** @ngInject */
  constructor() {
    this.scrollBarConfig = {
      autoHideScrollbar: false,
      theme: 'dark-3',
      advanced: {
        updateOnContentResize: true
      },
      axis: 'y',
      scrollInertia: 200
    };
  }
}

export const Card = {
  template: require('./card.html'),
  controller: CardController,
  bindings: {
    currentItem: '='
  }
};
