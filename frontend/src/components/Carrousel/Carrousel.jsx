import React, { useEffect } from "react";
import plantActions from "../../redux/actions/plantActions";
import { connect } from "react-redux";
import cartActions from "../../redux/actions/cartActions.js";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carrousel.css";

// import './homeCardPlant.css'
import Button from '@mui/material/Button';
import {Link as LinkRouter} from "react-router-dom"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



function Carrousel(props) {
  const { allPlants, loaded } = props;
  const { fetchPlants, addToCart } = props;

  useEffect(() => {
    !loaded && fetchPlants();
  }, []);

  const data = allPlants;

const dataClassLowCare = data.filter(item => item.care === "Low Care")
  console.log(dataClassLowCare)

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1200 },
      items: 4,
    },
    desktop2: {
      breakpoint: { max: 1199, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1023, min: 650 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 649, min: 0 },
      items: 1,
    },
  };

  return (
    <>
    <h2>If you are a plants serial killer, these are for you!</h2>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={100}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={2000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >

        
        {dataClassLowCare.map((item) => {
          return (
            <div className="cardWrapperCarousel">
              
                <img className="imgCard" src={process.env.PUBLIC_URL+ `/img/plants/${item.images}`} alt="" />
                <div className="cardTextContent">
                    <h3>{item.name}</h3>
                    <p>$ {item.price}</p>
                    <Button size="small" variant="outlined">
                    <LinkRouter className="linkCard" to={`Details/${item._id}`}>DETAILS</LinkRouter>
                    </Button>
                    <Button size="small" onClick={() => addToCart(item)} variant="contained"><AddShoppingCartIcon/></Button>
                </div>
            </div>
            )
          // return (
          //   <div className="img-container">
          //     <img
          //       className="img-carousel"
          //       src={process.env.PUBLIC_URL + `/img/plants/${item.images}`}
          //       alt=""
          //     />
          //   </div>
          // );
        })}
      </Carousel>
    </>
  );
}

const mapDispatchToProps = {
  fetchPlants: plantActions.fetchPlants,
  addToCart: cartActions.addToCart,
};

export default connect(
  (state) => state.plantReducer,
  mapDispatchToProps
)(Carrousel);

// -------------------------

// <div>
//   {data.map((item) => {
//     return (
//       <img
//         className="carousel-img"
//         src={process.env.PUBLIC_URL + `/img/plants/${item.images}`}
//         alt=""
//       />
//     );
//   })}
// </div>
