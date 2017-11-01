const ctrl = require('./ctrl.js');

module.exports = app => {
  app.get('/api/getItems', ctrl.getItems);
  app.post('/user/createUser', ctrl.createUser);
  app.post('/api/createForSaleForm', ctrl.createForSale);
  app.post('/api/getByTagForSale', ctrl.getByTagForSale);
  app.get('/api/getAllForSale', ctrl.getAllForSale);
}
