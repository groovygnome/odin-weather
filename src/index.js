import { getWeatherData } from './visualcrossing.js';
import { createWeatherObject } from './weather-obj.js';


console.log(createWeatherObject(getWeatherData('london')));
