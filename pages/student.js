import Dropdown from "./components/dropdown"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useState } from 'react'

export default function Student() {
    const [selections, setSelections] = useState('');

    return (
        <Container>
            <Typography variant="h5" color="initial" mb="3rem">Which subjects would you like to be mentored on?</Typography>
            <Stack direction="row" justifyContent="space-evenly" spacing={4} mb="3rem">
                <Dropdown name="Education" items={["Math", "Science", "English"]}></Dropdown>
                <Dropdown name="Finance" items={["Something1", "Something2", "Something3"]}></Dropdown>
                <Dropdown name="Life skills" items={["Something1", "Something2", "Something3"]}></Dropdown>
                <Dropdown name="Health" items={["Something1", "Something2", "Something3"]}></Dropdown>
            </Stack>
            <Typography variant="h6" color="initial" mb="2rem">Current selections: {selections === '' ? "None": selections.toString()}</Typography>
            <Button variant="contained" color="primary" size="medium">Done</Button>
        </Container>
    )
}