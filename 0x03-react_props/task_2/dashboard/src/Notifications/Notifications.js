import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

export default function Notifications() {
  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
          <NotificationItem type="urgent" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem type="urgent" html={getLatestNotification()} />
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
            height: 15,
            visibility: 'visible',
          }} />
      </button>
    </div>
  );
}
