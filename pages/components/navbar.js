import styles from '../../styles/Navbar.module.css'
import NavItem from './navitem'

export default function Navbar() {
    return (
        <div className={styles.wrapper}>
            <NavItem link="/" text="Name"></NavItem>
            <NavItem link="/profile" text="Profile"></NavItem>
        </div>
    )
}