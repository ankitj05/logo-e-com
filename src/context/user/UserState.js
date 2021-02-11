import React, { useReducer } from 'react';
import UserContext from '../../context/user/userContext';
import UserReducer from '../../context/user/userReduce';
import {
    ADD_USER,
    GET_USERS,
    LOGOUT
} from '../../types';

const UserState = (props) => {
    const initialState = {
        savedUser: [{ username: 'admin', password: 'admin123' }],
        user: {},
        status: false
    }

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const searchUser = (loginDetails) => {
        dispatch({
            type: GET_USERS,
            payload: loginDetails
        })
    }

    const addUser = (signupDetails) => {
        dispatch({
            type: ADD_USER,
            payload: signupDetails
        })
    }

    const logout = () => dispatch({ type: LOGOUT });


    return <UserContext.Provider
        value={{
            savedUser: state.savedUser,
            user: state.user,
            status: state.status,
            searchUser,
            addUser,
            logout
        }}
    >
        {props.children}
    </UserContext.Provider>

}

export default UserState;