export function createWeatherObject(visualCrossingPromise) {
    return visualCrossingPromise.then((data) => {

        console.log(data);

        const addr = data.resolvedAddress;
        const desc = data.description;
        const temp = data.temp;
        const sunrise = data.sunrise;
        const sunset = data.sunset;
        const conditions = data.conditions;
        const feelslike = data.feelslike;

        resolve({ addr, desc, temp, sunrise, sunset, conditions, feelslike });
    }).catch(error => {
        console.log(`Error: ${error}`);
    });

}
