import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils';
import React from 'react';

export default function Footer() {
    return (
        <footer className="App-footer">
            <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </footer>
    );
}