const initialState = {
    blogs:[],
    auxiliar:[], // aca esdonde seteo mis datos iniciales en todos lados
    
}

const blogReducer = (state = initialState, action)=>{

    switch(action.type){
        case 'blogs/fetch':

            return {
                ...state,
                blogs: action.payload,
                auxiliar: action.payload,
                
            }        

        // case 'cargarProducto':
        //     let cities = [...state.cities]
        //     cities.push(action.payload)
        //     return{
        //         ...state,
        //         cities, 
        //         auxiliar: [...cities]
        //     }

        
        default:
            return state
    }


}
export default blogReducer