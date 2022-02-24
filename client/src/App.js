import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactLoader from './components/Loader';
import * as ROUTES from './constants/routes';
//import UserContext from './context/user';
// import useAuthListener from './hooks/use-auth-listener';

const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/Signup'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
// const Profile = lazy(() => import('./pages/profile'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  // const { user } = useAuthListener();

  return (
      <Router>
        <Suspense fallback={<ReactLoader />}>
          <Switch>
          <Route exact path={ROUTES.LANDINGPAGE} component={LandingPage} />
            <Route exact path ={ROUTES.DASHBOARD} component={Dashboard} />
            <Route exact path={ROUTES.LOGIN} component={Login} />
            <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
            {/* <Route path={ROUTES.PROFILE} component={Profile} />
            <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
              <Dashboard />
            </ProtectedRoute> */}
            <Route component={NotFound}/>
          </Switch>
        </Suspense>
      </Router>
  );
}