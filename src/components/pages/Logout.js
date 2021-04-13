import React, { useContext } from 'react';
import UserContext from '../../context/user/userContext';
import LogoContext from '../../context/logo/logoContext';
import { Redirect } from 'react-router-dom';

const Logout = () => {
    const userContext = useContext(UserContext);
    const logoContext = useContext(LogoContext);

    // const logoutUser = () => {
    //     console.log('Logout');
    // }
    logoContext.clear();
    userContext.logout();

    return (
        <div>
            {/* {logoutUser} */}
            {userContext.status ? (<Redirect to="/" />) : (null)}
        </div>
    )
}

export default Logout;