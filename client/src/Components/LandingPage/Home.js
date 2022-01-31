import { Link } from "react-router-dom";
import * as ROUTES from '../../constants/routes';

const Home = () => {
  return (
    <div className="frontpage">
      <h1>Action expresses Priorities</h1>
      <h5>The key is not to prioritize what's on your schedule, but to schedule your priorities.</h5>
      <h5>Stephen R.Covey</h5>
      <div className="buttons">
        <form action={ROUTES.SIGN_UP}>
          <button type="submit" value="Signup">Signup</button>
        </form>
        <form method="get" action={ROUTES.LOGIN}>
          <button type="submit" value="Login">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
