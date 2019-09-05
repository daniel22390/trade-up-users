import {CLOSE_MODAL, OPEN_MODAL} from './actionTypes'

export const openModal = (msg, type) => {
    return{
        type: OPEN_MODAL,
        payload: {
            msg,
            type
        }
    }
}

export const closeModal = (msg, type) => {
    return{
        type: CLOSE_MODAL
    }
}