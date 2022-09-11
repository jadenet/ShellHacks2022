import { Box, Typography } from "@mui/material";

export default function About() {
    return (
        <Box p="5rem">
            <Typography variant="h4" textAlign="center" fontWeight="bolder" mb="1rem">About</Typography>
            <Typography variant="body1" fontSize="1.1rem" textAlign="center" px="10rem">
                MentorMe is a startup company who aims to connect foster students to mentors.
                Mentors are volunteers who are passionate on a student's success and would like to be paired up with students in need.
                Mentors can help the students in different aspects of life such as education, health, and finance.
                Students can easily pick courses they need help on, and are given suggestions on mentors they can contact for free.
            </Typography>
        </Box>
    )
}