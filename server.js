// server.js

const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

const dbConfig = require('./config/database');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.database, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
  res.json({"message": "Ford DIRECT - Campaign RestAPi GET API - MEAN"});
});

// Require Notes routes
require('./src/app/routes/campaign.routes.js')(app);


app.listen(3050, () => {
  console.log("Server is listening on port 3050");
});



