const initialState = {
  allPlants: [],
  plants: [],
  filter: '',
  loaded: false,
  plant: {},
}

const plantReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'plant/fetch': {
      const loaded = true
      const allPlants = action.payload.sort((left, right) => left._id.localeCompare(right._id));
      const plants = allPlants.filter((plant) =>
        plant.name.toLowerCase().startsWith(state.filter),
      )
      return {
        ...state,
        loaded,
        plants,
        allPlants,
      }
    }
    case 'plant/fetchOne': {
      return{
        ...state,
        loaded: true,
        plant: action.payload
      }
    }
    case 'plant/delete': {
      const allPlants = action.payload.filter(
        (plant) => plant._id !== action.payload._id,
      )
      const plants = allPlants.filter((plant) =>
        plant.name.toLowerCase().startsWith(state.filter),
      )
      return {
        ...state,
        plants,
        allPlants,
      }
    }
    case 'plants/savePlant': {
      const allPlants = [...state.allPlants, action.payload];
      const plants = allPlants.filter((plant) =>
        plant.name.toLowerCase().startsWith(state.filter),
      )
      return {
        ...state,
        plants,
        allPlants: plants,
      }
    }
    case 'plants/filter': {
        const filter = action.payload.toLowerCase();
        const plants = state.allPlants.filter((plant) =>
          plant.name
            .toLowerCase()
            .startsWith(filter)
        )
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
