import React, { useContext, Fragment } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/user/userContext';

const Navbar = ({ icon, title }) => {

    const userContext = useContext(UserContext);

    return (
        <div className='navbar bg-primary'>
            <h1>
                <i className={icon}></i>{title}
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {(userContext.status) ? (
                    <Fragment>
                        <li>
                            <Link to={`/cart/${userContext.user.name}`}>Cart</Link>
                        </li>
                        <li>
                            <Link to="/logout">Logout</Link>
                        </li>
                    </Fragment>
                ) :
                    (
                        <Fragment></Fragment>
                    )
                }
            </ul>
        </div>
    )
}

export default Navbar;