const itemsEndpoints = require ('./items/itemsEndpoints.js');

module.exports = app => {
  itemsEndpoints(app)
}