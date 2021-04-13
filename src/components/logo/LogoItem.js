import React, { useContext } from 'react';
import LogoContext from '../../context/logo/logoContext';

const LogoItem = ({ logo: { img, name, added } }) => {

    const logoContext = useContext(LogoContext);

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
            return;
        }
        logoContext.addToCart(item);
    }

    return (
        <div className='flex flex-col items-center border border-black rounded-3xl w-48 h-48 p-3 m-3'>
            <img
                className="w-20 h-20 object-contain"
                src={img}
                alt=''
            />
            <h3>{name}</h3>
            <div>
                <input
                    type='submit'
                    className='border rounded-2xl px-2 py-1 mt-4 cursor-pointer outline-none bg-blue-300'
                    value={added ? 'Added' : 'Add to cart'}
                    onClick={checkItem} />
            </div>
        </div>
    )
}

export default LogoItem;