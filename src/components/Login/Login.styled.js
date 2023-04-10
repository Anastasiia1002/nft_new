import { styled } from '@mui/material/styles';
 import {Box , Button} from '@mui/material';





export const BoxContainer = styled(Box)`
  box-sizing: border-box;
  position: absolute;
  /* z-index: 100; */
  left: 0;
  top: 0;
  width: 100%;
  height: calc(100vh - 60px);

  /* background: rgba(17, 17, 17, 0.3); */
  /* backdrop-filter: blur(10px); */

  padding: 20px;
  /* padding-top: 80px; */
overflow: auto;
margin-top: 65px;
display: flex;
justify-content: center;
`;

export const BoxInputs = styled(Box)`
margin-top: 20%;
width: 80%;
min-width: 300px;
height:400px;
/* background: rgba(255, 255, 255, 0.3); */
backdrop-filter: blur(40px); 
display: flex;
justify-content: center;
/* border-radius: 50px; */
flex-direction: column;
`

