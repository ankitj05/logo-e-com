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
                <p className='text-center font-normal text-2xl pt-3'>Your order is placed.</p>
                <div className="flex flex-col justify-center mx-auto w-max">
                    <p className='text-xl font-medium p-3'>Order Details:</p>
                    <div className='flex justify-center mx-auto'>
                        {cart.map(cart => (
                            <CheckoutItem key={cart.name} cart={cart} />
                        ))}
                    </div>
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