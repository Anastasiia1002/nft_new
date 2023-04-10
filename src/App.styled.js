import { styled } from '@mui/material/styles';
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';

export const ItemTypography = styled(Typography)`
  color: white;
  display: flex;
  align-items: center;
  white-space: nowrap;

`;
export const MenuButton = styled(IconButton)`
margin-right: 8px;

`;
 export const RootToolbar = styled(Toolbar)`
  color: white;
  display: flex;
  flex-direction: row;
    justify-content: space-between;
`;
export const BoxBar = styled(Box)`
white-space: nowrap;
display: flex;
flex-direction: row;

`;
