import stylesSection from './../sections.module.css'
import styles from './carte.module.css'

export default function Carte() {
    const sectionClasses = `${stylesSection.section} ${stylesSection.paddingCarte}`;

    return (
        <section className={sectionClasses} id='carte'>
            <h2 className={stylesSection.title}>Carte</h2>
            <div className={styles.carte}>
                <img src="/img/carte.png" alt="" />
            </div>
        </section>
    )
}
