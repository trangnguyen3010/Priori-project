import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import * as ROUTES from '../constants/routes';

function Signup() {
      const [emailAddress, setEmailAddress] = useState('');
      const [password, setPassword] = useState('');
      const [name, setName] = useState('');
      const [uni, setUni] = useState('');
      const [major, setMajor] = useState('');
      const [studentnumber, setStudentnumber] = useState('');
      const [signUpError, setError] = useState('');

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

      useEffect(() => {
        document.title = 'Signup - Priori';
    }, []);
     return (
    <div class="App">
        <div class="App-header">
            <h1 className="header pink">Priori</h1>
            <h1>Start making you a priority</h1>
            <br/>
            <br/>
            {signUpError && <p className="red">{signUpError}</p>}
            <form onSubmit={handleSignup} method="POST"> 
                <b>Your name?</b>
                    <input 
                        type="text" 
                        placeholder="Enter name" 
                        value = {name}
                        onChange = {({target}) => setName(target.value)}
                        required/>
            
                <b>Your university?</b>
                    <input 
                        type="text" 
                        placeholder="Enter university name" 
                        value = {uni}
                        onChange = {({target}) => setUni(target.value)} 
                        required/>
                
                <b>Your major?</b>
                    <input 
                        type="text" 
                        placeholder="Enter your major"  
                        value = {major}
                        onChange = {({target}) => setMajor(target.value)}
                        required/>
                
                <b>Your student number?</b>
                    <input 
                        type="text" 
                        placeholder="Enter your student number" 
                        value = {studentnumber}
                        onChange = {({target}) => setStudentnumber(target.value)}
                        required/>

                <b>Your email?</b>
                    <input 
                        type="text" 
                        placeholder="Enter Email"  
                        value = {emailAddress}
                        onChange = {({target}) => setEmailAddress(target.value)}
                        required/>

                <b>Enter a password</b>
                    <input 
                        type="password" 
                        placeholder="Enter Password"  
                        value = {password}
                        onChange = {({target}) => setPassword(target.value)}
                        required/>

                <button class="button" type="submit">Sign Up</button>
                <div className="login_line"/>
            </form>
            <label for="question"><b>Already have an account?</b></label>
            <form action ={ROUTES.LOGIN}>
            <button className="login_button" type="submit">Login</button>
            
            <form className="directing">
            <p type="submit">
                <span>
                    Have an account? 
                    <a className="underline_bold" href={ROUTES.LOGIN}> Log in</a>
                    .
                </span>
            </p>
            </form>
        </div>
    </div>
    );
 }

 export default Signup;