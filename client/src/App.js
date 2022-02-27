import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactLoader from './components/Loader';
import * as ROUTES from './constants/routes';
import { useState } from 'react';

import UserContext from './context/user';
import ProtectedRoute from './helpers/protected-route';

const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/Signup'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
// const Profile = lazy(() => import('./pages/profile'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  const token_string = localStorage.getItem("token");
  const [token, setToken] = useState(token_string.localeCompare("null") !== 0 ? {token_string} : null);

  function setNewToken(token){
    if (!token || token.localeCompare("null") == 0){
      setToken(null);
    }
    else{
      setToken({token_string : token})
    }
  }
  return (
    <UserContext.Provider value={token}>
      <Router>
        <Suspense fallback={<ReactLoader />}>
          <Switch>
          <ProtectedRoute user={token} path={ROUTES.DASHBOARD} exact>
              <Dashboard user={token} setToken={setNewToken}/>
            </ProtectedRoute>
            <Route exact path={ROUTES.LANDINGPAGE} component={LandingPage}/>
            <Route exact path={ROUTES.SIGN_UP} component={() => <SignUp token={token} setToken={setNewToken}/>} />
            {/* <Route exact path={ROUTES.LOGIN} component={Login} /> */}
            <Route exact path={ROUTES.LOGIN} component={() => <Login token={token} setToken={setNewToken}/>} />
            <Route component={NotFound}/>
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}