import React, { useEffect } from 'react'
import './detailsPlant.css'
import Grid from '@mui/material/Grid'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux';
import plantActions from '../../redux/actions/plantActions.js'
import cartActions from '../../redux/actions/cartActions.js'
import { Link as LinkRouter } from 'react-router-dom'
import Swal from 'sweetalert2'

function DetailsPlant(props) {

    const alertsToasts = (icon, message) => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: `${icon}`,
            title: `${message}`
        })
    }

    const { id } = useParams()

    const { fetchPlant, loaded, addToCart } = props
    const { plant } = props

    useEffect(() => {

        fetchPlant(id)
    }, [])



    return !loaded ? (<h3>loading...</h3>) : plant === null ? (<h3>Plant not found</h3>) : (
        <div>
            <Box className="detailsWrapper">
                <Container >
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={6} elevation={6}>
                            <Box className="details-box">
                                <h3 className="h3Details">{plant.name}</h3>
                                <p className="pDetails">{plant.description}
                                </p>


                                {/* <p className="pDetails"> <span className="black"> Care: </span> <br/>Light: {plant.light}<br/> Water: {plant.waterRatio} </p> */}

                                <p className="pDetails">Sad Signs: {plant.sadSigns}</p>


                                <p className="pDetails">Price: $  {plant.price.toFixed(2)}</p>

                                {/* <p className="pDetails">Room: {plant.room}</p> */}

                                {/* <p className="pDetails">Type:{plant.type}</p> */}

                                <Button
                                    variant="outlined"
                                    color="primary"
                                >
                                    <LinkRouter className="cartComponentBtn" to="/Shop" >Keep Shopping</LinkRouter>
                                </Button>


                                <Button onClick={() => { addToCart(plant); alertsToasts('success', 'Plant succesfully added to your cart') }} variant="contained">ADD TO CART</Button>
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
                            <img className="imgDetails" src={process.env.PUBLIC_URL + `/img/plants/${plant.images}`} alt="plant" />
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
        loaded: state.plantReducer.loaded
    }
}

const mapDispatchToProps = {
    fetchPlants: plantActions.fetchPlants,
    fetchPlant: plantActions.fetchPlant,
    addToCart: cartActions.addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPlant)
