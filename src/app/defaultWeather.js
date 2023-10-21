require('dotenv').config();
const toCelsius = (temp) => (temp - 32) / 9 / 5;
export function weatherData() {
    return fetch(
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%20York%20City%2CNY?unitGroup=us&key" + process.env.API_KEY + "=&contentType=json", {
        method: 'GET',
    }).then(response => {
        if (!response.ok) {
            console.log("Error", response)
            throw response; //check the http response code and if isn't ok then throw the response as an error
        }

        return response.json().days.map(day => toCelsius(day.temp))
    })
}