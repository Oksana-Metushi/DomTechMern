import React, { useContext, useEffect, useState } from "react";
import logo from "../../public/images/home/fav_icon.png";
import { FaRegUser } from "react-icons/fa";
import Modal from "./Modal";
import { AuthContext } from "../contexts/AuthProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const { user, loading } = useContext(AuthContext);
  const [cart, refetch] = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { id: 1, link: "Home", path: "/" },
    { id: 2, link: "About", path: "/about" },
    { id: 3, link: "Contact", path: "/contact" },
    { id: 4, link: "Shop", path: "/menu" },
    { id: 4, link: "Blog", path: "/blog" },
  ]
  return (
    <header
      className="max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out glass"
    >
      <div
        className={`navbar xl:px-24 ${isSticky
          ? "shadow-md transition-all duration-300 ease-in-out"
          : ""
          }`}
      >
        <div className="navbar-start">
          <div className="dropdown justify-between">
            <label onClick={toggleMenu} tabIndex={0} className="btn btn-ghost lg:hidden" >
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
            </label>
            <ul
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64 space-y-3"
              style={{ display: isMenuOpen ? "block" : "none" }}
            ><li>
                {
                  navItems.map(({ id, link, path }) => <Link key={id} to={path} className='block text-slate-400 uppercase '>{link}</Link>)
                }
              </li>
            </ul>
          </div>
          <a href="/">
            <img src={logo} alt="" className="w-14 h-12"/><span className="text-slate-400">DomTech</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-6 font-tek text-lg">{
            navItems.map(({ id, link, path }) => <Link key={id} to={path} className='block text-slate-400 uppercase '>{link}</Link>)
          }</ul>
        </div>
        <div className="navbar-end ">

          <Link to="/cart-page">
            <label
              tabIndex={0}
              className="text-slate-400 lg:flex items-center justify-center mx-5"
            >
              <div className="indicator">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{cart.length || 0}</span>
              </div>
            </label>
          </Link>

          {
            user ? <>
              <Profile user={user} />
            </> : <button onClick={() => document.getElementById('my_modal_5').showModal()} className="text-slate-400 mr-2">
              <FaRegUser />
            </button>
          }
          <Modal />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
