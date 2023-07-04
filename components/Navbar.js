import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-[90vw] bg-white text-sm py-5 dark:bg-black sticky top-5 left-[5vw] px-5 rounded-full border border-gray-500">
      <nav
        class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <Link class="flex-none text-xl font-semibold dark:text-white" href="/">
          PLM System
        </Link>
        <div class="flex flex-row items-center gap-5 mt-5 pb-2 overflow-x-auto sm:justify-end sm:mt-0 sm:pl-5 sm:pb-0 sm:overflow-x-visible">
          <Link
            class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
            href="/books"
          >
            Books
          </Link>
          <Link
            class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
            href="/courses"
          >
            Courses
          </Link>
          <Link
            class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
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
