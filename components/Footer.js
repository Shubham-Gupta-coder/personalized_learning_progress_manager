import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer>
  <div class="max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-5 text-center">
      <div>
        <a class="flex-none text-xl font-semibold text-black dark:text-white" href="#" aria-label="Brand">PLM System</a>
      </div>

      <ul class="text-center">
        <li class="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
          <Link class="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200" href="/books">
            Books
          </Link>
        </li>
        <li class="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
          <Link class="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200" href="/courses">
            Courses
          </Link>
        </li>
        <li class="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
          <Link class="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200" href="/ideas">
            Ideas
          </Link>
        </li>
      </ul>
    </div>
  </div>
</footer>
  )
}

export default Footer