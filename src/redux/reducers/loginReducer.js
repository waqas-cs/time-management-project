const initialState={
    postItems:[],
    loading: false,
    error:null,
}

const loginReducer=(state=initialState, action)=>{
    switch(action.type){
        case "FETCH_LOGIN_REQUEST":
            return{
                ...state, 
                loading:true,
                error:null,
            }
        case "FETCH_LOGIN_SUCCESS":
            return{
                ...state,
                loading:false,
                postItems:action.payload
            }
        case "FETCH_LOGIN_FAILURE":
            return{
                ...state,
                loading:false,
                error:action.payload
            } 
            case "FETCH_LOGOUT_REQUEST":
                return{
                    ...state,
                    loading:false,
                    postItems:[]
                }
                
        default :
        return state;       
    }
}

export default loginReducer;