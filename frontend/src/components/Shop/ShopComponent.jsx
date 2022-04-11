import React, { useEffect, useState } from 'react'
import plantActions from '../../redux/actions/plantActions'
import { connect } from 'react-redux';
import { Link as LinkRouter } from "react-router-dom"
import './shop.css'
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import cartActions from '../../redux/actions/cartActions.js'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';
import Slider from '@mui/material/Slider';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LightModeIcon from '@mui/icons-material/LightMode';
import WaterIcon from '@mui/icons-material/Water';

function ShopComponent(props) {

  const { allPlants: data, plants, loaded, filter } = props

  const { fetchPlants, addToCart, filterPlants } = props

  const [careRatio, setCareRatio] = useState([0, 100]);
  const [lightRatio, setLightRatio] = useState([0, 100]);
  const [waterRatio, setWaterRatio] = useState([0, 100]);

  useEffect(() => {
    !loaded && fetchPlants();
  }, [])

  const careMarks = [
    {
      value: 0,
      label: 'Easy',
    },
    {
      value: 50,
      label: 'No Fuss',
    },
    {
      value: 100,
      label: 'Extra Love',
    },
  ];

  const lightAndWaterMarks = [
    {
      value: 0,
      label: 'Low',
    },
    {
      value: 50,
      label: 'Medium',
    },
    {
      value: 100,
      label: 'High',
    },
  ];

  // const dataClassSizeMedium = data.filter(item => item.size === "medium")
  // // console.log(dataClassSizeMedium)

  // const dataClassSizeSmall = data.filter(item => item.size === "small")
  // // console.log(dataClassSizeSmall)

  // const dataClassSizeLarge = data.filter(item => item.size === "large")
  // // console.log(dataClassSizeLarge)

  // const dataClassLowCare = data.filter(item => item.care === "Low Care")
  // // console.log(dataClassLowCare)

  // const dataClassMediumCare = data.filter(item => item.care === "Medium Care")
  // // console.log(dataClassMediumCare)

  // const dataClassHighCare = data.filter(item => item.care === "High Care")
  // // console.log(dataClassHighCare)

  // const dataClassLowLight = data.filter(item => item.light === "Low light")
  // // console.log(dataClassLowLight)

  // const dataClassMediumLight = data.filter(item => item.light === "Medium light")
  // // console.log(dataClassMediumLight)

  // const dataClassBrightLight = data.filter(item => item.light === "Bright light")
  // // console.log(dataClassBrightLight)

  // const dataClassByRoomBathroom = data.filter(item => item.room === "bathroom")
  // // console.log(dataClassByRoomBathroom)

  // const dataClassByRoomGarden = data.filter(item => item.room === "garden")
  // // console.log(dataClassByRoomGarden)

  // const dataClassByRoomBedroom = data.filter(item => item.room === "bedroom")
  // // console.log(dataClassByRoomBedroom)

  // const dataClassByRoomKitchen = data.filter(item => item.room === "kitchen")
  // // console.log(dataClassByRoomKitchen)

  // const dataClassByRoomLivingroom = data.filter(item => item.room === "living room")
  // // console.log(dataClassByRoomLivingroom)

  return (
    <div className="wrapperShop">


      <Accordion
        sx={{ width: 1100 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Filters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container columns={{ md: 12 }}>
            <Grid item md={4}>
              <List dense={false}>
                <ListItem>
                  <ListItemIcon>
                    <FavoriteIcon color="error" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Care"
                    secondary={
                      <Slider
                        color="error"
                        marks={careMarks}
                        sx={{ width: 200 }}
                        value={careRatio}
                        valueLabelDisplay="auto"
                        valueLabelFormat={value => value + '%'}
                        onChange={event => {
                          setCareRatio(event.target.value);
                          filterPlants({
                            ...filter,
                            careRatio: event.target.value.map(value => value / 100)
                          })
                        }}
                      />
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LightModeIcon color="warning" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Light"
                    secondary={
                      <Slider
                        color="warning"
                        marks={lightAndWaterMarks}
                        sx={{ width: 200 }}
                        value={lightRatio}
                        valueLabelDisplay="auto"
                        valueLabelFormat={value => value + '%'}
                        onChange={event => {
                          setLightRatio(event.target.value);
                          filterPlants({
                            ...filter,
                            lightRatio: event.target.value.map(value => value / 100)
                          })
                        }}
                      />
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WaterIcon color="info" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Water"
                    secondary={
                      <Slider
                        color="info"
                        marks={lightAndWaterMarks}
                        sx={{ width: 200 }}
                        value={waterRatio}
                        valueLabelDisplay="auto"
                        valueLabelFormat={value => value + '%'}
                        onChange={event => {
                          setWaterRatio(event.target.value);
                          filterPlants({
                            ...filter,
                            waterRatio: event.target.value.map(value => value / 100)
                          })
                        }}
                      />
                    }
                  />
                </ListItem>

              </List>

            </Grid>
            <Grid item md={4}>

            </Grid>
            <Grid item md={4}>

            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>









      <div className="wrapperMediumSize">
        {plants.map((item) => {
          return (
            <div className="cardWrapper">
              <img className="imgCard" src={process.env.PUBLIC_URL + `/img/plants/${item.images}`} alt="" />
              <div className="cardTextContent">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <Button variant="text">
                  <LinkRouter className="linkCard" to={`/Details/${item._id}`}>DETAILS</LinkRouter>
                </Button>
                <Button size="small" onClick={() => addToCart(item)} variant="contained"><AddShoppingCartIcon /></Button>
              </div>
            </div>
          )
        })}
      </div>

      {/* <h3 className="h3Shop">Medium Size Plants</h3>
      <div className="wrapperMediumSize">
        {dataClassSizeMedium.map((item) => {
          return (
            <div className="cardWrapper">
              <img className="imgCard" src={process.env.PUBLIC_URL + `/img/plants/${item.images}`} alt="" />
              <div className="cardTextContent">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <Button variant="text">
                  <LinkRouter className="linkCard" to={`/Details/${item._id}`}>DETAILS</LinkRouter>
                </Button>
                <Button size="small" onClick={() => addToCart(item)} variant="contained"><AddShoppingCartIcon /></Button>
              </div>
            </div>
          )
        })}
      </div>

      <h3 className="h3Shop">Small Plants</h3>
      <div className="wrapperMediumSize">
        {dataClassSizeSmall.map((item) => {
          return (
            <div className="cardWrapper">
              <img className="imgCard" src={process.env.PUBLIC_URL + `/img/plants/${item.images}`} alt="" />
              <div className="cardTextContent">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <Button variant="text">
                  <LinkRouter className="linkCard" to={`/Details/${item._id}`}>DETAILS</LinkRouter>
                </Button>
                <Button size="small" onClick={() => addToCart(item)} variant="contained"><AddShoppingCartIcon /></Button>
              </div>
            </div>
          )
        })}
      </div>

      <h3 className="h3Shop">Large Plants</h3>
      <div className="wrapperMediumSize">
        {dataClassSizeLarge.map((item) => {
          return (
            <div className="cardWrapper">
              <img className="imgCard" src={process.env.PUBLIC_URL + `/img/plants/${item.images}`} alt="" />
              <div className="cardTextContent">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <Button variant="text">
                  <LinkRouter className="linkCard" to={`/Details/${item._id}`}>DETAILS</LinkRouter>
                </Button>
                <Button size="small" onClick={() => addToCart(item)} variant="contained"><AddShoppingCartIcon /></Button>
              </div>
            </div>
          )
        })}
      </div>

      <h3 className="h3Shop">If you are a serial plant killer, select one here..</h3>
      <div className="wrapperMediumSize">
        {dataClassLowCare.map((item) => {
          return (
            <div className="cardWrapper">
              <img className="imgCard" src={process.env.PUBLIC_URL + `/img/plants/${item.images}`} alt="" />
              <div className="cardTextContent">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <Button variant="text">
                  <LinkRouter className="linkCard" to={`/Details/${item._id}`}>DETAILS</LinkRouter>
                </Button>
                <Button size="small" onClick={() => addToCart(item)} variant="contained"><AddShoppingCartIcon /></Button>
              </div>
            </div>
          )
        })}
      </div> */}

    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    allPlants: state.plantReducer.allPlants,
    plants: state.plantReducer.plants,
    plant: state.plantReducer.plant,
    loaded: state.plantReducer.loaded,
    filter: state.plantReducer.filter
  }
}

const mapDispatchToProps = {
  fetchPlants: plantActions.fetchPlants,
  addToCart: cartActions.addToCart,
  filterPlants: plantActions.filterPlants
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopComponent)

