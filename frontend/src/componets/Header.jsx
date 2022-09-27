import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="shadow-md">
      <div className="navbar container mx-auto px-5">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Hp Cloud
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="#" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="#">Settings</Link>
              </li>
              <li>
                <Link to="#">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
