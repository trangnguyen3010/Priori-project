import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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
        document.title = 'Login - Priori';
    }, []);
    return (
        <div className="App">
            <div className="App-header">
                <h1 className="header pink">Priori</h1>
                <br />
                <br />
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
                    <button className="button" type="submit">Login</button>
                    <div className="login_line" />
                </form>
                <form className="directing">
                    <p type="submit">
                        <span>
                            Don't have an account? 
                            <a className="underline_bold" href={ROUTES.SIGN_UP}> Sign up</a>
                            .
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;