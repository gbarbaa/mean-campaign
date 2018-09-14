var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CampaignSchema = new Schema({
    dealerid: String,
    dealername: String,
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
    vehiclemake: String,
    vehiclemodel: String,
    vehicleyear: String,
    vehiclecolor: String,
    vehiclebody: String,
    vehicleodometer: String,
    vehicletitle: String,
    vehicleprice: String,
    pacode: String,
    postalcode: String,
    publisher: String,
    updated_date: { type: Date, default: Date.now }
  });

  module.exports = mongoose.model('Campaign', CampaignSchema);