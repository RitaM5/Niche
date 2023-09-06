import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed z-50 w-full bg-base-100 font-poppins">
      <div className="my-4 h-full block lg:hidden">
        <div className="global-nav__logo text-center mx-auto w-52 text-[#298541]"><a title="Niche" href="https://www.niche.com/" data-after-sherlock="true" className="text-green-600" aria-label="Niche Home"><svg className="niche-logo-horizontal" viewBox="0 0 572 112" xmlns="http://www.w3.org/2000/svg">

          <path d="M428 34.9l.4-.3-.4.3c1.9 1.5 4.1 2.9 6.7 4.2 5.9 3 10.7 4.7 17.6 4.7 7.5 0 14.2-2.8 20.2-5.3l.3-.1c4.1-1.7 9.8-4 15.7-4 5.3 0 10.3 1.4 16.5 4.6 1.4.7 2.6 1.5 3.7 2.1 1.8 1.1 3 1.8 4.1 1.8 1.6 0 2.6-.9 2.6-2.5 0-1.1-.5-1.9-1.8-3-1.9-1.6-4.6-3-6.5-4-6.5-3.2-12-4.6-18.4-4.6-7.4 0-12.3 2.1-17.5 4.3-5.2 2.2-12.9 5.2-19 5.2-5.5 0-9.3-1.7-13.3-3.6-2.9-1.3-4.9-2.7-6.3-3.7-1.4-1-2.4-1.6-3.3-1.6-1.9 0-2.9 1-2.9 2.8 0 1.4 1.2 2.3 1.6 2.7zM428 56.9l.4-.3-.4.3c1.9 1.5 4.1 2.9 6.7 4.2 5.9 3 10.7 4.7 17.6 4.7 7.5 0 14.2-2.8 20.2-5.3l.3-.1c4.1-1.7 9.8-4 15.7-4 5.3 0 10.3 1.4 16.5 4.6 1.4.7 2.6 1.5 3.7 2.1 1.8 1.1 3 1.8 4.1 1.8 1.6 0 2.6-.9 2.6-2.5 0-1.1-.5-1.9-1.8-3-1.9-1.6-4.6-3-6.5-4-6.5-3.2-12-4.6-18.4-4.6-7.4 0-12.3 2.1-17.5 4.3-5.2 2.2-12.9 5.2-19 5.2-5.5 0-9.3-1.7-13.3-3.6-2.9-1.3-4.9-2.7-6.3-3.7-1.4-1-2.4-1.6-3.3-1.6-1.9 0-2.9 1-2.9 2.8 0 1.4 1.2 2.3 1.6 2.7zM428 78.9l.4-.3-.4.3c1.9 1.5 4.1 2.9 6.7 4.2 5.9 3 10.7 4.7 17.6 4.7 7.5 0 14.2-2.8 20.2-5.3l.3-.1c4.1-1.7 9.8-4 15.7-4 5.3 0 10.3 1.4 16.5 4.6 1.4.7 2.6 1.5 3.7 2.1 1.8 1.1 3 1.8 4.1 1.8 1.6 0 2.6-.9 2.6-2.5 0-1.1-.5-1.9-1.8-3-1.9-1.6-4.6-3-6.5-4-6.5-3.2-12-4.6-18.4-4.6-7.4 0-12.3 2.1-17.5 4.3-5.2 2.2-12.9 5.2-19 5.2-5.5 0-9.3-1.7-13.3-3.6-2.9-1.3-4.9-2.7-6.3-3.7-1.4-1-2.4-1.6-3.3-1.6-1.9 0-2.9 1-2.9 2.8 0 1.4 1.2 2.3 1.6 2.7zM377 16.5c-22.6 0-41 18.2-41 40.8S354.4 98 377 98s41-18.2 41-40.8-18.4-40.7-41-40.7zm0 76.2c-19.4 0-35.1-15.9-35.1-35.4s15.7-35.4 35.1-35.4 35.1 15.9 35.1 35.4-15.7 35.4-35.1 35.4z" fill="#298541"></path>

          <path d="M83.3 23.9c-2.7 0-3.9 1.2-3.9 4.2v46.3L35.5 25.8c-.1-.1-1.3-1.9-3.8-1.9-2.6 0-3.8 1.5-3.8 4.6v56.1c0 2.6 1.4 4.1 3.8 4.1s3.9-1.5 3.9-4V37.1l43.5 49c1.7 1.9 2.9 2.5 4.7 2.5 2.2 0 3.3-1.3 3.3-4V28.1c0-2.8-1.3-4.2-3.8-4.2z" fill="#298541" transform="matrix(.64 0 0 .65 340 20.8)" stroke="#298541" stroke-width="2"></path>

          <path d="M55.3 23.9c-2.7 0-3.9 1.2-3.9 4.2v46.3L7.5 25.8c-.1-.1-1.3-1.9-3.8-1.9-2.6 0-3.8 1.5-3.8 4.6v56.1c0 2.6 1.4 4.1 3.8 4.1s3.9-1.5 3.9-4V37.1l43.5 49c1.7 1.9 2.9 2.5 4.7 2.5 2.2 0 3.3-1.3 3.3-4V28.1c0-2.8-1.3-4.2-3.8-4.2zM83.3 23.8c-2.4 0-3.8 1.6-3.8 4.2v56.5c0 2.5 1.6 4.3 3.9 4.3 1.9 0 3.8-1.4 3.8-4.4V28.1c0-2.7-1.4-4.3-3.9-4.3zM160.6 74.1c-.9 0-2.2.8-3.9 2-3.7 2.4-9.8 6.5-18.6 6.5-14.5 0-24.7-13.9-24.7-26.4 0-15.8 12.7-26.4 24.7-26.4 8.3 0 13.2 3.9 16.7 6.8 1.9 1.5 3.4 2.8 4.9 2.8 2.2 0 3.5-1.2 3.5-3.2 0-3.7-11.9-13.3-25-13.3-17.9 0-32.4 14.9-32.4 33.2 0 18.1 14.8 33.4 32.3 33.4 5.8 0 12.3-1.5 17.7-4.2 4.9-2.5 8-5.4 8-7.6 0-2.2-1.3-3.6-3.2-3.6zM187.8 23.8c-2.4 0-3.8 1.6-3.8 4.2v56.5c0 2.5 1.6 4.3 3.9 4.3 1.9 0 3.8-1.4 3.8-4.4V28.1c0-2.7-1.4-4.3-3.9-4.3zM237.3 23.8c-2.4 0-3.8 1.6-3.8 4.2v56.5c0 2.5 1.6 4.3 3.9 4.3 1.9 0 3.8-1.4 3.8-4.4V28.1c0-2.7-1.4-4.3-3.9-4.3z" fill="#298541"></path>

          <path fill="#298541" d="M187 52.5h50v7h-50z"></path>

          <path fill="#298541" d="M187 52.5h50v7h-50zm119.5 29H269v-22h31c3 0 4.3-1.7 4.3-3.5 0-1.6-1.2-3.4-4.4-3.4H269V31h37.5c3.1 0 4.2-1.8 4.2-3.6 0-1-.4-3.3-4.2-3.3h-41.1c-2.6 0-4.2 1.5-4.2 4.2v56.1c0 2.7 1.2 3.9 3.9 3.9h41.4c2.6 0 4.2-1.3 4.2-3.6.1-1.9-1.5-3.2-4.2-3.2z"></path>

        </svg></a></div>
      </div>
      <nav className="bg-base-100">
        <div className="flex font-poppins items-center font-medium justify-around h-20 ">
          <div className="z-50 p-5 md:w-auto w-full flex justify-between">
            <h1 className="global-nav__logo relative right-4  text-[#298541] w-52 hidden lg:block"><a title="Niche" href="https://www.niche.com/" data-after-sherlock="true" className="" aria-label="Niche Home"><svg className="niche-logo-horizontal" viewBox="0 0 572 112" xmlns="http://www.w3.org/2000/svg">

              <path d="M428 34.9l.4-.3-.4.3c1.9 1.5 4.1 2.9 6.7 4.2 5.9 3 10.7 4.7 17.6 4.7 7.5 0 14.2-2.8 20.2-5.3l.3-.1c4.1-1.7 9.8-4 15.7-4 5.3 0 10.3 1.4 16.5 4.6 1.4.7 2.6 1.5 3.7 2.1 1.8 1.1 3 1.8 4.1 1.8 1.6 0 2.6-.9 2.6-2.5 0-1.1-.5-1.9-1.8-3-1.9-1.6-4.6-3-6.5-4-6.5-3.2-12-4.6-18.4-4.6-7.4 0-12.3 2.1-17.5 4.3-5.2 2.2-12.9 5.2-19 5.2-5.5 0-9.3-1.7-13.3-3.6-2.9-1.3-4.9-2.7-6.3-3.7-1.4-1-2.4-1.6-3.3-1.6-1.9 0-2.9 1-2.9 2.8 0 1.4 1.2 2.3 1.6 2.7zM428 56.9l.4-.3-.4.3c1.9 1.5 4.1 2.9 6.7 4.2 5.9 3 10.7 4.7 17.6 4.7 7.5 0 14.2-2.8 20.2-5.3l.3-.1c4.1-1.7 9.8-4 15.7-4 5.3 0 10.3 1.4 16.5 4.6 1.4.7 2.6 1.5 3.7 2.1 1.8 1.1 3 1.8 4.1 1.8 1.6 0 2.6-.9 2.6-2.5 0-1.1-.5-1.9-1.8-3-1.9-1.6-4.6-3-6.5-4-6.5-3.2-12-4.6-18.4-4.6-7.4 0-12.3 2.1-17.5 4.3-5.2 2.2-12.9 5.2-19 5.2-5.5 0-9.3-1.7-13.3-3.6-2.9-1.3-4.9-2.7-6.3-3.7-1.4-1-2.4-1.6-3.3-1.6-1.9 0-2.9 1-2.9 2.8 0 1.4 1.2 2.3 1.6 2.7zM428 78.9l.4-.3-.4.3c1.9 1.5 4.1 2.9 6.7 4.2 5.9 3 10.7 4.7 17.6 4.7 7.5 0 14.2-2.8 20.2-5.3l.3-.1c4.1-1.7 9.8-4 15.7-4 5.3 0 10.3 1.4 16.5 4.6 1.4.7 2.6 1.5 3.7 2.1 1.8 1.1 3 1.8 4.1 1.8 1.6 0 2.6-.9 2.6-2.5 0-1.1-.5-1.9-1.8-3-1.9-1.6-4.6-3-6.5-4-6.5-3.2-12-4.6-18.4-4.6-7.4 0-12.3 2.1-17.5 4.3-5.2 2.2-12.9 5.2-19 5.2-5.5 0-9.3-1.7-13.3-3.6-2.9-1.3-4.9-2.7-6.3-3.7-1.4-1-2.4-1.6-3.3-1.6-1.9 0-2.9 1-2.9 2.8 0 1.4 1.2 2.3 1.6 2.7zM377 16.5c-22.6 0-41 18.2-41 40.8S354.4 98 377 98s41-18.2 41-40.8-18.4-40.7-41-40.7zm0 76.2c-19.4 0-35.1-15.9-35.1-35.4s15.7-35.4 35.1-35.4 35.1 15.9 35.1 35.4-15.7 35.4-35.1 35.4z" fill="#298541"></path>

              <path d="M83.3 23.9c-2.7 0-3.9 1.2-3.9 4.2v46.3L35.5 25.8c-.1-.1-1.3-1.9-3.8-1.9-2.6 0-3.8 1.5-3.8 4.6v56.1c0 2.6 1.4 4.1 3.8 4.1s3.9-1.5 3.9-4V37.1l43.5 49c1.7 1.9 2.9 2.5 4.7 2.5 2.2 0 3.3-1.3 3.3-4V28.1c0-2.8-1.3-4.2-3.8-4.2z" fill="#298541" transform="matrix(.64 0 0 .65 340 20.8)" stroke="#298541" stroke-width="2"></path>

              <path d="M55.3 23.9c-2.7 0-3.9 1.2-3.9 4.2v46.3L7.5 25.8c-.1-.1-1.3-1.9-3.8-1.9-2.6 0-3.8 1.5-3.8 4.6v56.1c0 2.6 1.4 4.1 3.8 4.1s3.9-1.5 3.9-4V37.1l43.5 49c1.7 1.9 2.9 2.5 4.7 2.5 2.2 0 3.3-1.3 3.3-4V28.1c0-2.8-1.3-4.2-3.8-4.2zM83.3 23.8c-2.4 0-3.8 1.6-3.8 4.2v56.5c0 2.5 1.6 4.3 3.9 4.3 1.9 0 3.8-1.4 3.8-4.4V28.1c0-2.7-1.4-4.3-3.9-4.3zM160.6 74.1c-.9 0-2.2.8-3.9 2-3.7 2.4-9.8 6.5-18.6 6.5-14.5 0-24.7-13.9-24.7-26.4 0-15.8 12.7-26.4 24.7-26.4 8.3 0 13.2 3.9 16.7 6.8 1.9 1.5 3.4 2.8 4.9 2.8 2.2 0 3.5-1.2 3.5-3.2 0-3.7-11.9-13.3-25-13.3-17.9 0-32.4 14.9-32.4 33.2 0 18.1 14.8 33.4 32.3 33.4 5.8 0 12.3-1.5 17.7-4.2 4.9-2.5 8-5.4 8-7.6 0-2.2-1.3-3.6-3.2-3.6zM187.8 23.8c-2.4 0-3.8 1.6-3.8 4.2v56.5c0 2.5 1.6 4.3 3.9 4.3 1.9 0 3.8-1.4 3.8-4.4V28.1c0-2.7-1.4-4.3-3.9-4.3zM237.3 23.8c-2.4 0-3.8 1.6-3.8 4.2v56.5c0 2.5 1.6 4.3 3.9 4.3 1.9 0 3.8-1.4 3.8-4.4V28.1c0-2.7-1.4-4.3-3.9-4.3z" fill="#298541"></path>

              <path fill="#298541" d="M187 52.5h50v7h-50z"></path>

              <path fill="#298541" d="M187 52.5h50v7h-50zm119.5 29H269v-22h31c3 0 4.3-1.7 4.3-3.5 0-1.6-1.2-3.4-4.4-3.4H269V31h37.5c3.1 0 4.2-1.8 4.2-3.6 0-1-.4-3.3-4.2-3.3h-41.1c-2.6 0-4.2 1.5-4.2 4.2v56.1c0 2.7 1.2 3.9 3.9 3.9h41.4c2.6 0 4.2-1.3 4.2-3.6.1-1.9-1.5-3.2-4.2-3.2z"></path>

            </svg></a></h1>
            <button className="btn btn-ghost block lg:hidden font-poppins text-[15px]">Signup</button>
            <i className="fas fa-search block lg:hidden mt-2" style={{ color: '#298541', fontSize: '22px' }}></i>
            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
          </div>
          <ul className="md:flex hidden text-base relative right-6  items-center gap-8 lg:gap-2 font-semibold ">
            <li className="hover:border-b-4 hover:border-black"><NavLinks /></li>
            <li className="">
              <Link to="/" className="py-2 px-3 inline-block hover:border-b-4 hover:border-black">
                Colleges
              </Link>
            </li>
            <li>
              <Link to="/" className="py-2 px-3 inline-block hover:border-b-4 hover:border-black">
                Graduate Schools
              </Link>
            </li>
            <li>
              <Link to="/" className="py-2 px-3 inline-block hover:border-b-4 hover:border-black">
                Scholarships
              </Link>
            </li>
            <li>
              <Link to="/" className="py-2 px-3 inline-block hover:border-b-4 hover:border-black">
                Places to Live
              </Link>
            </li>
            <li>
              <Link to="/" className="py-2 px-3 inline-block hover:border-b-4 hover:border-black">
                Places to Work
              </Link>
            </li>
            <li>
              <button class="button button--bare global-links__meatball-icon" aria-expanded="false"><div class="niche-icon-wrap"><svg class="niche-icon niche-icon--meatball" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="13" r="2.5"></circle><circle cx="21.5" cy="13" r="2.5"></circle><circle cx="2.5" cy="13" r="2.5"></circle></g></svg></div></button>
            </li>
          </ul>

          <div className="md:block hidden">
            <ul className="md:flex relative left-8 items-center hidden text-base gap-8 lg:gap-2 font-semibold ">
              <li>
                <i className="fas fa-search mt-2 mr-3" style={{ color: '#298541', fontSize: '18px' }}></i>
              </li>
              <li className="text-[30px] text-gray-400">|</li>
              <li>
                <Link to="/" className="py-2 px-3 inline-block">
                  <button className="border px-3 py-1 duration-300 hover:bg-[#298541] hover:text-white">Login</button>
                </Link>
              </li>
              <li className="relative right-4">
                <Link to="/" className="py-2 px-3 inline-block">
                  <button className="border px-3 py-1 bg-[#298541] text-white">Signup</button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile nav */}
          <ul
            className={`
        md:hidden bg-[#102f25] text-white fixed w-full h-[400px] z-10 py-12 top-36 overflow-y-auto bottom-0  pl-4
        duration-500 ${open ? "left-0" : "left-[-100%] font-semibold text-lg "}
        `}
          >
            <li><NavLinks /></li>
            <li>
              <Link to="/" className="py-4 px-3 inline-block">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="py-3 px-3 inline-block">
                About
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="py-3 px-3 inline-block">
                Gallery
              </Link>
            </li>

            <div className="py-3">
              <li>
                <Link to="/contact" className="py-3 px-3 inline-block">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/login" className="py-3 px-3 inline-block">
                  Login
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </div>

  );
};

export default Navbar;