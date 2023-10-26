import Univers from './univers/univers'
import Attractions from './attractions/attractions'
import styles from './sections.module.css'
import Animations from './animations/animations'
import Carte from './carte/carte'

export default function Sections() {
    return (
        <div className={styles.container}>
            <Univers />
            <Attractions />
            <Animations />
            <Carte />
        </div>
    )
}
