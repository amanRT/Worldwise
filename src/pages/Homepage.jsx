import { NavLink } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";
function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1 className="test">WorldWise</h1>
      <NavLink to="/app">Go to App</NavLink>
    </div>
  );
}

export default Homepage;
