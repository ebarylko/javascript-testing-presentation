"use client";
import Image from 'next/image'
import styles from './page.module.css'
import * as wd from './defaultWeather.js'
import {useEffect, useState} from "react";

export default function Home() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        wd.weatherData().then((data) => {
            setLoading(false);
            console.log(data);
        });
    }, []);
  return(
    <main className="has-background-info">
        <section className="hero is-fullheight is-link">
            <div className="hero-body">
                <div data-testid= "welcome-message" className="container has-text-centered title">
                        Welcome to Weatherme, your friendly neighbourhood weather app.
                </div>
                {loading && <div> <p>Loading...</p> </div> }
            </div>
        </section>
    </main>
  )
}
