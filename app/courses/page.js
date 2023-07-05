"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";

const page = () => {
  const [courses, setCourses] = useState([]);
  const [courseTitle, setCourseTitle] = useState("")
  const [courseUrl, setCourseUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const courseFetch = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/course");
      const coursesObjs = await res.json();
      setCourses(coursesObjs);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };
  useEffect(() => {
    courseFetch();
  }, []);

  const titleHandler = e => {
    setCourseTitle(e.target.value)
  }
  const urlHandler = e => {
    setCourseUrl(e.target.value)
  }

  const submitCourse = async e => {
    try {
      const response = await fetch("/api/course", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          course: courseTitle,
          link: courseUrl,
        }),
      });

      if (response.ok) {
        // Course successfully added
        // Reset form inputs
        setCourseTitle("");
        setCourseUrl("");
        courseFetch()
      } else {
        // Error adding course
        console.error("Error adding course:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding course:", error);
    }
  }
  const deleteCourse = async title => {
    try {
      const response = await fetch("/api/deletecourse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          course: title,
        }),
      });

      if (response.ok) {
        // Course successfully added
        // Reset form inputs
        courseFetch()
      } else {
        // Error adding course
        console.error("Error deleting course:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  }

  return (
    <div className="min-h-screen dark:bg-black">
      <Navbar />
      <h1 className="text-3xl mt-10 mx-10 p-10 text-gray-800 dark:text-gray-300 font-bold">
        Add New Course
      </h1>
      <div className="px-10 py-2 mx-10 ">
        <label
          for="hs-inline-add-on"
          className="block text-sm font-medium mb-2 dark:text-white"
        >
          Course Name
        </label>
        <div className="relative">
          <input
            type="text"
            id="hs-inline-add-on"
            name="hs-inline-add-on"
            className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-black dark:border-gray-700 border dark:text-gray-400"
            placeholder="xyz 101"
            onChange={titleHandler}
            value={courseTitle}
          />
        </div>
        <label
          for="hs-inline-add-on"
          className="block text-sm font-medium mb-2 mt-5 dark:text-white"
        >
          Course URL
        </label>
        <div className="relative">
          <input
            type="text"
            id="hs-inline-add-on"
            name="hs-inline-add-on"
            className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-black dark:border-gray-700 border dark:text-gray-400"
            placeholder="https://www.example.com"
            onChange={urlHandler}
            value={courseUrl}
          />
        </div>
        <button
          type="button"
          className="w-full mt-5 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-black dark:hover:bg-black/5 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
          onClick={submitCourse}
        >
          Add Course
        </button>
      </div>
      <h1 className="text-3xl mt-10 mx-10 p-10 text-gray-800 dark:text-gray-300 font-bold">
        Courses
      </h1>
      <div className="courses flex flex-wrap px-10 mx-5">
        {!loading ? (
          courses.map((course) => {
            console.log(courses);
            return (
              <div
                key={course._id}
                className="flex flex-col m-5 w-[300px] min-h-[200px] bg-white border shadow-sm rounded-xl dark:bg-black dark:border-gray-700 dark:shadow-slate-700/[.7]"
              >
                <div className="bg-gray-100 border-b flex items-center justify-between rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-black dark:border-gray-700">
                  <a
                    className=" inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-700"
                    href={course.link}
                  >
                    Go To
                    <svg
                      className="w-2.5 h-auto"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      deleteCourse(course.course)
                    }}
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-black dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                  >
                    Delete
                  </button>
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {course.course}
                  </h3>
                </div>
              </div>
            );
          })
        ) : (
          <div
            className="flex flex-col m-5 w-[300px] min-h-[200px] bg-white border shadow-sm rounded-xl dark:bg-black/50 dark:border-gray-700 dark:shadow-slate-700/[.7] animate-pulse"
          >
            <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-black/50 dark:border-gray-700">
              <a
                className=" inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-700"
              >
                <svg
                  className="w-2.5 h-auto"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
            <div className="p-4 md:p-5">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              </h3>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default page;
