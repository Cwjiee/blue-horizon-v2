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
import coral from "../../public/coral.png"
import vest from "../../public/vest.png"
import oxygen from "../../public/oxygen-tank.png"

export default function Home() {
  const [isloading, setIsLoading] = useState(true);

  const toCourses = () => Router.push("/courses");

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  return !isloading ? (
    <>
      <div className="h-[100vh]">
        <Navbar>Home</Navbar>
        <div className="h-[90vh] pt-20">
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

      <div className="h-[100vh] mt-40">
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
          <p className="keep-all w-[80%] m-auto md:w[45%] md:m-0 md:w-[48%] text-gray-400">
            Are you ready to plunge into the majestic depths of the underwater
            world? Look no further!
          </p>
        </div>
        <Swiper slidesPerView={"auto"} spaceBetween={30} centeredSlides={true} loop 
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            }
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
        <div className="w-full flex justify-center mt-20">
          <button
            id="exploreBtn"
            className="bg-sky-600 py-4 px-7 rounded-full active:bg-sky-700"
            onClick={toCourses}
          >
            Explore More
          </button>
        </div>
      </div>

      <div className="h-[100vh] flex flex-row">
        <div className="flex flex-col gap-10 mb-14 scroll-smooth active w-[50%]">
          <h1 className="mt-10 text-3xl font-bold text-center keep-all leading-snug m-auto md:text-5xl md:text-left md:m-0">
            Why Choose Us?
          </h1>
          <p className="keep-all m-auto md:m-0 text-gray-400">
            We are a team of experienced divers who are passionate about
            exploring the underwater world. We are committed to providing you
            with the best diving experience.
          </p>
          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-2">
              <Image src={snorkel} alt="snorkel" width={40} height={40} style={{ filter: 'invert(100%) sepia(100%) saturate(10000%) hue-rotate(180deg)'}} />
              <h3 className="font-semibold">Professional Guidance</h3>
            </div>
            <div className="flex flex-col gap-2">
              <Image src={coral} alt="coral" width={40} height={40} style={{ filter: 'invert(100%) sepia(100%) saturate(10000%) hue-rotate(180deg)'}} />
              <h3 className="font-semibold">Eco-friendly</h3>
            </div>
            <div className="flex flex-col gap-2">
              <Image src={vest} alt="vest" width={40} height={40} style={{ filter: 'invert(100%) sepia(100%) saturate(10000%) hue-rotate(180deg)'}} />
              <h3 className="font-semibold">Safety</h3>
            </div>
            <div className="flex flex-col gap-2">
              <Image src={oxygen} alt="oxygen tank" width={40} height={40} style={{ filter: 'invert(100%) sepia(100%) saturate(10000%) hue-rotate(180deg)'}} />
              <h3 className="font-semibold">Advance Equipment</h3>
            </div>
          </div>
        </div>
        <div>
        {/* <button
            id="exploreBtn"
            className="bg-sky-600 py-4 px-7 rounded-full active:bg-sky-700"
            onClick={toCourses}
          >
            Contact Us
          </button> */}
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
  )
}
