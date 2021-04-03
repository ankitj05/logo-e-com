import {
    SET_NOTIFICATION,
    REMOVE_NOTIFICATION
} from '../../types'

const notificationReducer = (state, action) => {
    switch (action.type) {
        case SET_NOTIFICATION:
            return {
                ...state,
                msg: action.payload.msg,
                type: action.payload.type
            }

        case REMOVE_NOTIFICATION:
            return {
                ...state,
                msg: ''
            }

        default:
            return {
                ...state
            }
    }
}

export default notificationReducer