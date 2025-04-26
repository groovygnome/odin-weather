export function createWeatherObject(visualCrossingPromise) {
    return visualCrossingPromise.then((data) => {

        const addr = data.resolvedAddress;
        const desc = data.description;
        const temp = data.currentConditions.temp;
        const sunrise = data.currentConditions.sunrise;
        const sunset = data.currentConditions.sunset;
        const conditions = data.currentConditions.conditions;
        const feelslike = data.currentConditions.feelslike;

        return ({ addr, desc, temp, sunrise, sunset, conditions, feelslike });
    }).catch(error => {
        console.log(`Error: ${error}`);
    });



}
