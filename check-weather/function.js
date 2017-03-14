"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const secrets_1 = require("../secrets");
const node_fetch_1 = require("node-fetch");
function main(context, req) {
    getWeatherForecast(req.query.city).then((weatherData) => {
        let response = {
            status: 200,
            body: weatherData
        };
        return context.done(null, response);
    }).catch((error) => {
        // try passing error as first param
        context.done(null, {
            status: 500,
            body: { error: JSON.stringify(error) }
        });
    });
}
exports.main = main;
;
function getWeatherForecast(cityName) {
    return __awaiter(this, void 0, void 0, function* () {
        if (typeof cityName === "undefined") {
            return Promise.reject("city not passed");
        }
        let rawRes = yield node_fetch_1.default(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&mode=json&APPID=${secrets_1.OpenWeatherMapAppId}`);
        let weatherObj = yield rawRes.json();
        return weatherObj.list[0];
    });
}
