import { NavLink } from "react-router-dom";

function Nav() {
  const link = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-[#A91D3A] pl-4" : "text-gray-800 pl-4"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="all-contacts"
        className={({ isActive }) =>
          isActive ? "text-[#A91D3A] pl-4" : "text-gray-800 pl-4"
        }
      >
        All Contact
      </NavLink>
      <NavLink
        to="add-contact"
        className={({ isActive }) =>
          isActive ? "text-[#A91D3A] pl-4" : "text-gray-800 pl-4"
        }
      >
        Add Contact
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {link}
          </ul>
        </div>
        <a className=" font-semibold text-2xl">Connectify</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
    </div>
  );
}

export default Nav;
