const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    
    if(response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error('Unable to get puzzle');
    }
};

const getPuzzleOld = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {}).then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to fetch the puzzle');
        }
    }).then((data) => {
        return data.puzzle;
    })
};


const getCountryDetails = async (countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all');
    if(response.status === 200) {
        const data = await response.json();
        const country = data.find((country) => country.alpha2Code === countryCode);
        return country.name;
    } else {
        throw new Error('unable to fetch country details!');
    }
}


const getLocation = async () => {
    const response = await fetch('http://ipinfo.io/json?token=bd0e80fd8ff2a8');
    if(response.status === 200) {
        return response.json();
    } else {
        throw new Error('Unable to get location');
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation();
    const countryName = await getCountryDetails(location.country);
    return countryName;
}


// const getLocationOld = () => {
//     return fetch('http://ipinfo.io/json?token=bd0e80fd8ff2a8', {}).then ((response) => {
//         if(response.status === 200) {
//             return response.json();
//         } else {
//             throw new Error('Unable to get the location');
//         }
//     });
// }

// const getCountryDetailsOld = (countryCode) => {
//     return fetch('http://restcountries.eu/rest/v2/all', {}).then((response) => {
//         if(response.status === 200) {
//             return response.json();
//         } else {
//             throw new Error('Unable to fetch country details');
//         }
//     }).then((data) => {
//         const country =  data.find((country) => country.alpha2Code === countryCode);
//         return country.name;
//     })
// };



// const getCountryDetails = (countryCode) => new Promise((resolve, reject) => {
//     const countryRequest = new XMLHttpRequest();

//     countryRequest.addEventListener('readystatechange', (e) => {
//         if(e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText);
//             const country = data.find((country) => country.alpha2Code === countryCode); 
//             resolve(country.name);
//         } else if (e.target.readyState === 4){
//             reject('Some error has encountered');
//         }
//     });

//     countryRequest.open('GET','http://restcountries.eu/rest/v2/all');
//     countryRequest.send();
// });

// const getPuzzleSync = () => {
//     const request = new XMLHttpRequest();
//     request.open('GET','http://puzzle.mead.io/puzzle?wordCount=3',false);
//     request.send();

//     if(request.readyState === 4 && request.status === 200){
//         const data = JSON.parse(request.responseText);
//         return data.puzzle;
//     } else if (request.readyState === 4) {
//         console.log('An error has taken place');
//     }
// }
