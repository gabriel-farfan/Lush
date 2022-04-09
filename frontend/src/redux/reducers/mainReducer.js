import {combineReducers} from 'redux'

import plantReducer from './plantReducer'
import userReducer from './userReducer'
import {shoppingReducer} from './shoppingReducer'

const mainReducer = combineReducers({
    plantReducer,
    userReducer,
    shoppingReducer
})

export default mainReducer