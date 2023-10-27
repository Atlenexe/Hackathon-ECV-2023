import stylesSection from './../sections.module.css'
import styles from './animations.module.css'

export default function Animations() {
    const sectionClasses = `${stylesSection.section} ${stylesSection.padding}`;

    return (
        <section className={sectionClasses} id='animations'>
            <h2 className={stylesSection.title}>Animations</h2>
            <ul className={styles.animations}>
                <li>
                    <img src="/img/animation2.png" alt="Truc" />
                </li>
                <li>
                    <img src="/img/animation1.png" alt="Truc" />
                </li>
                <li>
                    <img src="/img/exterieur.png" alt="Truc" />
                </li>
            </ul>
        </section>
    )
}
