const ctrl = require('./ctrl.js');

module.exports = app => {
  app.post('/user/createUser', ctrl.createUser);
  app.post('/api/createForSaleForm', ctrl.createForSale);
  app.post('/api/getByTagForSale/:tag', ctrl.getByTagForSale);
  app.post('/api/getAllForSale', ctrl.getAllForSale);
  app.get('/api/getUserPosts/:uid', ctrl.getUserPosts);

}
