const weatherForm = document.querySelector('#weather-form');
const search = document.querySelector('#weather-search');
const messageSuccess= document.querySelector('#success-data');
const messageFail = document.querySelector('#fail-data');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value.trim();
    messageSuccess.textContent = 'Loading...';
    messageFail.textContent = '';
    if(location.length > 0){
        fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
            messageSuccess.textContent = '';
            response.json().then((data)=> {
                if(data.error){
                    messageFail.textContent = data.error;
                } else {
                    messageSuccess.textContent = `In ${data.location}, The weather is ${data.forecast}`;
                }
            });
        });
    }
});