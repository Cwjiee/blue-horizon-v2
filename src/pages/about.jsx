import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ScaleLoader, HashLoader } from "react-spinners";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import Image from "next/image";
import instructorData from "../../utils/instructorsData";
import { v4 } from "uuid";

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
      <div className="lg:px-48">
        <Navbar>About</Navbar>
        <div className="screen-container">
          <div className="top-section sm:flex justify-between items-start">
            <div className="left-container pt-20">
              <div className="card overflow-hidden shadow-lg max-w-xl rounded-2xl">
                <div className="px-6 pt-14">
                  <div className="font-bold text-4xl mb-6">Meet Our Team</div>
                  <p className="text-slate-300 leading-7 text-lg">
                    Our team at Blue Horizon diving school is a tight-knit group
                    of experienced and passionate scuba diving professionals.
                    With years of underwater exploration under our belts,
                    we&#39;re here to guide you on your diving journey. Each
                    team member is dedicated to safety, education, and
                    environmental conservation, ensuring that every dive is both
                    thrilling and responsible. Meet the team that&#39;s
                    committed to making your scuba diving experiences
                    unforgettable.
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
                  Founded in 2023, Blue Horizon diving school
                  has been a hub for scuba diving enthusiasts ever since.
                  We&#39;ve grown and evolved, but our passion for underwater
                  exploration remains unwavering. Over the years, we&#39;ve
                  become a trusted source of diving education and adventure,
                  leaving a lasting imprint on the diving community.
                </p>
              </div>
            </div>
            <div className="card overflow-hidden shadow-lg max-w-lg rounded-2xl text-center bg-slate-800 py-4 px-2 max-h-80 h-[22rem]">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Mission</div>
                <hr className="my-4" />
                <p className="text-slate-300 text-justify">
                  At Blue Horizon diving school, our mission is crystal clear:
                  to empower individuals to explore and appreciate the
                  underwater world responsibly. We&#39;re committed to providing
                  top-quality scuba diving education while emphasizing safety
                  and environmental conservation. Our goal is to equip divers
                  with the skills and knowledge they need to enjoy the
                  underwater realm while actively contributing to its
                  preservation. Join us in our mission to dive with purpose and
                  protect our oceans for future generations.
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
              {instructorData.map((member) => {
                return (
                  <SwiperSlide key={v4()} className="ml-2 px-5 sm:ml-5">
                    <div className="card overflow-hidden shadow-lg bg-slate-700 max-w-lg h-[28rem] sm:h-96 rounded-2xl text-center">
                      <div className="px-12 py-4 flex flex-col justify-center">
                        <div className="mx-auto w-[300px] object-cover rounded-lg mb-2">
                          <Image
                            src={member.src}
                            alt={member.name}
                            className="rounded-xl"
                          />
                        </div>
                        <div className="font-bold text-xl mb-2">
                          {member.name}
                        </div>
                        <p className="text-slate-300">{member.experience}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
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
