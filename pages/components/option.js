import styles from '../../styles/Option.module.css'

export default function Option(props) {
    return (
        <a href={props.link} className={styles.wrapper} style={{ backgroundColor: props.color }}>
            <h1 className={styles.title}>
                {props.text}
            </h1>
            <p className={styles.description}>
                Login here
            </p>
        </a>
    )
}