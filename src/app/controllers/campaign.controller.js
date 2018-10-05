const Campaign = require('../../../models/Campaign.js');

// Retrieve and return all campaigns from the database.
exports.findAll = (req, res) => {
    Campaign.find()
    .then(campaigns => {
        JSON.stringify(campaigns);
        res.send(campaigns);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving all campaigns."
        });
    });
};

// Find a single campaign with a creativeid
exports.findOne = (req, res) => {
    Campaign.find({creativeid: req.params.creativeid})
    .then(campaign => {
        if(!campaign) {
            return res.status(404).send({
                message: "Campaign not found with creativeid " + req.params.creativeid
            });            
        }
        JSON.stringify(campaign);
        res.send(campaign);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Campaign not found with Creativeid " + req.params.creativeid
            });                
        }
        return res.status(500).send({
            message: "Error retrieving campaign with Creativeid " + req.params.creativeid
        });
    });
};