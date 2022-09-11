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
                <Typography variant="h5" color="initial" mt="3rem" mb="1rem">1. What's your name?</Typography>
                <TextField id="name" label="Enter name" sx={{ backgroundColor: "white", boxShadow: "0 4px 8px 0 rbga(0, 0, 0, .2)" }} />
            </Container>

            <Container maxWidth="lg">
                <Typography variant="h5" color="initial" mt="3rem" mb="1rem">2. What's your email?</Typography>
                <TextField id="email" label="Enter email" sx={{ backgroundColor: "white", boxShadow: "0 4px 8px 0 rbga(0, 0, 0, .2)" }} />
            </Container>

            <Container maxWidth="lg">
                <Typography variant="h5" color="initial" mt="3rem" mb="1rem">3. Tell us more about you</Typography>
                <TextField id="bio" label="Enter bio" sx={{ backgroundColor: "white", boxShadow: "0 4px 8px 0 rbga(0, 0, 0, .2)" }} />
            </Container>

            <Container maxWidth="lg">
                <Typography variant="h5" color="initial" mt="3rem" mb="1rem">4. Which subjects are you specialized in?</Typography>
                <Stack direction="row" justifyContent="space-evenly" spacing={4} mb="2rem">
                    <Box p="2rem" backgroundColor="white" borderRadius="1rem" flexGrow={1} sx={{ boxShadow: "0 4px 8px 0 rbga(0, 0, 0, .2)" }}>
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

                    <Box p="2rem" backgroundColor="white" borderRadius="1rem" flexGrow={1} sx={{ boxShadow: "0 4px 8px 0 rbga(0, 0, 0, .2)" }}>
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

                    <Box p="2rem" backgroundColor="white" borderRadius="1rem" flexGrow={1} sx={{ boxShadow: "0 4px 8px 0 rbga(0, 0, 0, .2)" }}>
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

                    <Box p="2rem" backgroundColor="white" borderRadius="1rem" flexGrow={1} sx={{ boxShadow: "0 4px 8px 0 rbga(0, 0, 0, .2)" }}>
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
                <Typography variant="h6" color="initial">Current selections: {selected.length === 0 ? "None" : selected.toString()}</Typography>
            </Container>

            <Button variant="contained" size="medium" href="/mentor-dashboard" sx={{ margin: "1.5rem", backgroundColor: "turquoise", borderRadius: "1rem" }}>Done</Button>
        </Container>
    )
}