import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART,
    CLEAR
} from '../../types';


export default (state, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            let item = state.logos.find(item => item.name == action.payload.name)
            if (item) item.added = true
            return {
                ...state,
                cart: [...state.cart, action.payload],
                logos: [...state.logos, item]
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
            let logo = state.logos.find(item => item.name == action.payload.name)
            if (logo) logo.added = false
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

