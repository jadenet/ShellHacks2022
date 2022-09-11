import { Link } from '@mui/material'

export default function NavItem(props) {
    return (
        <Link href={props.link} fontSize="large" underline="hover" color="black">{props.text}</Link>
    )
}