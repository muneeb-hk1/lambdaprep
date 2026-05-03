import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <nav className="bg-blue border-gray-200  p-10 w-full z-[99999] flex justify-center sticky top-0">
        <div className="w-full flex flex-wrap items-center justify-between gap-8 md:gap-40">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              REDEFINΞ
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-8 justify-center text-sm text-white rounded-lg md:hidden hover:bg-white-100 focus:outline-none dark:text-white-400 dark:hover:bg-white-700 dark:focus:ring-white-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex wrap p-4 gap-3 md:p-0 md:flex-row md:mt-0 md:border-0 md:gap-4">
              <li>
                <Link
                  to="/"
                  className="inline-block py-2 !px-3 text-white bg-emerald-300 rounded-sm md:bg-transparent md:p-0 dark:text-white font-normal"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/components/doc"
                  className="inline-block py-2 !px-3 text-white rounded-sm md:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 md:hover-bg-transparent md:dark:hover:bg-transparent font-normal"
                  aria-current="page"
                >
                  Doc
                </Link>
              </li>

              <li>
                <Link
                  to="/components/dashboard"
                  className="inline-block py-2 !px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-normal"
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  to="https://linkedin.com/in/muneebhk"
                  target="_blankver"
                  className="inline-block py-2 !px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-normal"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
