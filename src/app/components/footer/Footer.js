class FooterController {
}

export const Footer = {
  template: require('./Footer.html'),
  controller: FooterController,
  bindings: {
    completedCount: '<',
    activeCount: '<',
    selectedFilter: '<filter',
    onClearCompleted: '&',
    onShow: '&'
  }
};
