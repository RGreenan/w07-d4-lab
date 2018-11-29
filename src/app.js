const Munros = require('./models/munros.js');
const MunroListView = require('./views/munro_list_view.js');
const MunroView = require('./views/munro_view');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const munroContainer = document.querySelector('.main-page-contents');
  const munroView = new MunroListView(munroContainer);
  munroView.bindEvents();

  const munros = new Munros();
  munros.getData();
})
