import React, { useReducer } from 'react'
import notificationReducer from './notificationReducer';
import notificationContext from './notificationContext';
import {
    SET_NOTIFICATION,
    REMOVE_NOTIFICATION
} from '../../types'

const NotificationState = (props) => {

    const initialState = {
        msg: '',
        type: ''
    }

    const [state, dispatch] = useReducer(notificationReducer, initialState);

    const setNotification = (msg, type) => {
        dispatch({
            type: SET_NOTIFICATION,
            payload: {
                msg,
                type
            }
        })

        setTimeout(() => dispatch({ type: REMOVE_NOTIFICATION }), 3000)
    }

    return <notificationContext.Provider
        value={{
            msg: state.msg,
            type: state.type,
            setNotification
        }}>
        {props.children}
    </notificationContext.Provider>
}

export default NotificationState
