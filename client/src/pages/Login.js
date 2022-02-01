import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import * as ROUTES from '../constants/routes';


function Login() {
    const history = useHistory();
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
          //// post /auth from the server
          history.push(ROUTES.DASHBOARD);
        } catch (error) {
          setEmailAddress('');
          setPassword('');
          setError(error.message);
        }
      };

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        document.title = 'Login - Instagram';
    }, []);
    return (
        <div className="App">
            <div className="App-header">
                <h1>Login</h1>
                {error && <p className="red">{error}</p>}
                <form onSubmit={handleLogin} method="POST">
                    <label><b>Email</b></label>
                    <input 
                        type="text"
                        placeholder="Enter Email"
                        value={emailAddress}
                        onChange={({ target }) => setEmailAddress(target.value)}
                        required />

                    <label><b>Password</b></label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                        required />

                    {/* <label>
                        <input
                        type="checkbox"
                        checked="checked"
                        id = "box"
                        name="remember"
                        value={remember}
                        onChange={({ target }) => setRemember(target.value)}
                        >Remember me</input>
                    </label> */}

                    <div className="login_line"></div>
                    <button className="button" type="submit">Login</button>
                </form>
                <form action ={ROUTES.SIGN_UP}>
                <button className="button" type="submit">Sign Up</button>
                </form>

            </div>
        </div>
    );
}

export default Login;