import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link as LinkRouter } from 'react-router-dom'
import './navBar.css'
import userActions from '../../redux/actions/userActions'
import { connect } from 'react-redux'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';


const pages = ['Home', 'Shop', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = (props) => {

  console.log(props.user)

  function SignOutUser(){
    props.SignOutUser()
  }

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (
    <AppBar position="static" className="appbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            className="titleNav"
            variant="h5"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Lush <span className="navSpanTittle">.</span>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
              <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <LinkRouter className="navMob" to="/" >Home</LinkRouter>
              </Button>
                <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <LinkRouter className="navMob" to="/Shop" >Shop</LinkRouter>
              </Button>

              <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <LinkRouter className="navMob" to="/Blog" >Blog</LinkRouter>
              </Button>


            </Menu>
          </Box>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block'}}
              >
                <LinkRouter className="nav" to="/" >Home</LinkRouter>
              </Button>
                
          
          <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <LinkRouter className="nav" to="/Shop" >Shop</LinkRouter>
              </Button>

              <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <LinkRouter className="nav" to="/Blog" >Blog</LinkRouter>
              </Button>

              
              <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <LinkRouter className="nav" to="/cart" >
                <Badge badgeContent={props.cart.length} color="error">
  
                  <ShoppingCartIcon />
                </Badge>
    
              
                  </LinkRouter>
              </Button>

              {props.user?.admin && 
              
              <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <LinkRouter className="nav" to="/Admin" >ADMIN</LinkRouter>
              </Button>
              }
  

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              {props.user ? <img className="profileUrlnav" src={props.user.profileurl} alt={props.user.firstName}
              /> : 
              <PersonIcon className="iconNav" /> 
              }
              {/* {console.log(props.user)} */}
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              

              {props.user ?
                
              
                  
                <button className="signOutBtn" onClick={()=>SignOutUser()}>
                  Sign Out
                </button>

                :

                <div>
                <MenuItem onClick={handleCloseUserMenu}>
                  
                <LinkRouter className="navMob" to="/SignIn" > <Typography textAlign="center">Sign In</Typography> </LinkRouter>
                  
                </MenuItem>

                <MenuItem onClick={handleCloseUserMenu}>
                <LinkRouter className="navMob" to="/SignUp" > <Typography textAlign="center">Sign Up</Typography> </LinkRouter>
                  
                </MenuItem>
                </div>
              }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const mapStateToProps = (state) => {
  return {
      user: state.userReducer.user,
      cart: state.cartReducer.cart
  }
}

const mapDispatchToProps = {
  signInUser: userActions.signInUser,
  SignOutUser: userActions.SignOutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveAppBar);
// export default ResponsiveAppBar;