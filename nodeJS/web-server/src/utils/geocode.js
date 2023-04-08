const request = require('postman-request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address.trim())}.json?access_token=pk.eyJ1IjoicGFydGhnZWVrIiwiYSI6ImNrZHNxdWNoYjBsNmcyc283OTcycmw2M2MifQ.E8HJ2fcwIn0eoQAE3MOIug`;

    request({url:url, json:true}, (error, response) => {
        if(error){
            callback({error: 'Unable to connect to location services!'}, undefined);
        } else if (response.body.features.length === 0) {
            callback({error:'Unable to find a location, please enter another search query'}, undefined);
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            });
        }
    })
};

module.exports = geocode;