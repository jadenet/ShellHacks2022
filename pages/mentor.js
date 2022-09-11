import { Container, Stack, Typography, Button, FormGroup, FormControlLabel, Checkbox, Box, TextField } from "@mui/material"
import { useState } from 'react'

export default function Student() {
    const [selected, setSelected] = useState([]);

    function updateSelected(e) {
        if (e.target.checked) {
            if (selected.length === 0) {
                setSelected([e.target.value]);
            } else {
                setSelected([...selected, e.target.value]);
            }
        } else {
            var newSelected = [...selected];
            newSelected.splice(newSelected.findIndex((value) => value === e.target.value), 1);
            setSelected(newSelected);
        }
    }

    return (
        <Container>
            <Container maxWidth="lg">
                <Typography variant="h5" color="initial" my="3rem">1. What's your name?</Typography>
                <TextField
                    id="name"
                    label="Enter name"
                />
            </Container>

            <Container maxWidth="lg">
                <Typography variant="h5" color="initial" my="3rem">2. What's your email?</Typography>
                <TextField
                    id="name"
                    label="Enter name"
                />
            </Container>

            <Container maxWidth="lg">
                <Typography variant="h5" color="initial" my="3rem">3. What's your phone number?</Typography>
                <TextField
                    id="name"
                    label="Enter name"
                />
            </Container>

            <Container maxWidth="lg">
                <Typography variant="h5" color="initial" my="3rem">4. Which subjects are you specialized in?</Typography>
                <Stack direction="row" justifyContent="space-evenly" spacing={4} mb="3rem">
                    <Box p="3rem" backgroundColor="lightblue" borderRadius="2rem" flexGrow={1}>
                        <Typography variant="h6" color="initial" mb=".5rem">Education</Typography>
                        <FormGroup>
                            {["Math", "Science", "English"].map((name, id) =>
                                <FormControlLabel
                                    label={name}
                                    control={
                                        <Checkbox
                                            value={name}
                                            onChange={updateSelected}
                                            color="primary"
                                        />
                                    }
                                />
                            )}
                        </FormGroup>
                    </Box>

                    <Box p="3rem" backgroundColor="lightblue" borderRadius="2rem" flexGrow={1}>
                        <Typography variant="h6" color="initial" mb=".5rem">Finance</Typography>
                        <FormGroup>
                            {["Budgeting", "Money Management", "Financial Literacy"].map((name, id) =>
                                <FormControlLabel
                                    label={name}
                                    control={
                                        <Checkbox
                                            value={name}
                                            onChange={updateSelected}
                                            color="primary"
                                        />
                                    }
                                />
                            )}
                        </FormGroup>
                    </Box>

                    <Box p="3rem" backgroundColor="lightblue" borderRadius="2rem" flexGrow={1}>
                        <Typography variant="h6" color="initial" mb=".5rem">Life skills</Typography>
                        <FormGroup>
                            {["Driving", "Cooking", "Job skills"].map((name, id) =>
                                <FormControlLabel
                                    label={name}
                                    control={
                                        <Checkbox
                                            value={name}
                                            onChange={updateSelected}
                                            color="primary"
                                        />
                                    }
                                />
                            )}
                        </FormGroup>
                    </Box>

                    <Box p="3rem" backgroundColor="lightblue" borderRadius="2rem" flexGrow={1}>
                        <Typography variant="h6" color="initial" mb=".5rem">Health</Typography>
                        <FormGroup>
                            {["Exercise", "Nutrition", "Mental Health"].map((name, id) =>
                                <FormControlLabel
                                    label={name}
                                    control={
                                        <Checkbox
                                            value={name}
                                            onChange={updateSelected}
                                            color="primary"
                                        />
                                    }
                                />
                            )}
                        </FormGroup>
                    </Box>
                </Stack>
                <Typography variant="h6" color="initial" mb="2rem">Current selections: {selected.length === 0 ? "None" : selected.toString()}</Typography>
            </Container>

            <Button variant="contained" color="primary" size="medium" href="/mentor-dashboard">Done</Button>
        </Container>
    )
}