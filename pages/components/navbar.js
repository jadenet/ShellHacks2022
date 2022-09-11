import { Box } from '@mui/material'
import NavItem from './navitem'

export default function Navbar() {
    return (
        <Box height="1rem" display="flex" backgroundColor="turquoise" sx={{justifyContent: "space-between", alignItems: "center"}} p="1.5rem">
            <NavItem link="/" text="MentorMe"></NavItem>
            <NavItem link="/about" text="About"></NavItem>
        </Box>
    )
}