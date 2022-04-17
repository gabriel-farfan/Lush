import React, { useEffect } from "react";
import plantActions from "../../redux/actions/plantActions";
import { connect } from "react-redux";
import cartActions from "../../redux/actions/cartActions.js";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carousel.css";

// import './homeCardPlant.css'
import Button from '@mui/material/Button';
import { Link as LinkRouter } from "react-router-dom"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Swal from 'sweetalert2'



function CarouselComponent(props) {
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
  const { allPlants, loaded } = props;
  const { fetchPlants, addToCart } = props;

  useEffect(() => {
    !loaded && fetchPlants();
  }, []);

  const data = allPlants;

  const dataClassLowCare = data.filter(item => item.care === "Low Care")

  const responsive = {
    superLargeDesktop: {
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
    <div className="carouselWrapper">
      <h2>If you are a serial plant killer, these are for you!</h2>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={600}
        keyBoardControl={true}
        customTransition="all ease .2"
        transitionDuration={3000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >


        {dataClassLowCare.map((item) => {
          return (
            <div className="cardWrapperCarousel">

              <img className="imgCard" src={process.env.PUBLIC_URL + `/img/plants/${item.images}`} alt="" />
              <div className="cardTextContent">
                <h3>{item.name}</h3>
                <p>$ {item.price}</p>
                <Button size="small" variant="outlined">
                  <LinkRouter className="linkCard" to={`Details/${item._id}`}>DETAILS</LinkRouter>
                </Button>
                <Button size="small" onClick={() => { addToCart(item); alertsToasts('success', 'Plant succesfully added to your cart') }} variant="contained"><AddShoppingCartIcon /></Button>
              </div>
            </div>
          )

        })}
      </Carousel>
    </div>
  );
}

const mapDispatchToProps = {
  fetchPlants: plantActions.fetchPlants,
  addToCart: cartActions.addToCart,
};

export default connect(
  (state) => state.plantReducer,
  mapDispatchToProps
)(CarouselComponent);