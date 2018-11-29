const PubSub = require('../helpers/pub_sub.js');

const MunroView = function (container, munro) {
  this.contentsContainer = container;
  this.munro = munro;
};

MunroView.prototype.render = function () {
  const munroContainer = document.createElement('div');
  munroContainer.setAttribute('class', 'munro');

  const munroTitle = document.createElement('h3');
  munroTitle.textContent = (this.munro.name);
  munroContainer.appendChild(munroTitle);

  const munroProperties = document.createElement('ul');
  munroProperties.setAttribute('class', 'munro-properties');

  const nameMeaning = document.createElement('li');
  nameMeaning.textContent = (this.munro.meaning);
  munroProperties.appendChild(nameMeaning);

  const height = document.createElement('li');
  height.textContent = (this.munro.height);
  munroProperties.appendChild(height);

  munroContainer.appendChild(munroProperties);
  this.contentsContainer.appendChild(munroContainer);
};



module.exports = MunroView;
