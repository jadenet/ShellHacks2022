import Option from './components/option'
import { Box } from '@mui/material'

export default function Home() {
  return (
    <Box display="flex" height="20rem" mt="5rem" sx={{justifyContent: "space-evenly"}}>
      <Option link="/student" text="Student" color="dodgerblue"></Option>
      <Option link="/mentor" text="Mentor" color="seagreen"></Option>
    </Box>
  )
}
