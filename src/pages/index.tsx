import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import Topbar from "@/components/Topbar/Topbar";
import { firestore } from "@/firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

import { useState } from "react";

export default function Home() {
  const [loadingProblems, setLoadingProblems] = useState(true);
  // const [inputs, setInputs] = useState({
  //   id: "",
  //   difficulty: "",
  //   videoId: "",
  //   order: 0,
  //   likes: 0,
  //   dislikes: 0,
  //   title: "",
  //   category: "",
  //   link: "",
  // });

  // const handleChangeInput = async (e: any) => {
  //   setInputs({ ...inputs, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();

  //   const newProb = { ...inputs, order: Number(inputs.order) };
  //   await setDoc(doc(firestore, "problems", inputs.id), newProb);
  //   alert("save to db");
  // };
  return (
    <>
      <main className="bg-dark-layer-2 min-h-screen">
        <Topbar />
        <h1
          className="text-2xl text-center text-gray-500 dark:text-gray-400 font-medium
					uppercase mt-10 mb-5"
        >
          &ldquo; QUALITY OVER QUANTITY &rdquo;
        </h1>
        <div className="relative overflow-x-auto mx-auto px-6 pb-10">
          {loadingProblems && (
            <div className="max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse">
              {[...Array(10)].map((_, idx) => (
                <LoadingSkeleton key={idx} />
              ))}
            </div>
          )}
          <table className="text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto">
            {!loadingProblems && (
              <thead className="text-xs text-gray-300 uppercase dark:text-gray-400 border-b ">
                <tr>
                  <th scope="col" className="px-1 py-3 w-0 font-medium">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 w-0 font-medium">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3 w-0 font-medium">
                    Difficulty
                  </th>

                  <th scope="col" className="px-6 py-3 w-0 font-medium">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 w-0 font-medium">
                    Solution
                  </th>
                </tr>
              </thead>
            )}
            <ProblemsTable setLoadingProblems={setLoadingProblems} />
          </table>
        </div>

        {/* TEMP TABLE! */}
        {/* <form
          className="flex flex-col p-6 max-w-sm gap-3"
          onSubmit={handleSubmit}
        >
          <input
            name="id"
            placeholder="problem id"
            type="text"
            onChange={handleChangeInput}
          />
          <input
            name="title"
            placeholder="title"
            type="text"
            onChange={handleChangeInput}
          />
          <input
            name="difficulty"
            placeholder="difficulty"
            type="text"
            onChange={handleChangeInput}
          />
          <input
            name="category"
            placeholder="category"
            type="text"
            onChange={handleChangeInput}
          />
          <input
            name="order"
            placeholder="order"
            type="text"
            onChange={handleChangeInput}
          />
          <input
            name="videoId"
            placeholder="videoId?"
            type="text"
            onChange={handleChangeInput}
          />
          <input
            name="link"
            placeholder="link?"
            type="text"
            onChange={handleChangeInput}
          />
          <button type="submit">submit</button>
        </form> */}
      </main>
    </>
  );
}

const LoadingSkeleton = () => {
  return (
    <div className="flex items-center space-x-12 mt-4 px-6">
      <div className="w-6 h-6 shrink-0 rounded-full bg-dark-layer-1"></div>
      <div className="h-4 sm:w-52  w-32  rounded-full bg-dark-layer-1"></div>
      <div className="h-4 sm:w-52  w-32 rounded-full bg-dark-layer-1"></div>
      <div className="h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
