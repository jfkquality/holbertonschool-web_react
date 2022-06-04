import React from 'react';
// import './Notifications.css';
import PropTypes from 'prop-types';

function NotificationItem(props) {
    const value = props.value;
    const type = props.type;
    const html = props.html;

    if (html !== undefined) {
        return (
            <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
        );
    }
    return (<li data-notification-type={type}>{value}</li>)
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({ __html: PropTypes.string })
}

NotificationItem.defaultProps = {
    type: 'default'
  }
  

export default NotificationItem;
