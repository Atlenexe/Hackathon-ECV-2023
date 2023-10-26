import Univers from './univers/univers'
import Attractions from './attractions/attractions'
import styles from './sections.module.css'

export default function Sections() {
    return (
        <div className={styles.container}>
            <Univers />
            <Attractions />
        </div>
    )
}
