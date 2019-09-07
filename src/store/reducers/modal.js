import { CLOSE_MODAL, OPEN_MODAL } from '../actions/actionTypes'

const initialState = {
    msg: null,
    type: null,
    open: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                msg: action.payload.msg,
                type: action.payload.type,
                open: true,
            }
        case CLOSE_MODAL:
            return {
                ...state,
                msg: null,
                type: null,
                open: false,
            }
        default:
            return state
    }
}

export default reducer