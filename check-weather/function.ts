import { OpenWeatherMapAppId } from '../secrets'
import fetch from 'node-fetch';

export function main (context, req) {
    getWeatherForecast(req.query.city).then((weatherData) => {
        let response = {
            status: 200, // optional, defaults to 200
            body: weatherData
        };

        return context.done(null, response);
    }).catch((error) => {

        // try passing error as first param

        context.done(null, {
            status: 500,
            body: {error: JSON.stringify(error)}
        });
    })
};

async function getWeatherForecast(cityName:string):Promise<any> {
    if (typeof cityName === "undefined") {
        return Promise.reject("city not passed");
    }

    let rawRes = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&mode=json&APPID=${OpenWeatherMapAppId}`);
    let weatherObj =  await rawRes.json();
    return weatherObj.list[0];
}