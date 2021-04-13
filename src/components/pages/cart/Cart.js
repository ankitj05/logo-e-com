import React, { useContext } from 'react';
import LogoContext from '../../../context/logo/logoContext';
import UserContext from '../../../context/user/userContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {

    const logoContext = useContext(LogoContext);
    const userContext = useContext(UserContext);
    const { cart } = logoContext;

    return (
        <div className="m-3">

            {(cart.length > 0) ?
                (
                    <Link
                        to={`/checkout/${userContext.user.username}`}
                        className='rounded-xl px-2 py-1 bg-black text-white mt-3 outline-none float-right'>Checkout
                    </Link>
                ) : (
                    <div className='p-5 all-center'>
                        <img src='https://media.giphy.com/media/3o6Zt4j96fDG4XzO0w/giphy.gif' alt='Empty Cart' style={{ width: '300px' }} />
                        <p className='lead'>Please add items to your cart.</p>
                        <Link to='/' className='btn btn-dark my-1' style={{ float: 'right' }}>Back to Home</Link>
                    </div>
                )}
            <div className="flex flex-col items-center border border-black rounded-xl divide-y-2 divide-gray-300 divide-solid w-max">
                {cart.map(cart => (
                    <CartItem key={cart.name} cart={cart} />
                ))}
            </div>
        </div>
    )
}

export default Cart;