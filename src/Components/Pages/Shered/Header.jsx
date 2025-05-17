import { Link } from "react-router";

const Header = () => {
  const navOption = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menuPage">Farming Guides</Link>
      </li>
      <li>
        <Link to="/MainCrop">Crop Details</Link>
      </li>
      <li>
        <Link to="/MainPestControl">Pest Controls</Link>
      </li>
      <li>
        <Link to="/Contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed px-4 z-50 bg-black/30 text-white shadow-sm">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            {navOption}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Ariful Islam
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOption}</ul>
      </div>

      <div className="navbar-end">
        <button className="btn">Login</button>
      </div>
    </div>
  );
};

export default Header;
