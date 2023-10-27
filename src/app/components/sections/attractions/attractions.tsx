import stylesSection from './../sections.module.css'
import styles from './attractions.module.css'

export default function Attractions() {
    const sectionClasses = `${stylesSection.section} ${stylesSection.padding}`;

    return (
        <section className={sectionClasses} id='attractions'>
            <h2>Attractions</h2>
            <ul className={styles.attractions}>
                <li>
                    <ul>
                        <li>
                            <img src="/img/aquaponies.png" alt="" />
                            <h3>Viens rencontrer Bloom-e & écoute la voix de la nature</h3>
                            <div></div>
                            <svg>
                                <defs>
                                    <clipPath id="clip">
                                        <path d="M0 67.9896V263H798V0C620.223 0.000101533 465.417 65.8818 352.558 85.9098C204.743 104.884 109.03 76.9495 0 67.9896Z" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </li>
                        <li>
                            <img src="/img/fleurs.png" alt="" />
                            <h3>Andréa PHILIPPON, 3D Designer</h3>
                            <div></div>
                            <svg>
                                <defs>
                                    <clipPath id="clip">
                                        <path d="M0 67.9896V263H798V0C620.223 0.000101533 465.417 65.8818 352.558 85.9098C204.743 104.884 109.03 76.9495 0 67.9896Z" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li>
                            <img src="/img/aquaponies.png" alt="" />
                            <h3>Un écosystème étonnant : <br/> l’aquaponie & l’hydroponie</h3>
                            <div></div>
                            <svg>
                                <defs>
                                    <clipPath id="clip">
                                        <path d="M0 67.9896V263H798V0C620.223 0.000101533 465.417 65.8818 352.558 85.9098C204.743 104.884 109.03 76.9495 0 67.9896Z" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </li>
                        <li>
                            <img src="/img/lumi.png" alt="" />
                            <h3>Découvre un univers unique <br/> L’aire d’un nouveau monde</h3>
                            <div></div>
                            <svg>
                                <defs>
                                    <clipPath id="clip">
                                        <path d="M0 67.9896V263H798V0C620.223 0.000101533 465.417 65.8818 352.558 85.9098C204.743 104.884 109.03 76.9495 0 67.9896Z" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    )
}
