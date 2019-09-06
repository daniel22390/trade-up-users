import {CLOSE_CONFIRMATION, OPEN_CONFIRMATION} from './actionTypes'

export const openConfirmation = (msg) => {
    return{
        type: OPEN_CONFIRMATION,
        payload: {
            msg
        }
    }
}

export const closeConfirmation = (msg) => {
    return{
        type: CLOSE_CONFIRMATION
    }
}