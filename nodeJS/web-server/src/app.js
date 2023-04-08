const path = require('path');
const express = require('express');
const hbs = require('hbs');
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

const app = express();

//Define path for Express Configs
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, "../templates/partials");

//Setup Handlebar and views location
app.set('view engine', 'hbs'); //Setting up template engine hbs: which is handlebar package customized for express
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setup Static locatoin
app.use(express.static(publicDirectoryPath)); //To use the components of Public Directory

//PAGES =====>

//Homepage
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Parth Panchal'
    });
});


//Weather
app.get("/weather", (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address!'
        })
    }

    //Fetching Forecast
    geocode(req.query.address , (error, {latitude, longitude, location} = {}) => {
        if(error){
            return res.send(error);
        }

        forecast(latitude, longitude, (error, {forecast,iconURL} = {}) => { 
            if(error){ 
                return res.send(error);
            }
            
            return res.send({
                forecast,
                location,
                iconURL
            }); 
        });
    });
});


//About
app.get('/about', (req, res) => {
    res.render('about', {
        title: "About Me",
        name: "Parth Panchal"
    });
});

//Help
app.get('/help', (req, res) => {
    res.render('help',{
        message: "In this unprecidented time, you have to be Atmanirbhar!",
        title: "Help",
        name: "Parth Panchal"
    });
});

//Help page error 404 handler
app.get('/help/*', (req, res) => {
    res.render('error404', {
        title: "Error 404 Page",
        name: "Parth",
        message: "Sorry the Help Article you requested was not found, do check any of the above pages"
    });
})


//404 Page handler- for any routes other than the ones specified above.
app.get('*' , (req, res) => {
    res.render('error404', {
        title: "Error 404 Page",
        name: "Parth",
        message: "Sorry the page you requested was not found, do check any of the above pages"
    });
});

//Initialize server at port: 3000 =====>
app.listen(3000, () => {
    console.log("Server is up on Port: 3000");
});