const ctrl = require('./ctrl.js');

module.exports = app => {
  app.post('/user/createUser', ctrl.createUser);
  app.post('/api/createForSaleForm', ctrl.createForSale);
  app.post('/api/getListings', ctrl.getListings);
  app.get('/api/getUserPosts/:uid', ctrl.getUserPosts);
}
