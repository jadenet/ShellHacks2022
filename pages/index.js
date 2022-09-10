import Option from './components/option'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.header}>
      <Option link="/student" text="Student" color="dodgerblue"></Option>
      <Option link="/mentor" text="Mentor" color="seagreen"></Option>
    </div>
  )
}
