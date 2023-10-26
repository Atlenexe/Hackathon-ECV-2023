import stylesSection from './../sections.module.css'
import styles from './animations.module.css'

export default function Animations() {
    const sectionClasses = `${stylesSection.section} ${stylesSection.padding}`;

    return (
        <section className={sectionClasses}>
            <h2>Animations</h2>
            <ul className={styles.attractions}>
                <li>
                    <img src="/img/cascade.jpg" alt="" />
                </li>
                <li>
                    <img src="/img/cascade.jpg" alt="" />
                </li>
                <li>
                    <img src="/img/cascade.jpg" alt="" />
                </li>
            </ul>
        </section>
    )
}
