import Option from './components/option'
import { Box, Typography } from '@mui/material'

export default function Home() {
  return (
    <Box my="4rem">
      <Typography variant='h5' textAlign="center" mb="3rem" fontWeight="bolder">We encourage your success and guide you towards a bright future</Typography>
      <Box display="flex" height="20rem" sx={{ justifyContent: "space-evenly" }}>
        <Option link="/student" text="Student" color="dodgerblue"></Option>
        <Option link="/mentor" text="Mentor" color="seagreen"></Option>
      </Box>
    </Box>
  )
}
