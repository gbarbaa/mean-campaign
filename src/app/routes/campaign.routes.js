module.exports = (app) => {
    const campaigns = require('../controllers/campaign.controller.js');

       // Retrieve all Campaigns
       app.get('/campaigns', campaigns.findAll);


       // Retrieve a single campaign with CreativeId
       app.get('/campaigns/:creativeid', campaigns.findOne);

    }