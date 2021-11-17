import axios from "axios";
import { addItems, removeItem, setItems } from "../store/itemsReducer";


export const getItems = () => {
    return async dispatch => {
        const resItems = await axios.get('https://61884cf4057b9b00177f9c2b.mockapi.io/items')
        dispatch(setItems(resItems.data))
    }
}

export const addItem = (obj, id) => {
    return async dispatch => {
        await axios.put(`https://61884cf4057b9b00177f9c2b.mockapi.io/items/${id}`, {...obj, isAdded: true})
        dispatch(addItems())
    }
}

export const removeItemToCart = (obj, id) => {
    return async dispatch => {
        await axios.put(`https://61884cf4057b9b00177f9c2b.mockapi.io/items/${id}`, {...obj, isAdded: false})
        dispatch(removeItem())
    }
}