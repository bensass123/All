//helpers.js

var axios = require('axios');

module.exports = {
    //returns promise object, can use then from this in Parent component
    getClicks: function() {
        return axios.get('/api');
    },
    // Also returns a promise, method takes in a nargument for what to post
    saveClicks: function(clickData) {
        return axios.post('/api', clickData);
    }
};