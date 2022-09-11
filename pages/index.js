import Option from './components/option'
import { Box, Typography } from '@mui/material'

export default function Home() {
  return (
    <Box my="4rem">
      <Typography variant='h3' textAlign="center" mb="3rem" color="" fontWeight="bolder">To provide mentoring to all</Typography>
      <Box display="flex" height="20rem" sx={{justifyContent: "space-evenly"}}>
        <Option link="/student" text="Student" color="dodgerblue"></Option>
        <Option link="/mentor" text="Mentor" color="seagreen"></Option>
      </Box>
    </Box>
  )
}
