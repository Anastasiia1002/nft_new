import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MenuItem,
  Tooltip,
  Button,
  Container,
  Menu,
  Typography,
  IconButton,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";
import { Suspense } from "react";
import { Outlet } from "react-router";

import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from 'react-redux';
import Main from "../Main/Main";
import { authSingOutUser } from "../../redux/auth/authOperations";
import { auth } from "../../firebase/config";

const pages = ["Home", "News"];
const settings = ["Login", "Registration"];


const AppMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const dispatch= useDispatch()
const user =auth.currentUser
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  useEffect(()=>{
   
  },[user])
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ background: "rgb(12, 14, 5)", zIndex: 10 }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="span"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                // letterSpacing: '.3rem',
                color: "inherit",
                // textDecoration: 'none',
              }}
            >
              NFC App
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                // TransitionComponent={Fade}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link to={`/${page}`}>{page}</Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="span"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                // letterSpacing: '.3rem',
                color: "inherit",
                // textDecoration: 'none',
              }}
            >
              NFC
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link to={`/${page}`}>{page}</Link>
                </Button>
              ))}
            </Box>


            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
             
                {!auth.currentUser ? <>
                <Button
                  key='Login'
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link to={`/Login`}>Login</Link>
                </Button>
                <Button
                  key='Registration'
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link to={`/Registration`}>Registration</Link>
                </Button> </> 
                : <>

<Button
                  key='Profile'
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link to={`/Profile`}>Profile</Link>
                </Button>
                <Button
                  key='LogOut'
                  onClick={()=>dispatch(authSingOutUser())}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link to={`/`}>Log Out</Link>
                </Button>
                </>}
          
          
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <AccountCircleIcon
                    sx={{
                      color: "white",
                      display: { xs: "flex", md: "none" },
                      mr: 1,
                    }}
                  />
                </IconButton>
              </Tooltip>
              {!user ? 
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
              
                <MenuItem key='Login' onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                     
                    <Link to={`/Login`}>Login</Link></Typography>
                  </MenuItem>
                  <MenuItem key='LogOut' onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                     
                    <Link to={`/Registration`}>Registration</Link></Typography>
                  </MenuItem>
                  </Menu>
                 :
                  <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key='Profile' onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                     
                    <Link to={`/Profile`}>Profile</Link></Typography>
                  </MenuItem>
                  <MenuItem key='LogOut'  onClick={()=>dispatch(authSingOutUser())}>
                    <Typography textAlign="center">
                     
                    <Link to={`/`}>Log Out</Link></Typography>
                  </MenuItem>
                  </Menu>
                }
             
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Main />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default AppMenu;
