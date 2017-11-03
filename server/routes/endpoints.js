const ctrl = require('./ctrl.js');

module.exports = app => {
  app.post('/user/createUser', ctrl.createUser);
  app.post('/api/createForSaleForm', ctrl.createForSale);
  app.post('/api/getListings', ctrl.getListings);
  app.get('/api/getUserPosts/:uid', ctrl.getUserPosts);
  app.get('/api/getPost/:post_id', ctrl.getPost);
  app.post('/api/deletePost', ctrl.deletePost);
  app.post('/api/postFav', ctrl.postFav);
  app.get('/api/updateCounter/:post_id', ctrl.updateCounter);
  app.get('/api/mostViewed', ctrl.mostViewed);
}
