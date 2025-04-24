const API_KEY = 'xxx';

export async function getWeatherData(location) {
    const weatherPromise = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`);
    const weatherData = await weatherPromise.json();
    return weatherData;
}
