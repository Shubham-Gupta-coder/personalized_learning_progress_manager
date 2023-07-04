// it is a personal site so it is not going to be fancy a simple UI which is fast and easy to use :)

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home(props) {
  console.log(props)
  return (
    <div className="dark:bg-black min-h-screen">
      <Navbar />

      <div className="cards w-screen flex items-center justify-evenly px-10 mt-10">
        <Link class="relative bg-white border shadow-sm rounded-xl dark:bg-black dark:border-gray-500 w-[30%] dark:shadow-slate-700/[.7] cursor-pointer" href={'/books'}>
          <img
            class="w-full h-[600px] object-cover rounded-xl hover:p-2 hover:shadow-2xl transition-all "
            src="https://img.freepik.com/free-photo/front-view-hardback-books-library_23-2148827223.jpg?size=626&ext=jpg"
            alt="Image Description"
          />
          <div class="absolute top-0 left-0 right-0">
            <div class="p-4 md:p-5">
              <h3 class="text-lg font-bold border border-[#ffffff50] text-white px-5 py-2 rounded-full bg-[#0000007a] max-w-fit">
                Books
              </h3>
            </div>
          </div>
        </Link>
        <Link href={'/courses'} class="relative bg-white border shadow-sm rounded-xl dark:bg-black dark:border-gray-500 w-[30%] dark:shadow-slate-700/[.7] cursor-pointer">
          <img
            class="w-full h-[600px] object-cover rounded-xl hover:p-2 hover:shadow-2xl transition-all "
            src="https://images.pexels.com/photos/4443160/pexels-photo-4443160.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Image Description"
          />
          <div class="absolute top-0 left-0 right-0">
            <div class="p-4 md:p-5">
              <h3 class="text-lg font-bold border border-[#ffffff50] text-white px-5 py-2 rounded-full bg-[#0000007a] max-w-fit">
                Courses
              </h3>
            </div>
          </div>
        </Link>
        <Link href="/ideas" class="relative bg-white border shadow-sm rounded-xl dark:bg-black dark:border-gray-500 w-[30%] dark:shadow-slate-700/[.7] cursor-pointer">
          <img
            class="w-full h-[600px] object-cover rounded-xl hover:p-2 hover:shadow-2xl transition-all "
            src="https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Image Description"
          />
          <div class="absolute top-0 left-0 right-0">
            <div class="p-4 md:p-5">
              <h3 class="text-lg font-bold border border-[#ffffff50] text-white px-5 py-2 rounded-full bg-[#0000007a] max-w-fit">
                Ideas
              </h3>
            </div>
          </div>
        </Link>
      </div>

      <Footer/>
    </div>
  );
}
