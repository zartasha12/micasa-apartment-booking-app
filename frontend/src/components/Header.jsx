import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constant/index.js";
import styles from "../style.js";
import { useAppContext } from "../context/AppContext.jsx";
import SignOutButton from "./SignOutButton.jsx";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  console.log(isLoggedIn);
  return (
    <nav className="bg-[#10375C]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className={`${styles.logoheading} text-transparent `}>
          <Link to="/" className="text-white">
            <span>Mi</span>
            <span className="text-[#ff5722]">Casa</span>
          </Link>
        </span>
        {/* <div
          className="items-center justify-between hidden w-full md:flex md:w-auto "
          
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`[font-family:'Poppins-Bold',Helvetica] cursor-pointer text-[16px]
              text-white hover:text-[#ff5722]  `}
              >
                <Link to={`/${nav.id}`} className="">
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}

        <span className="flex space-x-2 ">
          {isLoggedIn ? (
            <>
              <Link
                to="/my-booking"
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600"
              >
                My Booking
              </Link>
              <Link
                to="/my-hotels"
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex items-center font-bold  bg-[#ff5622dd] text-white  h-[40px] w-auto rounded-md px-3 ml-6"
            >
              Get started
            </Link>
          )}
        </span>
      </div>
    </nav>
  );
};

export default Header;
