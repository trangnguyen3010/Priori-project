import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { testToken } from '../service/tokenService';


export default function Login({token, setToken}) {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    // const [remember, setRemember] = useState(false);
    const [error, setError] = useState('');
    const history = useHistory();

    useEffect(() =>{
        document.title = 'Login - Priori';
        if (token){
            testToken(token.token_string)
            .then(data =>{
                if (data){
                    history.push(ROUTES.DASHBOARD);
                }
            });
        }
    },[]);

    const handleLogin = async (event ) => {
        event.preventDefault();
        var status;
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
                    console.log(data[0].msg);
                    setEmailAddress('');
                    setPassword('');
                    setError(data[0].msg);
                    localStorage.removeItem("token");
                }
                else{
                    // data will be the token upon success
                    console.log("return a token in Login");
                    localStorage.setItem("token", data);
                    setToken(data);
                    history.push(ROUTES.DASHBOARD);
                }
            })
    };

    return (
        <div className="App">
            <div className="App-header">
                <h1 className="header pink">Priori</h1>
                <br />
                {error && <p className="red">{error}</p>}
                <br />
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