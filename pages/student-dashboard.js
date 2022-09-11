import { Box, Typography } from '@mui/material'
import styles from '../styles/profile.module.css'

export default function StudentDashboard() {
    return (
        <Box>
            <Typography variant="h4" fontWeight="bolder" textAlign="center" pt="2rem">Mentors for you</Typography>

            <div className={styles.body} style={{ display: "flex", justifyContent: "space-between" }}>
                <div className={styles.card}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360" alt="Alice" style={{ width: "60%" }} />
                    <Typography variant='h4' pt="1.5rem" pb=".5rem" fontWeight="bold">Alice Smith</Typography>
                    <Typography color="gray" fontSize="1rem">Education Specialist</Typography>
                    <Typography fontSize=".85rem" height="9.5rem" py="1rem">
                        My job as an Education Specialist is to provide support and enhance student learning
                        to ensure all students achieve success. I specialize in Math, Science and English.
                    </Typography>
                    <a className={styles.button} href="mailto: alicesmith_mentor@gmail.com">Contact</a>
                </div>

                <div className={styles.card}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360" alt="Alice" style={{ width: "60%" }} />
                    <Typography variant='h4' pt="1.5rem" pb=".5rem" fontWeight="bold">Stuart Elliot</Typography>
                    <Typography color="gray" fontSize="1rem">Finance Specialist</Typography>
                    <Typography fontSize=".85rem" height="9.5rem" py="1rem">
                        My job as a Finance Specialist is to introduce finanical concepts to children in a fun and interactive manner is my goal.
                        I specialize in budgeting and handling debt.
                    </Typography>
                    <a className={styles.button} href="mailto: stuartelliot_mentor@gmail.com">Contact</a>
                </div>

                <div className={styles.card}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360" alt="Alice" style={{ width: "60%" }} />
                    <Typography variant='h4' pt="1.5rem" pb=".5rem" fontWeight="bold">Amiya Rissie</Typography>
                    <Typography color="gray" fontSize="1rem">Life Skills Specialist</Typography>
                    <Typography fontSize=".85rem" height="9.5rem" py="1rem">
                        My job as a Life Skills Specialist is to improve children's
                        self-sufficiency. I develop their skills for
                        independent living like socializing, personal care and job skills.
                    </Typography>
                    <a className={styles.button} href="mailto: amiyarissie_mentor@gmail.com">Contact</a>
                </div>
            </div>
        </Box>
    )
}