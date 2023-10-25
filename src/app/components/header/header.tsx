import styles from './header.module.css'
import Image from 'next/image'

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    className={styles.logo}
                    height={376.7/5}
                    width={780/5}
                />
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
                        <a href="#">Infos Pratiques</a>
                    </li>
                </ul>
            </nav>
            <section>

            </section>
        </header>
    )
}
