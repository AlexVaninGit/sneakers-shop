
const SET_ITEMS = 'SET_ITEMS'
const GET_FAVORITES = 'GET_FAVORITES'
const ADD_ITEMS = 'ADD_ITEMS'
const REMOVE__ITEM_TO_CART = 'REMOVE__ITEM_TO_CART'

const defaultState = {
    items: [],
    favorites: [],
    isAdded: false
}


export const itemsReducer = (state = defaultState, action) => {
    switch(action.type){

        case SET_ITEMS:
            return{
                ...state,
                items: action.paylod,
            }
        case GET_FAVORITES: 
            return{
                ...state,
                favorites: state.items.filter(item => item.isFavorites)
            }
        
        case ADD_ITEMS:
            return{
                ...state,
                isAdded: !state.isAdded
                
            }
        case REMOVE__ITEM_TO_CART:
            return{
                ...state,
                isAdded: !state.isAdded
            }
        

        default:
            return state
    }
}


export const setItems = (items) => ({type: SET_ITEMS, paylod: items})
export const addItems = () => ({type: ADD_ITEMS})
export const removeItem = () => ({type: REMOVE__ITEM_TO_CART})

export const getFavorites = () => ({type: GET_FAVORITES})