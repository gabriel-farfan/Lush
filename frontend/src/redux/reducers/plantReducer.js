const initialState = {
  allPlants: [],
  plants: [],
  filter: {
    careRatio: [0, 100],
    lightRatio: [0, 100],
    waterRatio: [0, 100],
    minPrice: '',
    maxPrice: '',
    size: new Set(['small', 'medium', 'large']),
    room: new Set([
      'office',
      'kitchen',
      'bathroom',
      'living room',
      'bedroom',
      'garden',
    ])
  },
  loaded: false,
  plant: null
}

const plantReducer = (state = initialState, action) => {
  let filter = state.filter;
  const doFilter = plant => {
    if (plant.careRatio * 100 < filter.careRatio[0] || plant.careRatio * 100 > filter.careRatio[1]) {
      return false;
    }
    if (plant.lightRatio * 100 < filter.lightRatio[0] || plant.lightRatio * 100 > filter.lightRatio[1]) {
      return false;
    }
    if (plant.waterRatio * 100 < filter.waterRatio[0] || plant.waterRatio * 100 > filter.waterRatio[1]) {
      return false;
    }
    if (filter.minPrice !== '' && plant.price < filter.minPrice) {
      return false;
    }
    if (filter.maxPrice !== '' && plant.price > filter.maxPrice) {
      return false;
    }
    if (!filter.size.has(plant.size)) {
      return false;
    }
    if (!filter.room.has(plant.room)) {
      return false;
    }
    return true;
  }
  switch (action.type) {
    case 'plant/fetch': {
      const loaded = true
      const allPlants = action.payload.sort((left, right) => left._id.localeCompare(right._id));
      const plants = allPlants.filter(doFilter)
      console.log(allPlants, plants);
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
    case 'plant/unload': {
      return {
        ...state,
        loaded: false,
        allPlants: [],
        plants: [],
        plant: null
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
      console.log(plants);
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
