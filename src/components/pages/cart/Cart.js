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
        <div>
            {cart.map(cart => (
                <CartItem key={cart.name} cart={cart} />
            ))}
            {(cart.length > 0) ?
                (
                    <Link to={`/checkout/${userContext.user.name}`} className='btn btn-dark my-1' style={{ float: 'right' }}>Checkout</Link>
                ) : (
                    <div className='p-5 all-center'>
                        <img src='https://media.giphy.com/media/3o6Zt4j96fDG4XzO0w/giphy.gif' alt='Empty Cart' style={{ width: '300px' }} />
                        <p className='lead'>Please add items to your cart.</p>
                        <Link to='/' className='btn btn-dark my-1' style={{ float: 'right' }}>Back to Home</Link>
                    </div>
                )}
        </div>
    )
}

export default Cart;