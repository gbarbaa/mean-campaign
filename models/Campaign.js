var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CampaignSchema = new Schema({
    dealerid: String,
    dealerName: String,
    creativeid: String,
    campaignid: String,
    adid:String,
    campaignname: String,
    adname: String,
    campaignexpdate: Date,
    adexpdate: Date,
    campaignadtype: String,
    creativeobject: Object,
    vehicleid: String,
    vehiclevin: String,
    make: String,
    model: String,
    year: String,
    color: String,
    trim: String,
    vehicleodometer: String,
    vehicletitle: String,
    vehicleprice: String,
    pacode: String,
    postalCode: String,
    publisher: String,
    disclaimers: String,
    updated_date: { type: Date, default: Date.now }
  });

  module.exports = mongoose.model('Campaign', CampaignSchema);
