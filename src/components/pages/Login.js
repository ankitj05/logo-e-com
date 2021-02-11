import React, { useState, useContext } from 'react';
import UserContext from '../../context/user/userContext';
import { Link } from 'react-router-dom';

const Login = () => {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const userContext = useContext(UserContext);

    const updateUsername = (e) => setUsername(e.target.value);

    const updatePassword = (e) => setPassword(e.target.value);

    const updateName = (e) => setName(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        userContext.searchUser({
            name: name,
            username: username,
            password: password
        })
        setName('');
        setUsername('');
        setPassword('');
    }

    return (
        <div className='text-center'>
            <p className='lead'>Login Page</p>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={name}
                    onChange={updateName}
                    autocomplete="off"
                />
                <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={username}
                    onChange={updateUsername}
                    autocomplete="off"
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={password}
                    autocomplete="off"
                    onChange={updatePassword}
                />
                <input type='submit' value='Login' className='btn btn-dark btn-sm my-1' ></input>
                <Link to='/signup' className='btn btn-dark btn-med my-1'>Sign Up</Link>
            </form>
        </div>
    )
}

export default Login