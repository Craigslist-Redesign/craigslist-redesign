require("dotenv").config();

const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const masterRoutes = require('./server/masterRoutes');


// const port = 4000;
const app = express();


// const { address, sendgridAPI } = require('./configs')
// Database connection information
// const connectionString = `${ address }`
const axios = require('axios');


// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(sendgridAPI);
// connecting to our DB with massive
massive(process.env.HEROKU_POSTGRESQL_URL).then(db => {
  app.set('db', db);
});

// required middlewares
app.use(json());
app.use(cors());
app.use('/', express.static(__dirname + '/public'));

masterRoutes(app)



app.listen(process.env.PORT, function() {
  console.log('Server listening on port');
})
