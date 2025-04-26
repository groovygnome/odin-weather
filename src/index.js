import { getWeatherData } from './visualcrossing.js';
import { createWeatherObject } from './weather-obj.js';

const submitBtn = document.querySelector('#submit');
const locationInput = document.querySelector('#location');

submitBtn.addEventListener('click', () => {
    event.preventDefault();
    if (locationInput.value != '') {
        const location = locationInput.value;
        locationInput.value = '';
        displayWeather(location);
    } else {
        alert('Please Enter a Location');
    }
});

async function displayWeather(location) {
    try {
        const weatherData = await createWeatherObject(getWeatherData(location));

        document.querySelector('.addr').textContent = weatherData.addr;
        document.querySelector('.temp').textContent = weatherData.temp;
        document.querySelector('.conditions').textContent = weatherData.conditions;
        document.querySelector('.desc').textContent = weatherData.desc;
        document.querySelector('.feelslike').textContent = weatherData.feelslike;
        document.querySelector('.sunrise').textContent = weatherData.sunrise;
        document.querySelector('.sunset').textContent = weatherData.sunset;
    }
    catch {
        alert('Please try another location.');
    }


}
