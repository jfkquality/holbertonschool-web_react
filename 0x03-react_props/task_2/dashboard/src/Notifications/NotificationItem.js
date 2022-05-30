import React from 'react';
// import './Notifications.css';

function NotificationItem(props) {
    const value = props.value;
    const type = props.type;
    const html = props.html;

    if (html !== undefined) {
        return (
            <li data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }}></li>
        );
    }
    return (<li data-notification-type={type}>{value}</li>)
}


export default NotificationItem;
