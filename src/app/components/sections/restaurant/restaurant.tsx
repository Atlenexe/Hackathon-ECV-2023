import stylesSection from './../sections.module.css'
import styles from './restaurant.module.css'

export default function Restaurant() {
    const sectionClasses = `${stylesSection.section} ${stylesSection.padding}`;

    return (
        <section className={sectionClasses} id='restaurant'>
            <div className={styles.container}>
                <div className={styles.switch}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path d="M12.8192 2C7.30415 2 2.81915 6.485 2.81915 12C2.81915 17.515 7.30415 22 12.8192 22C18.3342 22 22.8192 17.515 22.8192 12C22.8192 6.485 18.3342 2 12.8192 2Z" stroke-width="4" />
                        </svg>
                        Néo délice
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path d="M12.8192 2C7.30415 2 2.81915 6.485 2.81915 12C2.81915 17.515 7.30415 22 12.8192 22C18.3342 22 22.8192 17.515 22.8192 12C22.8192 6.485 18.3342 2 12.8192 2Z" stroke-width="4" />
                        </svg>
                        Terrasse
                    </span>
                </div>
                <div className={styles.restaurant}>
                    <img src="/img/restaurant.png" alt="Restaurant" />
                    <div>
                        <div>
                            <h2>Néo Délice</h2>
                            <h3>Un restaurant bloomicieux</h3>
                        </div>
                        <button>Menu</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
