import { Box, Typography } from "@mui/material";

export default function About() {
    return (
        <Box p="5rem">
            <Typography variant="h4" textAlign="center" fontWeight="bolder" mb="1rem">About</Typography>
            <Typography variant="body1" textAlign="center" px="10rem">
                MentorMe is a startup company who aims to connect foster students to mentors.
            </Typography>
        </Box>
    )
}