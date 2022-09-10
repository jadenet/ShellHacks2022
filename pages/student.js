import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useState } from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

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
            <Typography variant="h5" color="initial" mb="3rem">Which subjects would you like to be mentored on?</Typography>
            <Stack direction="row" justifyContent="space-evenly" spacing={4} mb="3rem">
                <Box p="3rem" backgroundColor="lightblue" borderRadius="2rem" flexGrow={1}>
                    <Typography variant="h6" color="initial" mb=".5rem">Education</Typography>
                    <FormGroup>
                        {["Math", "Science", "English", "Other"].map((name, id) =>
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
                        {["Something1", "Something2", "Something3", "Other"].map((name, id) =>
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
                        {["Something1", "Something2", "Something3", "Other"].map((name, id) =>
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
                        {["Something1", "Something2", "Something3", "Other"].map((name, id) =>
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
            <Typography variant="h6" color="initial" mb="2rem">Current selections: {selected === [] ? "None" : selected.toString()}</Typography>
            <Button variant="contained" color="primary" size="medium">Done</Button>
        </Container>
    )
}