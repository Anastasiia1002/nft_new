import { Box,Card, CardContent , Typography} from '@mui/material'
import React from 'react'
import { BoxContainer } from './Profile.styled'

const Profile = () => {
  return (
  <BoxContainer>
    <Box sx={{ width: 275}}>
      <Card variant="outlined" sx={{ background: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(20px)'}}>
      <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Youre profile
      </Typography>
      <Typography variant="h5" component="div">
        Anastasiia
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        @Olivia_Macline
      </Typography>
      <Typography variant="body2">
       Anastasiiavon1002@gmail.com
      </Typography>
    </CardContent>
      </Card>
    </Box>

      </BoxContainer>
  )
}

export default Profile