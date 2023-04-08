const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2];
if(location && typeof location === 'string'){
    geocode(location, (error, {latitude, longitude, location} = {}) => { //Note: if you are destructuring an object which can be undefined. it will cause the app to break down
        if(error){                                                  //to avoid that pass a default argument instead
            return console.log("Error: ",error);
        }
    
        forecast(latitude, longitude, (error, forecastData) => { 
            if(error){ 
                return console.log("Error: ", error );
            }
            console.log("Location: " + location);
            console.log(forecastData);
        });
    });
} else {
    console.log("Please enter a valid location in the CLI");
}




// forecast(44.1545, -75.7088, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })