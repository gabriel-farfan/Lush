import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import blogActions from '../../redux/actions/blogActions'
import { useSelector, useDispatch } from 'react-redux'

function AdminPanelBlog() {

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
  
        event.preventDefault()
    
        const blogData = {
        blogTitle: event.target[0].value,
        text: event.target[2].value,
        images: event.target[4].value,
        
        }
        console.log(blogData)
        
        dispatch(blogActions.blogData(blogData))
    
        }

  return (
    <div>
        <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
        <Box
          className="cardSignUp"
          sx={{
            margin: 10,
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5" m={6}>
            Add new Article
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  
                  name="blogTitle"
                  required
                  fullWidth
                  id="blogTitle"
                  label="Article Title"
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="text"
                  label="Article Text"
                  name="text"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="images"
                  label="Image"
                  name="images"
                  // value={email}
                  // onChange={e=>setEmail(e.target.value)}
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save Article
            </Button>
            
          </Box>
        </Box>
        </Grid>
    </div>
  )
}

export default AdminPanelBlog