import { Typography, Link } from '@mui/material'

export default function Option(props) {
    return (
        <Link href={props.link} underline="none" width="25rem" height="100%" display="flex" sx={{flexFlow: "column", justifyContent: "center"}} borderRadius="3rem" pt="1rem" boxShadow="0 1rem 2rem 0 rgba(0, 0, 0, .1)" style={{ backgroundColor: props.color }}>
            <Typography variant="h3" color="white" fontWeight="bolder" textAlign="center">{props.text}</Typography>
            <Typography variant="subtitle1" color="white" textAlign="center">Sign up</Typography>
        </Link>
    )
}