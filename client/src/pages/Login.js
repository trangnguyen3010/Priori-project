import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';



function Login() {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState('');

    const history = useHistory();
    const handleLogin = async (event) => {
        event.preventDefault();
        var status;
        try {
            history.push(ROUTES.DASHBOARD);
            fetch("/login", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email: emailAddress, password: password})
            })
            .then(res => {
                status = res.status
                return res.json();
            })
            .then(data => {
                if(status !== 200){
                    console.log("error occured!");
                    setError(data);
                }
                else{
                    // data will be the token upon success
                    console.log(data)
                }
            })
        } catch (error) {
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        }
    };



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