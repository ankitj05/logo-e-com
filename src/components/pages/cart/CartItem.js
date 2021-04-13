import React, { useState, useContext } from 'react';
import LogoContext from '../../../context/logo/logoContext';
import { IoIosAdd, IoIosRemove } from 'react-icons/io'

const CartItem = ({ cart: { img, name, qty } }) => {
    const [companyname, setCompanyName] = useState('');
    const [logoDescription, setLogoDescription] = useState('');

    const logoContext = useContext(LogoContext);

    const updateDetails = () => {
        let updatedItem = {
            img: img,
            name: name,
            qty: qty,
            companyName: companyname,
            description: logoDescription
        }
        logoContext.updateItemCart(updatedItem);
    }

    const updateCompanyName = (e) => {
        setCompanyName(e.target.value);
    }

    const updateDescription = (e) => {
        setLogoDescription(e.target.value);
    }

    const updateQty = (e) => {
        if (e.target.value === 'Add') {
            let updatedItem = {
                img: img,
                name: name,
                qty: qty + 1,
                companyName: companyname,
                description: logoDescription
            }
            logoContext.updateItemCart(updatedItem);
        }
        else if (e.target.value === 'Delete') {
            let updatedItem = {
                img: img,
                name: name,
                qty: qty - 1,
                companyName: companyname,
                description: logoDescription
            }
            if (updatedItem.qty === 0) {
                //remove the item from cart.
                logoContext.removeItemCart(updatedItem);
                return;
            }
            logoContext.updateItemCart(updatedItem);
        }
    }

    return (
        <div className='grid grid-cols-2 gap-1 p-4'>
            <div className='all-center'>
                <img
                    src={img}
                    alt=''
                    className="w-40 h-40 object-contain"
                />
            </div>
            <div>
                <form className="flex flex-col items-center space-y-4">
                    <input
                        type='text'
                        name='companyName'
                        placeholder='Company Name'
                        value={companyname}
                        onChange={updateCompanyName}
                        autoComplete="off"
                        className="border rounded-xl border-gray-400 px-4 h-8 outline-none"
                    />
                    <input
                        type='text'
                        name='description'
                        placeholder='Description'
                        value={logoDescription}
                        onChange={updateDescription}
                        className="border rounded-xl border-gray-400 px-4 h-28 outline-none"
                        autoComplete="off"
                    />
                </form>
                <div className="flex">
                    <p className='p-2 font-medium'>Qty:</p>
                    <input type='submit' value='Add' onClick={updateQty} className='cursor-pointer my-1 outline-none' />
                    <p className='p-2'> {qty}</p>
                    <input type='submit' value='Delete' onClick={updateQty} className='cursor-pointer my-1 outline-none' />
                </div>
                <input type='submit' value='Update details' className='border bg-blue-300 rounded-2xl px-2 py-1 outline-none cursor-pointer' onClick={updateDetails} />
            </div>
        </div>
    )
}

export default CartItem;