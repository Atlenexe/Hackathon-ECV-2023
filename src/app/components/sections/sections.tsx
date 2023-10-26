import Univers from './univers/univers'
import Attractions from './attractions/attractions'
import styles from './sections.module.css'
import Animations from './animations/animations'
import Carte from './carte/carte'
import Restaurant from './restaurant/restaurant'
import Infos from './infos/infos'

export default function Sections() {
    return (
        <div className={styles.container}>
            <Univers />
            <Attractions />
            <Animations />
            <Carte />
            <Restaurant />
            <Infos />
        </div>
    )
}
