const initialState = {
    blogs:[],
    auxiliar:[], 
    
}

const blogReducer = (state = initialState, action)=>{

    switch(action.type){
        case 'blogs/fetch':
            return {
                ...state,
                blogs: action.payload,
                auxiliar: action.payload,
                
            }        

        default:
            return state
    }


}
export default blogReducer