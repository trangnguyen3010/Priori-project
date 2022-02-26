import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactLoader from './components/Loader';
import * as ROUTES from './constants/routes';
import { useState } from 'react';
import { useEffect } from 'react';

import UserContext from './context/user';
import useToken from './hooks/useToken';
import ProtectedRoute from './helpers/protected-route';

const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/Signup'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
// const Profile = lazy(() => import('./pages/profile'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  // const {token} = useToken();
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <UserContext.Provider value={{token}}>
      <Router>
        <Suspense fallback={<ReactLoader />}>
          <Switch>
          <ProtectedRoute user={token} path={ROUTES.DASHBOARD} exact>
              <Dashboard />
            </ProtectedRoute>
            <Route exact path={ROUTES.LANDINGPAGE} component={LandingPage}/>
            <Route exact path={ROUTES.SIGN_UP} component={() => <SignUp token={token} setToken={setToken}/>} />
            {/* <Route exact path={ROUTES.LOGIN} component={Login} /> */}
            <Route exact path={ROUTES.LOGIN} component={() => <Login token={token} setToken={setToken}/>} />
            <Route component={NotFound}/>
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}