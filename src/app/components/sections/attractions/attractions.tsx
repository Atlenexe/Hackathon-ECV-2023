import stylesSection from './../sections.module.css'
import styles from './attractions.module.css'

export default function Attractions() {
    const sectionClasses = `${stylesSection.section} ${stylesSection.padding}`;

    return (
        <section className={sectionClasses}>
            <h2>Attractions</h2>
            <ul className={styles.attractions}>
                <li>
                    <ul>
                        <li>
                            <img src="/img/aquaponies.png" alt="" />
                            <div>
                                <p>Viens rencontrer Bloom-e & écoute la voix de la nature</p>
                            </div>
                        </li>
                        <li>
                            <img src="/img/lumi.png" alt="" />
                        </li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li>
                            <img src="/img/aquaponies.png" alt="" />
                        </li>
                        <li>
                            <img src="/img/lumi.png" alt="" />
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    )
}
