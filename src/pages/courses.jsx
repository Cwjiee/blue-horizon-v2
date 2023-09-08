import Image from "next/image";
import openWater from "../../public/open-water-dive.jpg";
import advancedOpenWater from "../../public/advanced-diver.jpg";
import rescueDiver from "../../public/rescue-diver.jpg";
import enrichedDiver from "../../public/enriched-diver.jpg";
import scubaRefresher from "../../public/scuba-refresher.jpg"
import diveTheory from "../../public/dive-theory.jpg"
import Navbar from "@/components/navbar";

export default function Courses() {
  return (
    <>
    <Navbar />
    <div className="py-[50px]">
      <h1 className="text-5xl font-bold">Courses</h1>
      <div className="flex flex-wrap justify-center gap-16 mt-12">
        <div class="rounded overflow-hidden shadow-lg bg-white max-w-xs rounded-2xl">
          <Image src={openWater} alt="open-water" width={400} height={400} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              RM1500
            </span>
          </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg bg-white max-w-xs rounded-2xl">
          <Image
            src={advancedOpenWater}
            alt="open-water"
            width={400}
            height={400}
            className="rounded-xl"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              RM1500
            </span>
          </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg bg-white max-w-xs rounded-2xl">
          <Image
            src={rescueDiver}
            alt="open-water"
            width={400}
            height={400}
            className="rounded-xl"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              RM1500
            </span>
          </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg bg-white max-w-xs rounded-2xl">
          <Image
            src={enrichedDiver}
            alt="open-water"
            width={400}
            height={400}
            className="rounded-xl"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              RM1500
            </span>
          </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg bg-white max-w-xs rounded-2xl">
          <Image
            src={scubaRefresher}
            alt="open-water"
            width={400}
            height={400}
            className="rounded-xl"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              RM1500
            </span>
          </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg bg-white max-w-xs rounded-2xl">
          <Image
            src={diveTheory}
            alt="open-water"
            width={400}
            height={400}
            className="rounded-xl"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              RM1500
            </span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
