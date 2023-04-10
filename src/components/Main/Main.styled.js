import styled from 'styled-components';

export const MainBox = styled.div`
  width: 100%;
  height: calc(100vh );
  position: relative;
  
`
export const Video = styled.video`
  width: 100%;
  height: 100%; 
  object-fit: cover;

`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.4);

`
