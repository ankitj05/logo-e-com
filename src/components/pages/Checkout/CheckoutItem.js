import React, { Fragment } from 'react';

const CheckoutItem = ({ cart: { img, name, qty, companyName, description } }) => {

    return (
        <div className='card text-center'>
            <div>
                <img
                    src={img}
                    alt=''
                    style={{
                        maxWidth: '230px',
                        maxHeight: '95px',
                        width: 'auto',
                        height: 'auto'
                    }}
                />
            </div>
            <div>
                {/* <p><strong>Logo Name:</strong> {name}</p> */}
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