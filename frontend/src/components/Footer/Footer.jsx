import React from 'react'
import Grid from '@mui/material/Grid'
import {Link as LinkRouter} from 'react-router-dom'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArticleIcon from '@mui/icons-material/Article';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Footer() {
    return (
        <footer className="footer">

            <Box className="boxcont" color="white" px={{ xs: 3, sm: 10}} py={{ xs: 5, sm: 10}}>
                <Container maxwidth="lg">
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={3}>
                          <Box className="tittle" borderBottom="1">Quick Links</Box>
                          <Box className="quicklinks">
                              <LinkRouter className=" socialbrands" to="/Home" ><HomeIcon className="iconIgPrueba"/>  Home</LinkRouter>
                              <LinkRouter className="socialbrands" to="/Shop" > <ShoppingCartIcon className="iconIgPrueba"/> Shop</LinkRouter>
                              <LinkRouter className="socialbrands" to="/Blog" > <ArticleIcon className="iconIgPrueba"/> Blog</LinkRouter>
                              <LinkRouter className="socialbrands" to="/Cart" > <ShoppingCartIcon className="iconIgPrueba"/> Cart</LinkRouter>
                              <LinkRouter className="socialbrands" to="/SignIn" > <LoginIcon className="iconIgPrueba"/> Sign In</LinkRouter>
                              <LinkRouter className="socialbrands" to="/SignUp" > <AccountCircleIcon className="iconIgPrueba"/> Sign Up</LinkRouter>

                          </Box>
                          
                          </Grid>
                      
                        <Grid item xs={12} sm={3}>
                          <Box className="tittle" borderBottom="1">Contact</Box>
                          <Box className="quicklinks">
                          <a className="socialbrands" href=""><LocalPhoneIcon className="iconIgPrueba"/> (011) 40323987</a>
                          <a className="socialbrands" href=""><LocationOnIcon className="iconIgPrueba"/> Olga Cossettini 1540, CABA</a>
                          <a className="socialbrands" href=""><EmailIcon className="iconIgPrueba"/> info@lush.com</a>
                          <a className="socialbrands" href=""><WhatsAppIcon className="iconIgPrueba"/> +5491153432342</a>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                          <Box className="tittle" borderBottom="1">Social Networks</Box>
                          <Box className="quicklinks">
                          <a className="socialbrands" href="https://www.instagram.com/mindhub_la/?hl=es"><InstagramIcon className="iconIgPrueba"/>Instagram</a>
                          <a className="socialbrands" href="https://www.instagram.com/mindhub_la/?hl=es"><FacebookIcon className="iconIgPrueba"/>  Facebook</a>
                          <a className="socialbrands" href="https://www.instagram.com/mindhub_la/?hl=es"><YouTubeIcon className="iconIgPrueba"/>  YouTube</a>
                          <a className="socialbrands" href="https://www.instagram.com/mindhub_la/?hl=es"><TwitterIcon className="iconIgPrueba"/>  Twitter</a>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                          <Box className="tittle" borderBottom="1">About the Authors</Box>
                          <Box className="quicklinks">
                          <a className="socialbrands" href="linkedin.com/in/sergio-robledo-9b1a33187"><LinkedInIcon className="iconIgPrueba"/>  Agustín Montoya</a>
                          <a className="socialbrands" href="linkedin.com/in/sergio-robledo-9b1a33187"><LinkedInIcon className="iconIgPrueba"/>  Gabriel Farfan</a>
                          <a className="socialbrands" href="https://www.linkedin.com/in/chantal-pilia-983387237/"><LinkedInIcon className="iconIgPrueba"/>  Chantal Pilia</a>
                          <a className="socialbrands" href="linkedin.com/in/sergio-robledo-9b1a33187"><LinkedInIcon className="iconIgPrueba"/>  Hugo Onofri</a>
                          <a className="socialbrands" href="linkedin.com/in/sergio-robledo-9b1a33187"><LinkedInIcon className="iconIgPrueba"/>  Emanuel Villagra</a>
                          <a className="socialbrands" href="linkedin.com/in/sergio-robledo-9b1a33187"><LinkedInIcon className="iconIgPrueba"/>  Sergio Robledo</a>
                          
                          </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box> 

            {/* <Grid container spacing={1}>
              
              <Grid item xs={12} md={6}>
                  <div className="left">
                  <h4>Quick Links</h4>
                  <ul>
                      <li>
                        <LinkRouter to="/Home" >Home</LinkRouter>
                      </li>
                      <li>
                        <LinkRouter to="/Home" >Cities</LinkRouter>
                      </li>
                  </ul>
                  </div>
              </Grid> 
              <div className="right">
                  <h4>Robledo Sergio</h4>
                  <ul>
                      <li>
                        <a href="github.com/seergiorob/">GitHub</a>
                      </li>
                      <li>
                        <a href="linkedin.com/in/sergio-robledo-9b1a33187">LinkedIn</a>
                      </li>
                  </ul>
                  </div>
              <Grid item xs={12} md={6}>
                  
              </Grid>
          </Grid> */}
        </footer>
    )
}

export default Footer