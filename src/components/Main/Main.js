import React from 'react'
import videoBG from '../../assets/BluePurple.mp4'
import {MainBox, Video,Overlay} from './Main.styled'
import News from '../News/News'

const Main = () => {
  return (
    <MainBox>
        
           
        <Video src={videoBG} autoPlay loop muted/>
       {/* <div className='content'>
       <h1> Hello</h1> */}
       {/* </div> */}
       <Overlay> </Overlay>
       {/* <News/> */}
    </MainBox>
  )
}

export default Main