"use client";
import Image from 'next/image'
import styles from './page.module.css'
import * as wd from './defaultWeather.js'
import {useEffect, useState} from "react";

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [temperatures, setTemperatures] = useState([]);
    useEffect(() => {
        wd.weatherData().then(data => {
            setLoading(false);
            console.log(data);
            setTemperatures(data);
        });
    }, []);
  return(
    <main className="has-background-info">
        <section className="hero is-fullheight is-link">
            <div className="hero-body">
                <div data-testid= "welcome-message" className="container has-text-centered title">
                        Welcome to Weatherme, your friendly neighbourhood weather app.
                </div>
            </div>
            {loading && <div> <p>Loading...</p> </div> }
            {!loading && <div className="container has-text-centered title">
                <div className={styles.weather}>
                    <wd.WeeklyWeather weather={temperatures}/>
                    {/*{temperatures.map((temp, index) => (<li key={index}>{temp}</li>))}*/}
                </div>
            </div>}
        </section>
    </main>
  )
}
