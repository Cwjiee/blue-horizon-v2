import Navbar from "@/components/navbar";
import { ScaleLoader, HashLoader } from "react-spinners";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function About() {
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  const handleLoad = (e) => {
    if (e === "load") {
      return <ScaleLoader color="#3649d6" />;
    }
  };

  return !isloading ? (
    <>
      <Navbar>About</Navbar>
      <div className="screen-container">
        <div className="top-section sm:flex justify-between items-start">
          <div className="left-container pt-20">
            <div className="card overflow-hidden shadow-lg max-w-xl rounded-2xl">
              <div className="px-6 pt-14">
                <div className="font-bold text-4xl mb-6">Meet Our Team</div>
                <p className="text-slate-300 leading-7 text-lg">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Blanditiis laborum nobis laboriosam modi numquam odit sed
                  molestias, voluptas dolorum quae ipsam. Perferendis iure est
                  totam ipsum ea error dolores harum? Consequatur totam deserunt
                  nesciunt adipisci ex ea sint laboriosam error. Fuga ad illo
                  impedit beatae inventore. Ipsum perspiciatis odit explicabo
                  labore cumque, repellendus quos temporibus magni unde quam
                  velit voluptas.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden sm:block right-container">
            <Player
              onEvent={handleLoad}
              autoplay
              loop
              src="https://lottie.host/2762460c-07ea-41f5-86f0-0b4c3d5df529/usOSxPZZx4.json"
              style={{ height: "600px", width: "600px", marginRight: 0 }}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-around p-6 gap-10 mt-14 sm:p-0 sm:gap-0 sm:mt-0">
          <div className="card overflow-hidden shadow-lg max-w-lg rounded-2xl text-center bg-slate-800 py-4 px-2 max-h-80 h-[22rem]">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">History</div>
              <hr className="my-4" />
              <p className="text-slate-300 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt veniam neque beatae et impedit officiis, voluptate
                earum quaerat? Magni quia laborum sunt cumque distinctio facilis
                est incidunt molestiae quaerat fugiat.
              </p>
            </div>
          </div>
          <div className="card overflow-hidden shadow-lg max-w-lg rounded-2xl text-center bg-slate-800 py-4 px-2 max-h-80 h-[22rem]">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Mission</div>
              <hr className="my-4" />
              <p className="text-slate-300 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt veniam neque beatae et impedit officiis, voluptate
                earum quaerat? Magni quia laborum sunt cumque distinctio facilis
                est incidunt molestiae quaerat fugiat.
              </p>
            </div>
          </div>
        </div>
        <div className="team">
          <h2 className="font-bold text-4xl text-center mt-16 sm:mt-32">
            Team Members
          </h2>
          <Swiper
            effect={"coverflow"}
            slidesPerView={"auto"}
            pagination={true}
            spaceBetween={30}
            centeredSlides={true}
            modules={[EffectCoverflow, Pagination]}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              480: {
                slidesPerView: 2,
              },
            }}
            className="my-10"
          >
            <SwiperSlide className="ml-2 px-5 sm:ml-5">
              <div className="card overflow-hidden shadow-lg bg-slate-700 max-w-lg h-96 rounded-2xl text-center">
                <div className="px-12 py-4">
                  <div className="font-bold text-xl mb-2">Member 1</div>
                  <p className="text-slate-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt veniam neque beatae et impedit officiis, voluptate
                    earum quaerat? Magni quia laborum sunt cumque distinctio
                    facilis est incidunt molestiae quaerat fugiat.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="ml-2 px-5 sm:ml-5">
              <div className="card overflow-hidden shadow-lg bg-slate-700 max-w-lg h-96 rounded-2xl text-center">
                <div className="px-12 py-4">
                  <div className="font-bold text-xl mb-2">Member 2</div>
                  <p className="text-slate-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt veniam neque beatae et impedit officiis, voluptate
                    earum quaerat? Magni quia laborum sunt cumque distinctio
                    facilis est incidunt molestiae quaerat fugiat.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="ml-2 px-5 sm:ml-5">
              <div className="card overflow-hidden shadow-lg bg-slate-700 max-w-lg h-96 rounded-2xl text-center">
                <div className="px-12 py-4">
                  <div className="font-bold text-xl mb-2">Member 3</div>
                  <p className="text-slate-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt veniam neque beatae et impedit officiis, voluptate
                    earum quaerat? Magni quia laborum sunt cumque distinctio
                    facilis est incidunt molestiae quaerat fugiat.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
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
