import React, { useState, useContext } from 'react';
import LogoContext from '../../../context/logo/logoContext';

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
        <div className='card grid-2'>
            <div className='all-center'>
                <img
                    src={img}
                    alt=''
                    style={{
                        maxWidth: '230px',
                        maxHeight: '150px',
                        width: 'auto',
                        height: 'auto'
                    }}
                />
                {/* <p><strong>Logo Name:</strong> {name}</p> */}
            </div>
            <div>
                <form>
                    <input
                        type='text'
                        name='companyName'
                        placeholder='Company Name'
                        value={companyname}
                        onChange={updateCompanyName}
                        autocomplete="off"
                        style={{ width: '100%', margin: '1.2rem 0' }}
                    />
                    <input
                        type='text'
                        name='description'
                        placeholder='Description'
                        value={logoDescription}
                        onChange={updateDescription}
                        style={{ width: '100%', margin: '1.2rem 0' }}
                        autocomplete="off"
                    />
                </form>
                <div style={{ display: 'flex' }}>
                    <p className='btn my-1'><strong>Qty:</strong></p>
                    <input type='submit' value='Add' onClick={updateQty} className='btn btn-dark btn-sm my-1' />
                    <p className='btn my-1'> {qty}</p>
                    <input type='submit' value='Delete' onClick={updateQty} className='btn btn-dark btn-sm my-1' />
                </div>
                <input type='submit' value='Update details' className='btn btn-white btn-sm my-1' onClick={updateDetails} />
            </div>
        </div>
    )
}

export default CartItem;