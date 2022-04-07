import React, { useEffect } from 'react'
import plantActions from '../../redux/actions/plantActions'
import {connect} from 'react-redux';
import {Link as LinkRouter} from "react-router-dom"

function ShopComponent(props) {

    const {allPlants:data , plants, loaded, } = props
    
    const {fetchPlants} = props

    useEffect(()=> { 

        !loaded && fetchPlants();
      },[])

      console.log(data)

      

      const dataClassSizeMedium = data.filter(item => item.size === "medium")
      console.log(dataClassSizeMedium)

      const dataClassSizeSmall = data.filter(item => item.size === "small")
      console.log(dataClassSizeSmall)

      const dataClassSizeLarge = data.filter(item => item.size === "large")
      console.log(dataClassSizeLarge)

      const dataClassLowCare = data.filter(item => item.care === "Low Care")
      console.log(dataClassLowCare)

      const dataClassMediumCare = data.filter(item => item.care === "Medium Care")
      console.log(dataClassMediumCare)

      const dataClassHighCare = data.filter(item => item.care === "High Care")
      console.log(dataClassHighCare)

      const dataClassLowLight = data.filter(item => item.light === "Low light")
      console.log(dataClassLowLight)

      const dataClassMediumLight = data.filter(item => item.light === "Medium light")
      console.log(dataClassMediumLight)

      const dataClassBrightLight = data.filter(item => item.light === "Bright light")
      console.log(dataClassBrightLight)

      const dataClassByRoomBathroom = data.filter(item => item.room === "bathroom")
      console.log(dataClassByRoomBathroom)

      const dataClassByRoomGarden = data.filter(item => item.room === "garden")
      console.log(dataClassByRoomGarden)

      const dataClassByRoomBedroom = data.filter(item => item.room === "bedroom")
      console.log(dataClassByRoomBedroom)

      const dataClassByRoomKitchen = data.filter(item => item.room === "kitchen")
      console.log(dataClassByRoomKitchen)

      const dataClassByRoomLivingroom = data.filter(item => item.room === "living room")
      console.log(dataClassByRoomLivingroom)

  return (
    <div>
      
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
    
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(ShopComponent)

