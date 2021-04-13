import React, { useContext, Fragment } from 'react';
import UserContext from '../../context/user/userContext';
import Login from './Login';
import Logo from '../logo/Logo';

const Home = () => {
    const userContext = useContext(UserContext);

    return (
        <Fragment>
            {(userContext.status) ?
                (
                    <div>
                        <div className="px-2 text-xl capitalise">
                            <p>Welcome Back, {userContext.user.username} </p>
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