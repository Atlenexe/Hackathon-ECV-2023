import styles from './header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <img src="" alt="logo" />
                <ul>
                    <li>
                        <a href="#">Univers</a>
                    </li>
                    <li>
                        <a href="#">Attractions</a>
                    </li>
                    <li>
                        <a href="#">Animations</a>
                    </li>
                    <li>
                        <a href="#">Accueil</a>
                    </li>
                </ul>
            </nav>
            <section>
                
            </section>
        </header>
    )
}
