import React, { useState, useContext } from 'react';
import UserContext from '../../context/user/userContext';
import NotificationContext from '../../context/notification/notificationContext';
import { Link, Redirect } from 'react-router-dom';

const Signup = () => {

    const [userDetail, setUserDetail] = useState({ 'name': '', 'username': '', 'password': '' });

    const userContext = useContext(UserContext);
    const notificationContext = useContext(NotificationContext);

    const onChangeHandler = e => {
        setUserDetail({ ...userDetail, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
        checkUser();
    }

    const checkUser = () => {
        let index = userContext.savedUser.findIndex(user => user.username === userDetail.username)
        if (index == -1) {
            userContext.addUser(userDetail);
            setUserDetail({ 'name': '', 'username': '', 'password': '' })
            console.log('Successfully registered')
            notificationContext.setNotification('Successfully Registered', 'success');
        }
        else {
            setUserDetail({ 'name': '', 'username': '', 'password': '' })
            console.log('User already exist')
            notificationContext.setNotification('User Already Exist', 'danger');
        }
    }

    return (
        <div>
            {(userContext.savedUser.length > 1) ? (<Redirect to="/" />) : (<div className='text-center'>
                <p className='lead'>Sign Up Page</p>
                <form onSubmit={onSubmit}>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={userDetail.name}
                        onChange={onChangeHandler}
                        autoComplete="off" />
                    <input
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={userDetail.username}
                        onChange={onChangeHandler}
                        autoComplete="off" />
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={userDetail.password}
                        onChange={onChangeHandler}
                        autoComplete="off" />
                    <input type='submit' value='Signup' className='btn btn-dark btn-sm my-1'></input>
                    <Link to='/' className='btn btn-dark btn-med my-1'>Login</Link>
                </form>
            </div>)}
        </div>
    )
}

export default Signup;