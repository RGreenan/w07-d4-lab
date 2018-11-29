const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Munros = function () {
  this.data = null;
};

Munros.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://munroapi.herokuapp.com/api/munros');
  requestHelper.get()
  .then((munros) => {
    this.data = munros;
    PubSub.publish('Munros:munro-list-ready', this.data);
  });
};

module.exports = Munros;
