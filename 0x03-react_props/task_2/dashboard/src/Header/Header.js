import logo from '../assets/logo.jpg';
import "./Header.css";
import React from "react";

export default function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>School dashboard</h1>
        </header>
    );
}