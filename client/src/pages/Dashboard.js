import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserContext from '../context/user';
import * as ROUTES from '../constants/routes';

export default function Dashboard({ user, setToken }) {
    //   const { user, setActiveUser } = useUser(loggedInUser);
    const history = useHistory();
    useEffect(() => {
        document.title = 'Dashboard';
        console.log("Current token in Dashboar", user);
    }, []);

    const logout = async(event) => {
        localStorage.setItem("token", null);
        setToken(null);
        console.log("delete token");
        console.log(localStorage.getItem("token"));
        history.push(ROUTES.LANDINGPAGE);
    }

    return (
        <UserContext.Provider value={user}>
            <div className="bg-gray-background">
                <div className="frontpage">
                    <h1>Dashboard!</h1>
                </div>
                <div>
                    <button onClick={logout}>LOGOUT</button>
                </div>
            </div>
        </UserContext.Provider>
    );
}

Dashboard.propTypes = {
    user: PropTypes.object.isRequired
};