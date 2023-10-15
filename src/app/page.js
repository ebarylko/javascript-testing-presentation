import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className="has-background-info">
        <section className="hero is-fullheight is-link">
            <div className="hero-body">
                <div data-testid= "welcome-message" className="container has-text-centered title">
                        Welcome to Weatherme, your friendly neighbourhood weather app.
                </div>

            </div>
        </section>

    </main>
  )
}
