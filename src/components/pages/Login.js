import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../../context/user/userContext';
import NotificationContext from '../../context/notification/notificationContext';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';

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
        <div className="my-10 border border-transparent w-1/3 m-auto select-none">
            <img src={logo} className="w-20 mb-2 fill-current text-blue-400"></img>
            <p className='text-center pb-2 text-2xl antialiased font-normal tracking-wide text-opacity-80'>Sign-In to eCom</p>
            <form
                onSubmit={onSubmit}
                className="flex justify-center item-center flex-col 
                min-w-max max-w-max mx-auto p-3 h-3/5">
                <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={userDetail.username}
                    onChange={onChangeHandler}
                    autoComplete="off"
                    className="border border-black rounded-2xl px-3 py-1 placeholder-gray-500 outline-none mb-3"
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={userDetail.password}
                    autoComplete="off"
                    onChange={onChangeHandler}
                    className="border border-black rounded-2xl px-3 py-1 placeholder-gray-500 outline-none mb-3"
                />
                <input
                    type='submit'
                    value='Login'
                    className='border rounded-3xl outline-none bg-blue-400 text-2xl max-w-max px-6 py-0.5 mx-auto cursor-pointer'
                />
            </form>
            <div className="flex justify-center mt-3">
                <span className="pr-2">Not a User ?</span>
                <Link to='/signup' className="text-blue-400 underline">Sign Up</Link>
            </div>
        </div>
    )
}

export default Login