import {createStore, combineReducers} from 'redux'
import modalReducer from './reducers/modal'

const reducers = combineReducers({
    modal: modalReducer
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig