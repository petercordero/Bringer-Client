import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <Link to="/">
          <h5>Login</h5>
        </Link>
        <Link to="/tracking">
          <h5>Tracking</h5>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
