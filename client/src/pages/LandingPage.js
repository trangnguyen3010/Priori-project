import Navbar from '../components/Navbar';
import Home from '../components/LandingPage/Home';
import About from '../components/LandingPage/About';
import OurTeam from '../components/LandingPage/OurTeam';
import Contact from '../components/LandingPage/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from '../components/LandingPage/Create';
import NotFound from './NotFound';


function LandingPage() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
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
        </div>
      </div>
    </Router>
  );
}

export default LandingPage;
