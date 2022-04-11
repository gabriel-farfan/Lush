import {combineReducers} from 'redux'

import plantReducer from './plantReducer'
import userReducer from './userReducer'
import cartReducer from './cartReducer'

const mainReducer = combineReducers({
    plantReducer,
    userReducer,
    cartReducer

})

export default mainReducer