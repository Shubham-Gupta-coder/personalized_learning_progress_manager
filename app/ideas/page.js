"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";

const page = () => {
  const [ideas, setideas] = useState([]);
  const [ideaTitle, setideaTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const ideaFetch = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/idea");
      const ideasObjs = await res.json();
      setideas(ideasObjs);
      setLoading(false);
    } catch (error) {
      setLoading(false);

    }
  };
  useEffect(() => {
    ideaFetch();
  }, []);

  const titleHandler = (e) => {
    setideaTitle(e.target.value);
  };

  const submitidea = async (e) => {
    try {
      const response = await fetch("/api/idea", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idea: ideaTitle,
        }),
      });

      if (response.ok) {
        // idea successfully added
        // Reset form inputs
        setideaTitle("");
        ideaFetch();
      } else {
        // Error adding idea
        console.error("Error adding idea:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding idea:", error);
    }
  };
  const deleteidea = async (title) => {
    try {
      const response = await fetch("/api/deleteidea", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idea: title,
        }),
      });

      if (response.ok) {
        // idea successfully added
        // Reset form inputs
        ideaFetch();
      } else {
        // Error adding idea
        console.error("Error deleting idea:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting idea:", error);
    }
  };

  return (
    <div className="min-h-screen dark:bg-black">
      <Navbar />
      <h1 className="text-3xl mt-10 mx-10 p-10 text-gray-800 dark:text-gray-300 font-bold">
        Add New idea
      </h1>
      <div className="px-10 py-2 mx-10 ">
        <label
          for="hs-inline-add-on"
          className="block text-sm font-medium mb-2 dark:text-white"
        >
          idea Name
        </label>
        <div className="relative">
          <input
            type="text"
            id="hs-inline-add-on"
            name="hs-inline-add-on"
            className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-black dark:border-gray-700 border dark:text-gray-400"
            placeholder="xyz 101"
            onChange={titleHandler}
            value={ideaTitle}
          />
        </div>
        <button
          type="button"
          className="w-full mt-5 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-black dark:hover:bg-black/5 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
          onClick={submitidea}
        >
          Add idea
        </button>
      </div>
      <h1 className="text-3xl mt-10 mx-10 p-10 text-gray-800 dark:text-gray-300 font-bold">
        Ideas
      </h1>
      <div className="ideas flex flex-wrap px-10 mx-8">
        {!loading ? (
          ideas.map((idea) => {
            return (
              <div
                key={idea._id}
                className="flex flex-col m-2 w-[300px] min-h-[200px] bg-white border shadow-sm rounded-xl dark:bg-black dark:border-gray-700 dark:shadow-slate-700/[.7]"
              >
                <div className="bg-gray-100 border-b flex items-center justify-between rounded-t-xl py-2 px-4 md:py-3 md:px-5 dark:bg-black dark:border-gray-700">
                  <span className="dark:text-gray-300 text-gray-700">
                    ideas
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      deleteidea(idea.idea);
                    }}
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-black dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                  >
                    Delete
                  </button>
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {idea.idea}
                  </h3>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col m-5 w-[300px] min-h-[200px] bg-white border shadow-sm rounded-xl dark:bg-black/50 dark:border-gray-700 dark:shadow-slate-700/[.7] animate-pulse">
            <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-black/50 dark:border-gray-700">
              <a className=" inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-700">
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
              <h3 className="text-lg font-bold text-gray-800 dark:text-white"></h3>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default page;
