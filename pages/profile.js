import styles from '../styles/profile.module.css'

export default function Profile() {
    return (
        <div className={styles.main}>
            <div className={styles.body} style={{ display: "flex", justifyContent: "space-between" }}>

                <div className={styles.card}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360" alt="Alice" style={{ width: "70%" }} />
                    <h1> Alice Smith </h1>
                    <p className="title"> Education Specialist </p>
                    <p> My job as an Education Specialist is to provide support and enhance student learning
                        to ensure all students achieve success. I specialize in Math, Science and English. </p>
                    <p> alicesmith_mentor@gmail.com </p>
                    <a href="#" className={styles.a}><i ></i></a>
                    <a href="#" className={styles.a}> <i ></i></a>
                    <a href="#" className={styles.a}> <i ></i></a>
                    <a href="#" className={styles.a}><i ></i></a>
                    <p><button className={styles.button}>Contact</button></p>
                </div>

                <div className={styles.card}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360" alt="Alice" style={{ width: "70%" }} />
                    <h1> Stuart Elliot </h1>
                    <p className="title"> Finance Specialist </p>
                    <p> My job as a Finance Specialist is to introduce finanical concepts to children in a fun and interactive manner is my goal.
                        I specialize in budgeting and handling debt. </p>
                    <p> stuartelliot_mentor@gmail.com </p>
                    <a href="#" className={styles.a}><i ></i></a>
                    <a href="#" className={styles.a}> <i ></i></a>
                    <a href="#" className={styles.a}> <i ></i></a>
                    <a href="#" className={styles.a}><i ></i></a>
                    <p><button className={styles.button}>Contact</button></p>
                </div>

                <div className={styles.card}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360" alt="Alice" style={{ width: "70%" }} />
                    <h1> Amiya Rissie </h1>
                    <p className="title"> Life Skills Specialist </p>
                    <p> My job as a Life Skills Specialist is to improve children's
                        self-sufficiency. I develop their skills for
                        independent living like socializing, personal care and job skills. </p>
                    <p> amiyarissie_mentor@gmail.com </p>
                    <a href="#" className={styles.a}><i ></i></a>
                    <a href="#" className={styles.a}> <i ></i></a>
                    <a href="#" className={styles.a}> <i ></i></a>
                    <a href="#" className={styles.a}><i ></i></a>
                    <p><button className={styles.button}>Contact</button></p>
                </div>
            </div>
        </div>

    )


}