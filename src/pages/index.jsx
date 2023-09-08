import Navbar from '@/components/navbar'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import openWater from '../../public/open-water-dive.jpg';
import advancedOpenWater from '../../public/advanced-diver.jpg';
import rescueDiver from '../../public/rescue-diver.jpg';
import enrichedDiver from '../../public/enriched-diver.jpg';

export default function Home() {

  return (
    <>
      <div class="h-[100vh]">
        <Navbar />
        <div class="w-full m-auto mt-40">
              <h1 class="text-7xl font-bold tracking-wide text-center keep-all leading-normal w-[80%] mx-auto">
                  Embark on an Epic Sea Dive Adventure!
              </h1>
              <p class="w-[45%] mx-auto text-center tracking-wide keep-all mt-6">
                  Explore the mysteries of the ocean
                  with our experienced dive instructors.
                  We offer a wide range of courses for
                  all levels of divers.
              </p>
          </div>
          <div class="w-full flex justify-center mt-16">
              <button id="discoverBtn" class="bg-sky-600 py-4 px-7 rounded-full active:bg-sky-700">Discover More</button>
          </div>
      </div>

      <div class="h-[100vh]">
        <div class="flex flex-col gap-5 mb-14">
            <h1 class="mt-10 text-5xl font-bold text-left keep-all leading-snug w-[48%]">
                Explore The Wonders Of Sea Diving With Us!
            </h1>
            <p class="keep-all w-[45%]">
                Are you ready to plunge into the majestic depths of the underwater world? Look no further!
            </p>
        </div>
        <Swiper
          slidesPerView={'2'}
          spaceBetween={30}
          centeredSlides={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><Image src={openWater} alt='open-water' width={500} height={500} className='rounded-xl' /></SwiperSlide>
          <SwiperSlide><Image src={advancedOpenWater} alt='open-water' width={500} height={500} className='rounded-xl' /></SwiperSlide>
          <SwiperSlide><Image src={rescueDiver} alt='open-water' width={500} height={500} className='rounded-xl' /></SwiperSlide>
          <SwiperSlide><Image src={enrichedDiver} alt='open-water' width={500} height={500} className='rounded-xl' /></SwiperSlide>
        </Swiper>
        <div class="w-full flex justify-center mt-10">
            <button id="exploreBtn" class="bg-sky-600 py-4 px-7 rounded-full active:bg-sky-700">Explore More</button>
        </div>
    </div>
    </>
  )
}
