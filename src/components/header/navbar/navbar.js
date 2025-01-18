import "./navbar.css";
import { NavLink } from "react-router";
import logo from './logo.svg'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div>
          <NavLink to="/Men" end>
            Men
          </NavLink>
        </div>
        <div>
          <NavLink to="/Women" end>
            Women
          </NavLink>
        </div>
        <div>
          <NavLink to="/kids" end>
            Kids
          </NavLink>
        </div>
        <div>
          <NavLink to="/New-&-featured" end>
            New & featured
          </NavLink>
        </div>
        <div>
          <NavLink to="/Gifts" end>
            Gifts
          </NavLink>
        </div>
      </div>
      <div className="navbar-logo">
        <img 
          src={logo} 
          alt="Brown Coffee Cup Logo" 
          style={{ width: '70px', height: '70px', marginBottom: '10px'

           }} 
        />
      </div>

      <div className="navbar-logo"></div>
      <button className="navbar-user-info" ></button>
    </div>
  );
};

export default Navbar;
