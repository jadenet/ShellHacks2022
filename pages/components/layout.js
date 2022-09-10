import Navbar from './navbar'
import styles from '../../styles/layout.module.css'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className={styles.main}>{children}</main>
        </>
    )
}