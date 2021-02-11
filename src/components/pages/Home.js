import React, { useContext, Fragment } from 'react';
import UserContext from '../../context/user/userContext';
import Login from './Login';
import Logo from '../logo/Logo';
import { Link } from 'react-router-dom';

const Home = () => {
    const userContext = useContext(UserContext);

    return (
        <Fragment>
            {(userContext.status) ?
                (
                    <div>
                        <div>
                            <p style={{ display: 'inline' }}>Welcome Back, {userContext.user.name} </p>
                            {/* <Link to={`/cart/${userContext.user.name}`} style={{ float: 'right', position: 'fixed' }} className='btn btn-dark btn-med'>Go To Cart</Link> */}
                        </div>
                        <Logo />
                    </div>
                ) :
                (
                    <Login />
                )
            }
        </Fragment >
    )
}

export default Home;