import { styled } from '@mui/material/styles';
 import {Box } from '@mui/material';


export const BoxNews = styled(Box)`
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
&::-webkit-scrollbar {
        width: 10px;
        border: 10px solid rgba(17, 17, 17, 0.3);
    }
    &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, rgba(17, 17, 17, 0.3), pink, rgba(17, 17, 17, 0.3));
    border-radius: 100%;
   
}
`;
