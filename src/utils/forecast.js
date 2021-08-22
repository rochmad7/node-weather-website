const request = require('request');

const forecast = (lat, lon, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=6e63e595ed122ea10e7ade95af5242dd&query=${lat},${lon}`;

    request({url, json: true}, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to forecast service', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, `The weather is ${body.current.weather_descriptions[0]}, with temperature is ${body.current.temperature} C`
            )
        }
    });
};

module.exports = forecast;