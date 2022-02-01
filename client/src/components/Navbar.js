import {Link, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";


function Navbar({auth}){
    return(
        <nav className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
            </div>
            <div className="routes">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/register" element={<RegistrationForm/>}/>
                    <Route path="/login" element={<LoginForm auth={auth}/>}/>
                </Routes>
            </div>
        </nav>
    )
}

export default Navbar;