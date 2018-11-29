const PubSub = require('../helpers/pub_sub.js');
const MunroView = require('./munro_view.js')

const MunroListView = function (container) {
  this.container = container;

};

MunroListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:munro-list-ready', (event) => {
    this.munros = event.detail;
    this.render();
  });
};

MunroListView.prototype.render = function () {
  const munroList = document.createElement('div');
  munroList.setAttribute('class', 'munro-list');
  this.container.appendChild(munroList);

  this.munros.forEach((munro) => {
    const munroView = new MunroView(this.container, munro);
    munroView.render();
  })
};

module.exports = MunroListView;
