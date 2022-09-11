import { Box, Typography } from '@mui/material'
import Profile from './components/profile'

export default function StudentDashboard() {
    return (
        <Box>
            <Typography variant="h4" fontWeight="bolder" textAlign="center" pt="2rem">Mentors for you</Typography>

            <Box p="10rem" pt="2rem" m="0" display="flex" sx={{ justifyContent: "space-between" }}>
                <Profile name="Alice Smith" job="Education Specialist" description="My job as an Education Specialist is to provide support and enhance student learning
                        to ensure all students achieve success. I specialize in Math, Science and English." email="alicesmith_mentor@gmail.com" />

                <Profile name="Stuart Elliot" job="Finanace Specialist" description="My job as a Finance Specialist is to introduce finanical concepts to children in a fun and interactive manner is my goal.
                        I specialize in budgeting and handling debt." email="stuartelliot_mentor@gmail.com" />

                <Profile name="Amiya Rissie" job="Life Skills Specialist" description="My job as a Life Skills Specialist is to improve children's
                        self-sufficiency. I develop their skills for independent living like socializing, 
                        personal care and job skills." email="amiyarissie_mentor@gmail.com" />
            </Box>
        </Box>
    )
}