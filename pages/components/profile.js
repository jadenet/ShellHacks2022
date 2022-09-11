import { Box, Avatar, Typography, Button } from '@mui/material'

export default function Profile(props) {
    return (
        <Box display="flex" maxWidth="18rem" p="2rem" textAlign="center" backgroundColor="white" borderRadius="1rem" sx={{ flexFlow: "column", alignItems: "center", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}>
            <Avatar src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360" alt={props.name} style={{ width: "8rem", height: "8rem" }} />
            <Typography variant="h5" pt="1.5rem" pb=".3rem" fontWeight="bold">{props.name}</Typography>
            <Typography color="gray" fontSize=".9rem">{props.job}</Typography>
            <Typography fontSize=".85rem" height="9.5rem" mt="1rem">{props.description}</Typography>
            <Button href={`mailto: ${props.email}`} sx={{ width: "100%", borderRadius: "1rem", color: "white", backgroundColor: "black" }}>Contact</Button>
        </Box>
    )
}