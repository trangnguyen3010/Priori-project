import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="App">
            <div className="App-header">
                <h1>Login</h1>
                <label for="user_name"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="user_name" required />

                <label for="user_password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="user_password" required />
                <label>
                    <input type="checkbox" checked="checked" name="remember">Remember me</input>
                </label>
                <div className="login_line"></div>
                <button className="login_button" type="submit">Login</button>

                <button className="signup_button" type="submit">Sign Up</button>
            </div>
        </div>
    );
}

export default Login;