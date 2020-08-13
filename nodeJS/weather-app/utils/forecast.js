const request = require('postman-request');

const forecast = (latitude,longitude,callback) => {
    const url = `http://api.weatherstack.com/current?access_key=b097c39b7b69448baa46de20c5accc38&query=${latitude},${longitude}`;
    request({url:url, json:true}, (error,response) => {
        if(error) {
            callback('Unable to connect to the Weather Service!', undefined);
        } else if (response.body.error) {
            callback('Unable to find the location', undefined);
        } else {
            callback(undefined,`${response.body.current.weather_descriptions[0]}, It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees.`);
        }
    });
}

module.exports = forecast;