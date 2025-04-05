import React, { useState, useEffect, use } from 'react';
import Login from './Login'
import Logout from './Logout';
import { useAuth } from '../context/AuthProvider';
function Navbar() {
  const [authUser,setAuthUser] = useAuth()
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const element = document.documentElement;

  useEffect(() => {
    element.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = (
    <>
      <li><a href='/'>Home</a></li>
      <li><a href='/course'>Course</a></li>
      <li><a>Contact</a></li>
      <li><a>About</a></li>
    </>
  );

  return (
    <>
      <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${sticky ? "sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out" : ""}`}>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-7 6h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {navItems}
              </ul>
            </div>
            <a className="text-2xl font-bold cursor-pointer">bookStore</a>
          </div>
          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {navItems}
              </ul>
            </div>

            <div className='hidden md:block'>
              <label className="px-3 py-2 rounded-md flex items-center gap-2 bg-gray-100 dark:bg-gray-800 dark:text-white">
                <svg className="h-[1em] opacity-50 dark:opacity-75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                    <circle cx="11" cy="11" r="7"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input 
                  type="text" 
                  className='grow outline-none bg-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400' 
                  required 
                  placeholder="Search" 
                />
              </label>
            </div>

            <label className="swap swap-rotate">
              <input 
                type="checkbox" 
                checked={theme === "dark"} 
                onChange={() => setTheme(theme === "light" ? "dark" : "light" )} 
              />

              <svg className="swap-off h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>

              <svg className="swap-on h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,7.05,7.05,0,0,1-3.37.73A8.15,7.15,0,0,1,9.08,5.49a8.59,7.59,0,0,1,.25-2A1,1,0,0,0,7,2.36,7.14,7.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z"></path>
              </svg>
            </label>

            {
              authUser?<Logout/>:<a
              className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
              onClick={() =>
                document.getElementById("my_modal_3").showModal()
              }
            >
              Login
            </a>
            }
            <Login/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;