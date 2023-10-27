import stylesSection from './../sections.module.css'
import styles from './infos.module.css'

export default function Infos() {
    const sectionClasses = `${stylesSection.section} ${stylesSection.padding}`;

    return (
        <section className={sectionClasses} id='infos'>
            <h2 className={stylesSection.title}>Infos pratiques</h2>
            <ul className={styles.infos}>
                <li>
                    <h3>Calendrier</h3>
                    <span>Découvrez les dates et horaires d'ouverture du parc</span>
                    <img src="/img/calendrier.png" alt="" />
                </li>
                <li>
                    <h3>Billetterie</h3>
                    <span>Réservez vos billets sur Internet et bénéficiez de réductions</span>
                    <img src="" alt="" />
                </li>
                <li>
                    <h3>Comment venir?</h3>
                    <span>Neo Bloom se trouve 1 Quai Marquis d'Aiguillon, 44100 Nantes</span>
                    <img src="/img/maps.png" alt="" />
                </li>
            </ul>
        </section>
    )
}
