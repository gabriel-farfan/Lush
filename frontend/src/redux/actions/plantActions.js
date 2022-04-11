import axios from 'axios'

const plantActions = {
  fetchPlants: () => {
    return async (dispatch, getState) => {
      const res = await axios.get('http://localhost:4000/api/plants')
      // console.log(res.data)
      dispatch({ type: 'plant/fetch', payload: res.data.content.plants })
    }
  },
  fetchPlant: (id) => {

    return async (dispatch, getState) => {
      const res = await axios.get('http://localhost:4000/api/plants/' + id);

      try {
        dispatch({ type: 'plant/fetchOne', payload: res.data.content.plant })
      } catch (err) {
        console.log(err)
      }

    }
  },
  deletePlant: (id) => {
    return async (dispatch, getState) => {
      try {
        const res = await axios.delete('http://localhost:4000/api/plants/' + id)
        dispatch({ type: 'plant/delete', payload: res.data.response })
      } catch (err) {
        console.log(err)
      }
    }
  },
  filterPlants: (value) => {
    return (dispatch, getState) => {
      dispatch({ type: 'plants/filter', payload: value })
    }
  },
  savePlant: (plantData) => {
    console.log(plantData)
    return async (dispatch, getState) => {
      const respuesta = await axios.post(
        'http://localhost:4000/api/plants)', plantData)
      dispatch({
        type: 'plants/savePlant',
        payload: respuesta.data.response.plants,
      })
    }
  },
}

export default plantActions
