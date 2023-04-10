import React from 'react'
import { BoxContainer } from './Home.styled'
import welcome from '../../assets/picture/Rectangle.png'
import { Box } from '@mui/material'
const Home = () => {
  return (
    <BoxContainer>
        <Box mb='-20px'>
             <img
        src={welcome}
        alt={'Welcome'}
        loading="lazy"
      width='100%'
    //   height='100%'
      />
      </Box>
    </BoxContainer>
  )
}

export default Home