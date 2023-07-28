const mongoose = require('mongoose');

const TV-ShowsSchema = new mongoose.Schema({
ShowName : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('TV-Shows', TV-ShowsSchema);