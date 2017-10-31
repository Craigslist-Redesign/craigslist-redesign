const ctrl = require('./ctrl.js');

module.exports = app => {
  app.get('/api/getItems', ctrl.getItems);
  app.post('/user/createUser', ctrl.createUser)
}
