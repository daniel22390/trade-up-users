import { createStore, combineReducers } from 'redux'
import modalReducer from './reducers/modal'
import confirmationReducer from './reducers/confirmation'

const reducers = combineReducers({
    modal: modalReducer,
    confirmation: confirmationReducer
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig