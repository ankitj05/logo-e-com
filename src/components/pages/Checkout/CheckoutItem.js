import React, { Fragment } from 'react';

const CheckoutItem = ({ cart: { img, qty, companyName, description } }) => {

    return (
        <div className='flex flex-col items-center border border-black rounded-3xl w-48 h-36 p-3 m-3'>
            <div>
                <img
                    src={img}
                    alt=''
                    className="w-20 h-20 object-contain"
                />
            </div>
            <div>
                <p><strong>Qty:</strong> {qty}</p>
                <p>
                    {companyName && (<Fragment>
                        <strong>Company Name: </strong> {companyName}
                    </Fragment>)}
                </p>

                <p>
                    {description && (<Fragment>
                        <strong>Description: </strong> {description}
                    </Fragment>)}
                </p>
            </div>
        </div>
    )

}

export default CheckoutItem;