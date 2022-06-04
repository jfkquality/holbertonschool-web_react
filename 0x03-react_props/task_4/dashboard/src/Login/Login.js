import "./Login.css";
import React from 'react';

export default function Login() {
    return (
        <React.Fragment>
            <div className="">
                <p>Login to access the full dashboard</p>
                <div className="login">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                    <button>OK</button>
                </div>
            </div>
        </React.Fragment>
    );
}