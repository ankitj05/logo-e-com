import React, { useContext, useState } from 'react';
import LogoContext from '../../context/logo/logoContext';

const LogoItem = ({ logo: { img, name } }) => {

    const logoContext = useContext(LogoContext);
    const [btnValue, setbtnValue] = useState('Add to Cart');

    const checkItem = () => {
        let item = {
            img: img,
            name: name,
            qty: 1,
            companyName: '',
            description: ''
        }
        let index = logoContext.cart.findIndex(el => el.name === item.name)
        if (index !== -1) {
            let updatedItem = {
                img: item.img,
                name: item.name,
                qty: item.qty + 1,
                companyName: '',
                description: ''
            }
            logoContext.updateItemCart(updatedItem);
            updateButtonValue();
            return;
        }
        logoContext.addToCart(item);
        updateButtonValue();
    }

    const updateButtonValue = () => {
        setbtnValue('Added');
        // setTimeout(() => {
        //     setbtnValue('Add to Cart');
        // }, 500);
    }

    return (
        <div className='card text-center'>
            <img
                src={img}
                alt=''
                style={{
                    maxWidth: '230px',
                    maxHeight: '95px',
                    width: 'auto',
                    height: 'auto'
                }} />
            {/* <h3>{name}</h3> */}
            <div>
                <input
                    type='submit'
                    className='btn btn-dark btn-sm my-1'
                    value={btnValue}
                    onClick={checkItem} />
            </div>
        </div>
    )
}

export default LogoItem;