import { Box, Link } from '@mui/material'

export default function Navbar() {
    return (
        <Box height="1.5rem" display="flex" backgroundColor="turquoise" sx={{ justifyContent: "space-between", alignItems: "center", boxShadow: "0 4px 8px 0 rbga(0, 0, 0, .2)" }} p="1.5rem">
            <Link href="/" fontSize="large" fontWeight="bold" underline="none" color="black">MentorMe</Link>
            <Link href="/about" fontSize="large" fontWeight="semibold" underline="none" color="black">About</Link>
        </Box>
    )
}