var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CampaignSchema = new Schema({
    campaignid: String,
    adid:String,
    creativeid: String,
    campaignname: String,
    adname: String,
    campaignexpdate: Date,
    adexpdate: Date,
    campaignadtype: String,
    publisher: String,
    updated_date: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('Campaign', CampaignSchema);