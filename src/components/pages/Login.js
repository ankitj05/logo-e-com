import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../../context/user/userContext';
import NotificationContext from '../../context/notification/notificationContext';
import { Link } from 'react-router-dom';

const Login = () => {

    const [userDetail, setUserDetail] = useState({ 'name': '', 'username': '', 'password': '' });
    const userContext = useContext(UserContext);
    const notificationContext = useContext(NotificationContext);

    const onChangeHandler = e => {
        setUserDetail({ ...userDetail, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        userContext.searchUser(userDetail)
    }

    useEffect(() => {
        if (userContext.status) {
            let type = userContext.status ? 'success' : 'danger';
            let msg = userContext.status ? 'Login Success' : 'User not found'
            notificationContext.setNotification(msg, type);
        }
    }, [userContext.status])

    return (
        <div className='text-center'>
            <p className='lead'>Login Page</p>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={userDetail.name}
                    onChange={onChangeHandler}
                    autoComplete="off"
                />
                <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={userDetail.username}
                    onChange={onChangeHandler}
                    autoComplete="off"
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={userDetail.password}
                    autoComplete="off"
                    onChange={onChangeHandler}
                />
                <input type='submit' value='Login' className='btn btn-dark btn-sm my-1' ></input>
                <Link to='/signup' className='btn btn-dark btn-med my-1'>Sign Up</Link>
            </form>
        </div>
    )
}

export default Login