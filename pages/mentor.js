import Dropdown from "./components/dropdown"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useState } from 'react'

export default function Mentor() {
    return (
        <Container>
        <Typography variant="h5" color="initial" mb="3rem">Your schedule for the week</Typography>
       {/* <Stack direction="row" justifyContent="space-evenly" spacing={4} mb="3rem"> */}
            {/* <Dropdown name="Education" items={["Math", "Science", "English"]}></Dropdown>
            <Dropdown name="Finance" items={["Finance Literacy", "Budgeting", "Money Management"]}></Dropdown>
            <Dropdown name="Life skills" items={["Cooking", "Something2", "Something3"]}></Dropdown>
            <Dropdown name="Health" items={["Something1", "Something2", "Something3"]}></Dropdown>
        </Stack>
        <Typography variant="h6" color="initial" mb="2rem">Current selections: {selections === '' ? "None": selections.toString()}</Typography>
        <Button variant="contained" color="primary" size="medium">Done</Button> */}
    </Container>
    )
}