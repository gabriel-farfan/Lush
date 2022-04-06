import {combineReducers} from 'redux'

import plantReducer from './plantReducer'
import userReducer from './userReducer'

const mainReducer = combineReducers({
    plantReducer,
    userReducer

})

export default mainReducer