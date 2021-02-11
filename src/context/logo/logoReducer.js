import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART,
    CLEAR
} from '../../types';


export default (state, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }

        case UPDATE_CART:
            let newCart = state.cart.map(item => (item.name === action.payload.name) ? { ...action.payload } : item);
            return {
                ...state,
                cart: [...newCart]
            }

        case REMOVE_FROM_CART:
            let index = state.cart.findIndex(item => item.name === action.payload.name);
            if (index !== -1) {
                state.cart.splice(index, 1);
            }
            return {
                ...state,
                cart: [...state.cart]
            }

        case CLEAR:
            return {
                ...state,
                cart: []
            }

        default:
            return {
                ...state
            }
    }
}

