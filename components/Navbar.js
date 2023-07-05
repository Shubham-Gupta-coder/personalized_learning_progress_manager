import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-[90vw] bg-white text-sm py-5 dark:bg-black sticky top-5 left-[5vw] px-5 rounded-full border border-gray-500">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <Link className="flex-none text-xl font-semibold dark:text-white" href="/">
          PLM System
        </Link>
        <div className="flex flex-row items-center gap-5 mt-5 pb-2 overflow-x-auto sm:justify-end sm:mt-0 sm:pl-5 sm:pb-0 sm:overflow-x-visible">
          <Link
            className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
            href="/books"
          >
            Books
          </Link>
          <Link
            className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
            href="/courses"
          >
            Courses
          </Link>
          <Link
            className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
            href="/ideas"
          >
            Ideas
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
