import React from 'react'

import Grid from '@mui/material/Grid'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button } from '@mui/material';

function Blog() {
  return (
    <div>
        <Box>
            <Container>
                <h2 className="h2HomeBlog">OUR BLOG</h2>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box className="home-blog-box">
                            <h3 className="h3HomeBlog">Plants Help Make Your House More Beautiful</h3>
                            <p className="pHomeBlog">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, consequatur voluptate quae qui provident cumque nulla adipisci rem et quaerat tempore, temporibus maiores nostrum alias excepturi esse reprehenderit, sint est fugit repudiandae facere. Cupiditate autem praesentium nemo, iusto corrupti cumque, adipisci ipsum ipsa iure placeat eveniet nesciunt fugit totam voluptatem.</p>
                            <Button variant="outlined">READ MORE</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <img src={process.env.PUBLIC_URL+ `/img/blog1.jpg`} alt="plant" />
                    </Grid>
                </Grid>
            </Container>

        </Box>
        
    </div>
  )
}


export default Blog
