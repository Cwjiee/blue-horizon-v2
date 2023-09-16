import Image from "next/image";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import courseData from "../../utils/courseData";
import v4 from "uuid";

export default function Courses() {
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);
  return !isloading ? (
    <>
      <Navbar>Courses</Navbar>
      <div className="py-[50px]">
        <h1 className="text-4xl px-10 font-bold md:text-5xl md:px-0">
          Courses
        </h1>
        <div className="flex flex-wrap justify-center gap-16 mt-12">
          {courseData.map((course) => {
            return (
              <div
                key={v4}
                className="overflow-hidden shadow-lg bg-slate-700 max-w-[18rem] rounded-2xl h-[490px] relative"
              >
                <Image
                  src={course.src}
                  alt={course.name}
                  width={400}
                  height={400}
                />
                <div className="px-6 py-4 pb-2">
                  <div className="font-bold text-xl mb-2">{course.name}</div>
                  <p className="text-slate-200 leading-5 pt-2">
                    {course.description}
                  </p>
                </div>
                <div className="px-6 pt-2 pb-2 absolute bottom-0">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    RM {course.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  ) : (
    <div className="w-full h-[100vh] flex justify-center item-center">
      <HashLoader
        color="#1c48bc"
        size={150}
        cssOverride={{ display: "block", margin: "auto" }}
      />
    </div>
  );
}
