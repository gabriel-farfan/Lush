import {combineReducers} from 'redux'

import plantReducer from './plantReducer'
import userReducer from './userReducer'
import cartReducer from './cartReducer'
import blogReducer from './blogReducers'

const mainReducer = combineReducers({
    plantReducer,
    userReducer,
    cartReducer,
    blogReducer

})

export default mainReducer