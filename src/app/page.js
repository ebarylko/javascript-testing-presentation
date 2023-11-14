"use client";
import {useEffect, useState} from "react";

import styles from './page.module.css'
import * as wd from './defaultWeather.js'

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [temperatures, setTemperatures] = useState([]);
    useEffect(() => {
        wd.weatherData()
            .then(data => {
                setLoading(false);
                setTemperatures(data);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
                setTemperatures('error')
            });
    }, []);
  return(
    <main className="has-background-info">
        <section className="hero is-fullheight is-link container">
            <div className="hero-body">
                <div data-testid= "welcome-message" className="container has-text-centered title">
                        Welcome to WeatherMe, your friendly neighbourhood weather app.
                </div>
            </div>
            {loading && <div> <p>Loading...</p> </div> }
            {!loading && temperatures === "error" && <div>Sorry can't load the temperatures at the moment :(</div>}
            {!loading && temperatures !== "error" && <div className="container has-text-centered title">
                <div className={styles.weather}>
                    <wd.WeeklyWeather weather={temperatures}/>
                </div>
            </div>}
        </section>
    </main>
  )
}
