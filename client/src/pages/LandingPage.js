import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {lazy, Suspense} from 'react';
import ReactLoader from '../components/Loader';

const Navbar = lazy(() => import('../components/Navbar'));
const Home = lazy(() => import('../components/LandingPage/Home'));
const About = lazy(() => import('../components/LandingPage/About'));
const OurTeam = lazy(() => import('../components/LandingPage/OurTeam'));
const Contact = lazy(() => import('../components/LandingPage/Contact'));
const Create = lazy(() => import('../components/LandingPage/Create'));
const NotFound = lazy(() => import('./NotFound'));

function LandingPage() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
        <Suspense fallback={<ReactLoader />}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/ourteam">
              <OurTeam />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default LandingPage;
