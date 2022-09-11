import { Box } from '@mui/material'
import NavItem from './navitem'

export default function Navbar() {
    return (
        <Box height="4rem" display="flex" sx={{justifyContent: "space-between", alignItems: "center"}} p="2rem">
            <NavItem link="/" text="MentorMe"></NavItem>
            <NavItem link="/profile" text="Profile"></NavItem>
        </Box>
    )
}