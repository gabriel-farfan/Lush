const initialState = {
  allPlants: [],
  plants: [],
  filter: {},
  loaded: false,
  plant: {},
}

const plantReducer = (state = initialState, action) => {
  let filter = state.filter;
  const doFilter = plant => {
    if (('careRatio' in filter) && (plant.careRatio < filter.careRatio[0] || plant.careRatio > filter.careRatio[1])) {
      return false;
    }
    if (('lightRatio' in filter) && (plant.lightRatio < filter.lightRatio[0] || plant.lightRatio > filter.lightRatio[1])) {
      return false;
    }
    if (('waterRatio' in filter) && (plant.waterRatio < filter.waterRatio[0] || plant.waterRatio > filter.waterRatio[1])) {
      return false;
    }
    return true;
  }
  switch (action.type) {
    case 'plant/fetch': {
      const loaded = true
      const allPlants = action.payload.sort((left, right) => left._id.localeCompare(right._id));
      const plants = allPlants.filter(doFilter)
      return {
        ...state,
        loaded,
        plants,
        allPlants,
      }
    }
    case 'plant/fetchOne': {
      return {
        ...state,
        loaded: true,
        plant: action.payload
      }
    }
    case 'plant/delete': {
      const allPlants = action.payload.filter(
        (plant) => plant._id !== action.payload._id,
      )
      const plants = allPlants.filter(doFilter)
      return {
        ...state,
        plants,
        allPlants,
      }
    }
    case 'plants/savePlant': {
      const allPlants = [...state.allPlants, action.payload];
      const plants = allPlants.filter(doFilter)
      return {
        ...state,
        plants,
        allPlants: plants,
      }
    }
    case 'plants/filter': {
      filter = action.payload
      const plants = state.allPlants.filter(doFilter);
      return {
        ...state,
        filter,
        plants,
      }
    }
    default:
      return state
  }
}
export default plantReducer
