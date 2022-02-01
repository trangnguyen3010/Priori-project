import React from "react";
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import * as ROUTES from '../constants/routes';

function Signup() {
    const history = useHistory();
    const handleSignup = async (event) => {
        event.preventDefault();
        try {
          //// post /auth from the server
          history.push(ROUTES.DASHBOARD);
        } catch (error) {
            setName('');
            setUni('');
            setMajor('');
            setStudentnumber('');
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        }
      };
      const [emailAddress, setEmailAddress] = useState('');
      const [password, setPassword] = useState('');
      const [name, setName] = useState('');
      const [uni, setUni] = useState('');
      const [major, setMajor] = useState('');
      const [studentnumber, setStudentnumber] = useState('');
      const [remember, setRemember] = useState(false);
      const [error, setError] = useState('');

      useEffect(() => {
        document.title = 'Login - Instagram';
    }, []);
     return (
    <div class="App">
        <div class="App-header">
            <h1>Sign up</h1>
            {error && <p className="red">{error}</p>}
            <form onSubmit={handleSignup} method="POST"> 
                <label for="student_name"><b>What's your name?</b></label>
                    <input 
                        type="text" 
                        placeholder="Enter name" 
                        value = {name}
                        onChange = {({target}) => setName(target.value)}
                        required/>
            
                <label for="studnet_university"><b>Where do you go for university?</b></label>
                    <input 
                        type="text" 
                        placeholder="Enter university name" 
                        value = {uni}
                        onChange = {({target}) => setUni(target.value)} 
                        required/>
                
                <label for="studnet_major"><b>What's your major?</b></label>
                    <input 
                        type="text" 
                        placeholder="Enter your major"  
                        value = {major}
                        onChange = {({target}) => setMajor(target.value)}
                        required/>
                
                <label for="student_number"><b>What's your student number?</b></label>
                    <input 
                        type="text" 
                        placeholder="Enter your student number" 
                        value = {studentnumber}
                        onChange = {({target}) => setStudentnumber(target.value)}
                        required/>

                <label for="student_username"><b>What's your email?</b></label>
                    <input 
                        type="text" 
                        placeholder="Enter Email"  
                        value = {emailAddress}
                        onChange = {({target}) => setEmailAddress(target.value)}
                        required/>

                <label for="student_password"><b>Enter a password</b></label>
                    <input 
                        type="password" 
                        placeholder="Enter Password"  
                        value = {password}
                        onChange = {({target}) => setPassword(target.value)}
                        required/>

                <button class="signup_button" type="submit">Sign Up</button>
                
            </form>
            <form action ={ROUTES.LOGIN}>
            <button className="login_button" type="submit">LOGIN</button>
            </form>
        </div>
    </div>
     );
 }

 export default Signup;