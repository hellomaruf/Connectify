import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useFavourite from "../Hooks/useFavourite";
import { Slide } from "react-awesome-reveal";

function Nav() {
  const { favouriteContact } = useFavourite();
 
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
    <Slide direction="down" cascade>
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
          <a className=" font-semibold text-3xl">
            <span className="text-[#A91D3A]">C</span>onnectify
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {link}{" "}
            <div className="relative">
              <FaRegHeart className="text-xl ml-4 text-[#a91d3a]" />
              <p className="bg-green-600 w-4 h-4 rounded-full flex items-center justify-center -top-2 -right-2 text-white absolute">
                {favouriteContact?.length}
              </p>
            </div>
          </ul>
        </div>
      </div>
    </Slide>
  );
}

export default Nav;
