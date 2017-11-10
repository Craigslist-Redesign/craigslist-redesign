const ctrl = require('./ctrl.js');

module.exports = app => {
  app.post('/user/createUser', ctrl.createUser);
  app.post('/api/createForSaleForm', ctrl.createForSale);
  app.post('/api/getListings', ctrl.getListings);
  app.get('/api/getUserPosts/:uid', ctrl.getUserPosts);
  app.post('/api/getPost', ctrl.getPost);
  app.post('/api/deletePost', ctrl.deletePost);
  app.post('/api/postFav', ctrl.postFav);
  app.get('/api/updateCounter/:post_id', ctrl.updateCounter);
  app.get('/api/mostViewed', ctrl.mostViewed);
  app.get('/api/getFavorites/:uid', ctrl.getFavorites);
  app.post('/api/sendMail', ctrl.sendMail);
  app.post('/api/getCategoryTags', ctrl.getCategoryTags);
  app.get('/api/getCategories', ctrl.getCategories);
  app.post('/api/removeFav', ctrl.removeFav);
}
