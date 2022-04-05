import React from 'react'
import './detailsPlant.css'
import Grid from '@mui/material/Grid'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button } from '@mui/material';

function DetailsPlant() {

  return (

    <div>
        <Box className="detailsWrapper">
            <Container >
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6} elevation={6}>
                        <Box className="details-box">
                            <h3 className="h3Details">Difembachia</h3>
                            <p className="pDetails">Watercolor orchids are Phalaenopsis orchids dyed using a safe and natural method. You may notice a small number of blooms on your orchid upon delivery. These blooms will open quicker in a warm indoor setting. Phalaenopsis orchids typically bloom about once a year for up to three months. After a blooming cycle, the flowers will wilt and fall off. This is the orchid’s way to store up energy to re-bloom again next season. When they re-bloom, their flowers will be their natural color. 
                            </p>

                            <p className="pDetails">Price: $400.</p>

                            <p className="pDetails"> <span class="black"> Care: </span> <br/>Light: Thrives in bright indirect light, but can tolerate medium indirect light. Direct sun tolerance is species dependant.<br/> Water: Water every 1-2 weeks, allowing potting medium to dry out between waterings. </p>

                            <p className="pDetails">Sad Signs: Wilting, wrinkling leaves:
                            Underwatered
                            Yellowing leaves:
                            Overwatered, or too much sun
                            Wilting flowers:
                            Ending its yearly blooming cycle, storing up energy to re-bloom</p>

                            

                            <p className="pDetails">Room:</p>

                            <p className="pDetails">Type:</p>



                            <Button variant="outlined">BUY NOW</Button>
                        </Box>
                    </Grid>
                        <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        elevation={6}
                        sx={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1598764557991-b9f211b73b81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        }}
                        />
                    {/* <Grid item xs={12} sm={12} md={6}>
                        <img className="imgDetails" src={process.env.PUBLIC_URL+ `/img/plants/bromeliadantonio.jpg`} alt="plant" />
                    </Grid> */}
                </Grid>
            </Container>

        </Box>

    </div>

  )
}

export default DetailsPlant