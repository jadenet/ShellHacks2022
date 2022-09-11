import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import Profile from '../components/profile'

export default function Student() {
    const router = useRouter();
    const query = router.query.selected;
    const selected = query ? query.split(",") : [];

    const mentorInfo = [
        {
            name: "Alice Smith",
            job: "Education Specialist",
            description: "My job as an Education Specialist is to provide support and enhance student learning to ensure all students achieve success. I specialize in Math, Science and English.",
            email: "alicesmith_mentor@gmail.com",
            courses: ["Math", "Science", "English"]
        },

        {
            name: "Stuart Elliot",
            job: "Finance Specialist",
            description: "My job as a Finance Specialist is to introduce finanical concepts to children in a fun and interactive manner is my goal. I specialize in budgeting and handling debt.",
            email: "stuartelliot_mentor@gmail.com",
            courses: ["Budgeting", "Money Management", "Financial Literacy"]
        },

        {
            name: "Amiya Rissie",
            job: "Life Skills Specialist",
            description: "My job as a Life Skills Specialist is to improve children's self-sufficiency. I develop their skills for independent living like socializing, personal care and job skills.",
            email: "amiyarissie_mentor@gmail.com",
            courses: ["Driving", "Cooking", "Job skills"]
        },

        {
            name: "Warren Coleman",
            job: "Health Specialist",
            description: "My job as a Health Specialist is to improve a person's wellbeing so that they can succeed. I teach various subjects that focuses on both physical and mental health.",
            email: "warrencoleman_mentor@gmail.com",
            courses: ["Exercise", "Nutrition", "Mental Health"]
        }
    ]

    return (
        <Box>
            <Typography variant="h4" fontWeight="bolder" textAlign="center" pt="2rem">Mentors for you</Typography>

            <Box p="10rem" pt="2rem" m="0" display="flex" rowGap="2rem" flexWrap="wrap" sx={{ justifyContent: "space-evenly" }}>
                {mentorInfo.map((mentor) => {
                    var hasProfile = false;

                    mentor.courses.forEach((course) => {
                        if (selected.includes(course) && hasProfile === false) {
                            hasProfile = true;
                        }
                    })

                    if (hasProfile === true) {
                        return (
                            <Profile name={mentor.name} job={mentor.job} description={mentor.description} email={mentor.email} />
                        )
                    }
                })}
            </Box>
        </Box>
    )
}