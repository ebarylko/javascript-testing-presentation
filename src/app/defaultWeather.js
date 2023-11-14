import dotenv from 'dotenv';
import * as R from "ramda";

import styles from './page.module.css'

const nextWeekTemp = (weather) => R.take(7, weather);
const toCelsius = (temp) => (temp - 32) * 5 / 9;
const toSingleDecimal = (temp) => Math.trunc(temp * 10) / 10;
export const toCelsiusSingleDecimal = R.pipe(toCelsius, toSingleDecimal);

dotenv.config();

const weatherUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/vancouver"

export function weatherData() {
    return fetch(
       `${weatherUrl}?unitGroup=us&key=${process.env.NEXT_PUBLIC_API_KEY}&contentType=json`,
        {method: 'GET'}
    ).then(response => {
        if (!response.ok) {
            throw response; //check the http response code and if isn't ok then throw the response as an error
        }

        return response.json()
    }).then(data => {
        console.log("The data", data)
        return nextWeekTemp(data.days).map(day => toCelsiusSingleDecimal(day.temp)) })
}

export function WeeklyWeather(props) {
    const temperatures = props.weather.map((temp, key) => (
        <div key={key} className="card">
            <div className="card-content">
                <div className="content">
                    <span data-testid='temp'> {temp} </span> &deg;C
                </div>
            </div>
        </div>
    ))
    return <div className={styles.weather}>{temperatures}</div>
}