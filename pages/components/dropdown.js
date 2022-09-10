import FormGroup from '@mui/material/FormGroup'
import { useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

export default function Dropdown(props) {
    const [selected, setSelected] = useState([]);

    function updateSelected(e) {
        if (e.target.checked) {
            const updatedSelection = [...selected].push(e.target.value);
            setSelected(updatedSelection);
        }
        else {
            const updatedSelection = [...selected].splice(selected.indexOf(e.target.value), 1);
            setSelected(updatedSelection);
        }
        console.log(selected)
    }

    return (
        <Box p="3rem" backgroundColor="lightblue" borderRadius="2rem">
            <Typography variant="h6" color="initial" mb=".5rem">{props.name}</Typography>
            <FormGroup>
                {props.items.map((name, id) =>
                    <FormControlLabel
                        label={name}
                        control={
                            <Checkbox
                                value={id}
                                checked={false}
                                onChange={updateSelected}
                                color="primary"
                            />
                        }
                    />
                )}
            </FormGroup>
        </Box>
    )
}