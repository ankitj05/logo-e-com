import React, { useContext, Fragment } from 'react';
import LogoContext from '../../../context/logo/logoContext';
import UserContext from '../../../context/user/userContext';
import CheckoutItem from './CheckoutItem';
import done from './checkout.gif';

const Checkout = () => {
    const logoContext = useContext(LogoContext);
    const userContext = useContext(UserContext);
    const { cart } = logoContext;

    if (userContext.status) {
        return (
            <Fragment>
                <img src={done} alt='Loading...' style={{ width: '200px', margin: 'auto', display: 'block' }}></img>
                <p className='text-center lead'>Your order is placed.</p>
                <p className='lead'><strong>Order Details:</strong></p>
                <div className='grid-2'>
                    {cart.map(cart => (
                        <CheckoutItem key={cart.name} cart={cart} />
                    ))}
                </div>
            </Fragment>
        )
    }
    else {
        return (
            <Fragment>
                <p>Please Login</p>
                <a href='/' className='btn btn-dark btn-sm my-1'>Login</a>
            </Fragment>
        )
    }

}

export default Checkout;