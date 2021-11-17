import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { itemsReducer } from './itemsReducer'


const rootReducer = combineReducers({
    items: itemsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))