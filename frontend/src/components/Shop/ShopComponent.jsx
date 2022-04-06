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

      

      const dataFilter = data.filter(item => item.size === "medium")
      console.log(dataFilter)

      const dataFilter2 = data.filter(item => item.room === "office")
      console.log(dataFilter2)

    



      

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

