import styles from './Header.module.css'
import igniteLogo from '../../assets/images/Ignite-logo.svg'

export const Header = () => {
    return (
        <div className={styles.header}>
            <img src={igniteLogo} alt="Ignite logo" />
            <p>Ignite Feed</p>
        </div>
    )
}