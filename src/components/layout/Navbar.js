import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/user/userContext';
import { GoHome } from 'react-icons/go'
import { FiShoppingCart } from 'react-icons/fi'
import logo from '../../logo.png';


const Navbar = () => {

    const userContext = useContext(UserContext);

    return (
        <div>
            {(userContext.status) ? (
                <div className="bg-blue-300 p-3">
                    <div className="pb-1">
                        <Link to="/" className="w-10 float-left outline-none">
                            <img src={logo}></img>
                        </Link>
                    </div>
                    <div className="flex flex-wrap justify-end items-center space-x-5">
                        <Link to="/"><GoHome size="2em" /></Link>
                        <Link to={`/cart/${userContext.user.username}`}><FiShoppingCart size="2em" /></Link>
                        <Link to="/logout" className="text-xl ">Logout</Link>
                    </div>
                </div>
            ) :
                (null)
            }
            {/* </ul> */}
        </div>
    )
}

export default Navbar;