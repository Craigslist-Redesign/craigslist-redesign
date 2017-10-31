const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const masterRoutes = require('./server/masterRoutes');
const port = 4000;
const app = express();
const { address } = require('./config');
// Database connection information
const connectionString = `${ address }`
const axios = require('axios');

// connecting to our DB with massive
massive(connectionString).then(db => {
  app.set('db', db);
});

// required middlewares
app.use(json());
app.use(cors());
// app.use('/', express.static(__dirname + '/public'));

masterRoutes(app)

app.listen(port, function() {
  console.log('Server listening on port', port);
})
