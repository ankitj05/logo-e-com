import React, { useContext } from 'react'
import NotificationContext from '../context/notification/notificationContext';

function Notification() {

    const notificationContext = useContext(NotificationContext);
    const { msg, type } = notificationContext;

    return (
        (msg) ? (
            <div className={`alert alert-${type}`}>
                <i className='fas fa-info-circle' />{msg}
            </div>
        ) : null

    )
}

export default Notification
