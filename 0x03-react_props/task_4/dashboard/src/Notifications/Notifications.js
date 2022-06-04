import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

export default function Notifications(props) {
  return (
    <div className='notifications-wrapper'>
      <div className='menuItem'>Your notifications</div>
      {props.displayDrawer && (
        <div className='Notifications'>
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
          </ul>
          <button
            aria-label="Close"
            style={{
              position: 'absolute',
              top: 15,
              right: 10,
              // backgroundColor: 'white',
              visibility: 'hidden',
              border: 'none',
              // outline: 'none',
              cursor: 'pointer',
              outline: 'none',
            }}
            onClick={() => console.log('Close button has been clicked')}>
            <img src={closeIcon} alt="close-icon"
              style={{
                // marginTop: 20,
                height: 15,
                visibility: 'visible',
              }} />
          </button>
        </div>
      )}
    </div>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool
}

Notifications.defaultProps = {
  displayDrawer: false
}
