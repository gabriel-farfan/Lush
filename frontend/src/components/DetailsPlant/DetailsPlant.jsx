import React, { useEffect } from 'react'
import './detailsPlant.css'
import Grid from '@mui/material/Grid'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button } from '@mui/material';
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux';
import plantActions from '../../redux/actions/plantActions.js'

function DetailsPlant(props) {

    const {id} = useParams()
    
    const { fetchPlant, fetchPlants } = props
    const { plant } = props

    useEffect(()=> { 
        
        fetchPlant(id)
        fetchPlants()
      },[])

    console.log(plant)


    

    
  return (

    <div>
        <Box className="detailsWrapper">
            <Container >
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6} elevation={6}>
                        <Box className="details-box">
                            <h3 className="h3Details">{plant.name}</h3>
                            <p className="pDetails">{plant.description}
                            </p>

                            <p className="pDetails">Price: {plant.price}</p>

                            <p className="pDetails"> <span class="black"> Care: </span> <br/>Light: {plant.light}<br/> Water: {plant.waterRatio} </p>

                            <p className="pDetails">Sad Signs: {plant.sadSigns}</p>

                            

                            <p className="pDetails">Room: {plant.room}</p>

                            <p className="pDetails">Type:{plant.type}</p>



                            <Button variant="outlined">BUY NOW</Button>
                        </Box>
                    </Grid>
                    {/*     <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        elevation={6}
                        sx={{
                        // backgroundImage: 'url(../../public/img/herotest.jpg)',
                        // backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        }}
                        /> */}
                    <Grid item xs={12} sm={6} md={6}>
                        <img className="imgDetails" src={process.env.PUBLIC_URL+ `/img/plants/${plant.images}`} alt="plant" />
                    </Grid>
                </Grid>
            </Container>

        </Box>

    </div>

  )
}

const mapStateToProps = (state) => {
    return {
        allPlants: state.plantReducer.allPlants,
        plants: state.plantReducer.plants,
        plant: state.plantReducer.plant,

        }
  }
  
  const mapDispatchToProps = {
    fetchPlants: plantActions.fetchPlants,
    fetchPlant: plantActions.fetchPlant,
    
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(DetailsPlant)

// export default DetailsPlant