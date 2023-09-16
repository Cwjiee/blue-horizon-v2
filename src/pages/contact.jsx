import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HashLoader from "react-spinners/HashLoader";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useEffect, useState } from "react";

export default function Contact() {
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  return !isloading ? (
    <>
      <div className="lg:px-48">
        <Navbar>Contact</Navbar>
        <div className="h-[90vh] py-[50px]">
          <h1 className="text-4xl px-6 font-bold md:text-5xl md:px-0">
            Contact Us
          </h1>
          <div className="flex flex-col w-full sm:flex-row px-6 sm:px-0 mt-2">
            <div className="pb-12 sm:w-1/2">
              <p className="mt-1 text-sm leading-6 text-gray-500">
                Use a permanent address where you can receive mail.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="false"
                      className="block bg-slate-800 w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none px-4"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="false"
                      className="block bg-slate-800 w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none px-4"
                    />
                  </div>
                </div>

                <div className="sm:col-span-5">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="false"
                      className="block bg-slate-800 w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none px-4"
                    />
                  </div>
                </div>

                <div className="sm:col-span-5 mt-2">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6"
                  >
                    Inqueries
                  </label>
                  <textarea
                    id="about"
                    name="about"
                    rows={5}
                    className="block bg-slate-800 w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none px-4 mt-2"
                    defaultValue={""}
                    autoComplete="false"
                  />
                </div>
              </div>
            </div>
            <div className="w-1/2">
              {/* <div className="">
              <a href="mailto:jackchong398@gmail.com">email</a>
            </div> */}
              <div className="hidden sm:block">
                <Player
                  autoplay
                  loop
                  src="https://lottie.host/cd1ebb99-bb03-4e55-b075-c4713838fffa/qmjYTaF7KA.json"
                  style={{ height: "500px", width: "500px" }}
                >
                  <Controls
                    visible={false}
                    buttons={["play", "repeat", "frame", "debug"]}
                  />
                </Player>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
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
