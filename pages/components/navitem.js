import styles from '../../styles/NavItem.module.css'

export default function NavItem(props) {
    return (
        <a href={props.link} className={styles.wrapper}>{props.text}</a>
    )
}