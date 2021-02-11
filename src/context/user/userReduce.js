import {
    ADD_USER,
    GET_USERS,
    LOGOUT
} from '../../types';

export default (state, action) => {
    switch (action.type) {

        case ADD_USER:
            return {
                ...state,
                savedUser: [...state.savedUser, action.payload],
                loading: false
            }

        case GET_USERS:
            let index = state.savedUser.findIndex(user => user.username === action.payload.username && user.password === action.payload.password)
            if (index != -1) {
                return {
                    ...state,
                    user: action.payload,
                    loading: false,
                    status: true
                }
            }
            else {
                return {
                    ...state,
                    loading: false,
                    status: false
                }
            }

        case LOGOUT:
            return {
                ...state,
                loading: false,
                status: false
            }

        default:
            return state
    }
}