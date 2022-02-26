import { useEffect } from 'react';
import PropTypes from 'prop-types';
import useAuthListener from '../hooks/useToken';
import useUser from '../hooks/use-user';
import LoggedInUserContext from '../context/logged-in-user';

export default function Dashboard({ user: loggedInUser }) {
//   const { user, setActiveUser } = useUser(loggedInUser);
  useEffect(() => {
    document.title = 'Dashboard';
  }, []);

  return (
    // <LoggedInUserContext.Provider value={{ user, setActiveUser }}>
    <div className="bg-gray-background">
      <div className="frontpage">
        <h1>Dashboard!</h1>
      </div>
    </div>
    // </LoggedInUserContext.Provider>
  );
}

Dashboard.propTypes = {
  user: PropTypes.object.isRequired
};