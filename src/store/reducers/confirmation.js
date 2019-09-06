import {CLOSE_CONFIRMATION, OPEN_CONFIRMATION} from '../actions/actionTypes'

const initialState = {
    msg: null,
    open: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case OPEN_CONFIRMATION: 
            return{
                ...state,
                msg: action.payload.msg,
                open: true,
            }
        case CLOSE_CONFIRMATION: 
            return{
                ...state,
                msg: null,
                open: false,
            }
        default:
            return state
    }
}

export default reducer