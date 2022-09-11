import { Container, Stack, Typography, Button, FormGroup, FormControlLabel, Checkbox, Box, TextField } from "@mui/material"
import { useState } from 'react'

export default function Student() {
    const [selected, setSelected] = useState([])

    function updateSelected(e) {
        if (e.target.parentElement.label === "Other") {
            if (e.target.checked) {
                console.log('good');
                <TextField
                    id="other"
                    label="Enter here"
                    varient="outlined"
                />
            } else {

            }
        }

        else if (e.target.checked) {
            if (selected.length === 0) {
                setSelected([e.target.value])
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
                <Typography variant="h5" color="initial" my="3rem">2. Which subjects would you like to be mentored on?</Typography>
                <Stack direction="row" justifyContent="space-evenly" spacing={4} mb="3rem">
                    <Box p="3rem" backgroundColor="white" borderRadius="2rem" flexGrow={1}>
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

                    <Box p="3rem" backgroundColor="white" borderRadius="2rem" flexGrow={1}>
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

                    <Box p="3rem" backgroundColor="white" borderRadius="2rem" flexGrow={1}>
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

                    <Box p="3rem" backgroundColor="white" borderRadius="2rem" flexGrow={1} sx={{boxShadow: "0 4px 8px 0 rbga(0, 0, 0, .2)"}}>
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

            <Button variant="contained" color="primary" size="medium" href="/student-dashboard">Done</Button>
        </Container>
    )
}