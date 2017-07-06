//mongoose schema - Click

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ClickSchema = new Schema({
    clicks: {
        type: Number
    },
    clickID: {
        type: String
    }
});

// Create the model
var Click = mongoose.model('Click', ClickSchema);

// Export it for use elsewhere
module.exports = Click;