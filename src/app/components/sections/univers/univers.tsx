import stylesSection from './../sections.module.css'
import styles from './univers.module.css'

export default function Univers() {
    return (
        <section className={stylesSection.section}>
            <h2>Univers</h2>
            <ul className={styles.univers}>
                <li>
                    <img src="/img/serre3.png" alt="Serre" />
                </li>
                <li>
                    <img src="/img/serre2.png" alt="Serre" />
                </li>
                <li>
                    <img src="/img/coffee.png" alt="Restaurant" />
                </li>
                <li>
                    <img src="/img/serre1.png" alt="Serre" />
                </li>
            </ul>
        </section>
    )
}
