import Navbar from "@/components/navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import openWater from "../../public/open-water-dive.jpg";
import advancedOpenWater from "../../public/advanced-diver.jpg";
import rescueDiver from "../../public/rescue-diver.jpg";
import enrichedDiver from "../../public/enriched-diver.jpg";
import Router from "next/router";
import { Link, animateScroll as scroll } from "react-scroll";
import HashLoader from "react-spinners/HashLoader";
import { useEffect, useState } from "react";
import snorkel from "../../public/snorkel.png";
import coral from "../../public/coral.png";
import vest from "../../public/vest.png";
import oxygen from "../../public/oxygen-tank.png";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function Home() {
  const [isloading, setIsLoading] = useState(true);

  const toCourses = () => Router.push("/courses");
  const toContact = () => Router.push("/contact");
  const toAbout = () => Router.push("/about");

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  return !isloading ? (
    <>
      <div className="h-[85vh] sm:h-[100vh]">
        <Navbar>Home</Navbar>
        <div className="h-[90vh] pt-28">
          <div className="w-full m-auto">
            <h1 className="text-4xl font-bold tracking-wide text-center keep-all leading-normal w-[80%] mx-auto md:text-7xl">
              Embark on an Epic Sea Dive Adventure!
            </h1>
            <p className="w-[45%] mx-auto text-center tracking-wide keep-all mt-6">
              Explore the mysteries of the ocean with our experienced dive
              instructors. We offer a wide range of courses for all levels of
              divers.
            </p>
          </div>
          <div className="w-full flex justify-center mt-16">
            <Link
              className="bg-sky-600 py-4 px-7 rounded-full active:bg-sky-700 cursor-pointer"
              activeClass="active"
              to="courseSection"
              spy={true}
              smooth="true"
              duration={500}
            >
              Discover More
            </Link>
          </div>
        </div>
      </div>

      <div className="h-[90vh] sm:h-[100vh] mt-40 sm:mt-20">
        <div
          id="courseSection"
          className="flex flex-col gap-5 mb-14 scroll-smooth active"
        >
          <h1
            id="down"
            className="mt-10 text-3xl font-bold text-center keep-all leading-snug w-[80%] m-auto md:text-5xl md:text-left md:w-[48%] md:m-0"
          >
            Explore The Wonders Of Sea Diving With Us!
          </h1>
          <p className="keep-all w-[80%] m-auto md:w[45%] md:m-0 md:w-[48%] text-gray-400 text-center sm:text-left">
            Are you ready to plunge into the majestic depths of the underwater
            world? Look no further!
          </p>
        </div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          centeredSlides={true}
          loop
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <Image
              src={openWater}
              alt="open-water"
              className="rounded-xl w-[90%] mx-auto md:w-[90%]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={advancedOpenWater}
              alt="advanced-open-water"
              className="rounded-xl w-[90%] mx-auto md:w-[90%]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={rescueDiver}
              alt="rescue-diver"
              className="rounded-xl w-[90%] mx-auto md:w-[90%]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={enrichedDiver}
              alt="enriched-diver"
              className="rounded-xl w-[90%] mx-auto md:w-[90%]"
            />
          </SwiperSlide>
        </Swiper>
        <div className="w-full flex justify-center mt-10 sm:mt-16">
          <button
            id="exploreBtn"
            className="bg-sky-600 py-4 px-7 rounded-full active:bg-sky-700"
            onClick={toCourses}
          >
            Explore More
          </button>
        </div>
      </div>

      <div className="h-[80vh] px-10 mt-18 sm:mt-20">
        <div className="section sm:flex flex-row justify-between">
          <div className="left-section flex flex-col gap-8 sm:w-1/2 pt-12">
            <div className="top-left-section">
              <h1 className="mt-10 text-3xl font-bold text-center keep-all leading-snug m-0 md:text-5xl md:text-left md:m-0">
                About us
              </h1>
            </div>
            <div className="bottom-right-section">
              <p className="keep-all mx-2 sm:m-auto md:m-0 text-gray-400 text-center sm:text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione cum incidunt quasi, est tempore, tempora omnis nesciunt
                molestiae eum modi, maiores aut. Quos placeat nam assumenda
                beatae dicta sint iste. Aliquid animi necessitatibus, commodi
                voluptatibus consequatur fugiat sunt labore non earum reiciendis
                in beatae cum aliquam impedit doloremque iste incidunt rerum.
                Facere similique deleniti itaque dicta excepturi nesciunt
                aspernatur voluptatem?
              </p>
            </div>
            <div className="bottom-bottom-right-section mt-2 sm:mt-10 mx-auto sm:mx-0">
              <button
                className="bg-sky-600 py-4 px-8 rounded-full active:bg-sky-700"
                onClick={toAbout}
              >
                About Us
              </button>
            </div>
          </div>
          <div className="right-section hidden sm:block">
            <Player
              autoplay
              loop
              src="https://lottie.host/c7732f55-3341-4e0f-ae0b-8755b78fdd48/hutUKknGbA.json"
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

      <div className="h-[90vh] sm:h-[100vh] flex flex-row mt-0 sm:mt-20 px-10">
        <div className="flex flex-col gap-10 sm:w-[50%] mt-20">
          <h1 className="mt-10 text-3xl font-bold text-center keep-all leading-snug m-0 md:text-5xl md:text-left md:m-0">
            Why Choose Us?
          </h1>
          <p className="keep-all mx-2 sm:m-auto md:m-0 text-gray-400 text-center sm:text-left">
            We are a team of experienced divers who are passionate about
            exploring the underwater world. We are committed to providing you
            with the best diving experience.
          </p>
          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-2">
              <Image
                src={snorkel}
                alt="snorkel"
                width={40}
                height={40}
                style={{
                  filter:
                    "invert(100%) sepia(100%) saturate(10000%) hue-rotate(180deg)",
                }}
                className="m-auto sm:m-0"
              />
              <h3 className="font-semibold text-center sm:text-left">
                Professional Guidance
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              <Image
                src={coral}
                alt="coral"
                width={40}
                height={40}
                style={{
                  filter:
                    "invert(100%) sepia(100%) saturate(10000%) hue-rotate(180deg)",
                }}
                className="m-auto sm:m-0"
              />
              <h3 className="font-semibold text-center sm:text-left">
                Eco-friendly
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              <Image
                src={vest}
                alt="vest"
                width={40}
                height={40}
                style={{
                  filter:
                    "invert(100%) sepia(100%) saturate(10000%) hue-rotate(180deg)",
                }}
                className="m-auto sm:m-0"
              />
              <h3 className="font-semibold text-center sm:text-left">Safety</h3>
            </div>
            <div className="flex flex-col gap-2">
              <Image
                src={oxygen}
                alt="oxygen tank"
                width={40}
                height={40}
                style={{
                  filter:
                    "invert(100%) sepia(100%) saturate(10000%) hue-rotate(180deg)",
                }}
                className="m-auto sm:m-0"
              />
              <h3 className="font-semibold text-center sm:text-left">
                Advance Equipment
              </h3>
            </div>
          </div>
          <button
            id="exploreBtn"
            className="bg-sky-600 py-3 rounded-full active:bg-sky-700 sm:hidden"
            onClick={toContact}
          >
            Contact Us
          </button>
        </div>
        <div className="hidden sm:flex flex-col items-center">
          {/* <p id="hiddenText" className="hidden text-white text-lg">
            fun fact: there is no fun fact!
          </p> */}
          <div
            // onMouseOver={() =>
            //   document.getElementById("hiddenText").classList.remove("hidden")
            // }
            // onMouseOut={() =>
            //   document.getElementById("hiddenText").classList.add("hidden")
            // }
            className="mb-0 hidden sm:block"
          >
            <Player
              autoplay
              loop
              src="https://lottie.host/78ee22b5-e5f2-4385-a9e5-512f5b291fce/4v5uIZVdXU.json"
              style={{ height: "400px", width: "400px" }}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </div>

          <button
            className="bg-sky-600 py-4 px-7 rounded-full active:bg-sky-700"
            onClick={toContact}
          >
            Contact Us
          </button>
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
