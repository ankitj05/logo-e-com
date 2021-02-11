import React, { useState, useContext } from 'react';
import UserContext from '../../context/user/userContext';
import { Link, Redirect } from 'react-router-dom';

const Signup = () => {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const userContext = useContext(UserContext);

    const updateUsername = (e) => setUsername(e.target.value);

    const updatePassword = (e) => setPassword(e.target.value);

    const updateName = (e) => setName(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        let user = {
            name: name,
            username: username,
            password: password
        }
        checkUser(user);
    }

    const checkUser = (userDetail) => {
        let index = userContext.savedUser.findIndex(user => user.username === userDetail.username)
        if (index == -1) {
            userContext.addUser(userDetail);
            setName('');
            setUsername('');
            setPassword('');
            console.log('Successfully registered')
        }
        else {
            setName('');
            setUsername('');
            setPassword('');
            console.log('User already exist')
            return;
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
                        value={name}
                        onChange={updateName}
                        autocomplete="off" />
                    <input
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={username}
                        onChange={updateUsername}
                        autocomplete="off" />
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={password}
                        onChange={updatePassword}
                        autocomplete="off" />
                    <input type='submit' value='Signup' className='btn btn-dark btn-sm my-1'></input>
                    <Link to='/' className='btn btn-dark btn-med my-1'>Login</Link>
                </form>
            </div>)}
        </div>
    )
}

export default Signup;