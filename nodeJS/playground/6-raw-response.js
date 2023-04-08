const http = require('http');

const url  = 'http://api.weatherstack.com/current?access_key=b097c39b7b69448baa46de20c5accc38&query=45,75';

const request = http.request(url, (response)=> {

    let data = '';
    
    response.on('data',(chunk) => {
        data = data + chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })
})

request.on('error', (error) => {
    console.log('An error', error);
})
request.end();