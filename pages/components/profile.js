import { Box, Avatar, Typography, Link } from '@mui/material'

export default function Profile(props) {
    return (
        <Box display="flex" maxWidth="18rem" p="2rem" textAlign="center" backgroundColor="white" borderRadius="1rem" sx={{ flexFlow: "column", alignItems: "center", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}>
            <Avatar src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360" alt={props.name} style={{ width: "8rem", height: "8rem" }} />
            <Typography variant='h4' pt="1.5rem" pb=".5rem" fontWeight="bold">{props.name}</Typography>
            <Typography color="gray" fontSize="1rem">{props.job}</Typography>
            <Typography fontSize=".85rem" height="9.5rem" py="1rem">{props.description}</Typography>
            <Link width="100%" fontSize="18px" curser="pointer" textAlign="center" borderRadius="1rem" p=".5rem" href={`mailto: ${props.email}`} sx={{color: "white", backgroundColor: "black"}}>Contact</Link>
        </Box>
    )
}