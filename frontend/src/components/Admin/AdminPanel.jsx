import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import plantActions from '../../redux/actions/plantActions'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './adminPanel.css'
import AdminPanelBlog from './AdminPanelBlog';

function AdminPanel() {

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
  
        event.preventDefault()
    
        const plantData = {
          name: event.target[0].value,
          description: event.target[2].value,
          price: event.target[4].value,
          size: event.target[6].value,
          type: event.target[8].value,
          images: event.target[10].value,
          care: event.target[12].value,
          light: event.target[14].value,
          room: event.target[16].value,
          sadSigns: event.target[18].value,
          lightRatio: event.target[20].value,
          waterRatio: event.target[22].value,
          careRatio: event.target[24].value,
          stock: event.target[26].value,
        }
        console.log(plantData)
        
        dispatch(plantActions.savePlant(plantData))
    
        }

  return (
    <div className="adminWrapper">
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
          {/* <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5" m={6}>
            Add new Plant.
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
                  
                  name="name"
                  required
                  fullWidth
                  id="firstName"
                  label="Plant Name"
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  label="Plant description"
                  name="description"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="price"
                  label="Price"
                  name="price"
                  // value={email}
                  // onChange={e=>setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="size"
                  label="Plant Size"
                  type="size"
                  id="size"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="type"
                  label="Plant Type"
                  name="type"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="images"
                  label="Plant Image"
                  name="images"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="care"
                  label="Plant Care"
                  name="care"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="light"
                  label="Plant light"
                  name="light"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="room"
                  label="Plant ideal Room"
                  name="room"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="sadSigns"
                  label="Plant Sad Signs"
                  name="sadSigns"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lightRatio"
                  label="light Ratio"
                  name="lightRatio"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="waterRatio"
                  label="Water Ratio"
                  name="waterRatio"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="careRatio"
                  label="Care Ratio"
                  name="careRatio"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="stock"
                  label="Stock"
                  name="stock"
                />
              </Grid>

              
              <Grid item xs={12} sm={6}>
              
             
            
              </Grid>
              
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save Plant
            </Button>
            
          </Box>
        </Box>
        </Grid>

        <AdminPanelBlog/>
    </div>
  )
}

export default AdminPanel