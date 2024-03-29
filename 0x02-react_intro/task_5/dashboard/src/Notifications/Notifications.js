import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

export default function Notifications() {
  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
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
