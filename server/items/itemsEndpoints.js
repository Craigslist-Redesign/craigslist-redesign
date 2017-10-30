const itemsCtrl = require('./itemsCtrl.js');

module.exports = app => {
  app.get('/api/getItems', itemsCtrl.getItems);
}