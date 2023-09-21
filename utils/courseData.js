import openWater from "../public/open-water-dive.jpg";
import advancedOpenWater from "../public/advanced-diver.jpg";
import rescueDiver from "../public/rescue-diver.jpg";
import enrichedDiver from "../public/enriched-diver.jpg";
import scubaRefresher from "../public/scuba-refresher.jpg";
import diveTheory from "../public/dive-theory.jpg";

const courseData = [
  {
    name: "Open Water Diver",
    price: 250,
    description:
      "Welcome to the exciting world of scuba diving! The Open Water Diver Certification Course is your gateway to exploring the underwater realm and experiencing the thrill of breathing underwater.",
    src: openWater,
    duration: "4-7 days",
  },
  {
    name: "Advanced Open Water Diver",
    price: 230,
    description:
      "The Advanced Open Water Diver course is all about advancing your skills. You'll practice navigation and buoyancy, try deep diving and make three specialty dives of your choosing (it's like a specialty sampler platter).",
    src: advancedOpenWater,
    duration: "2-3 days",
  },
  {
    name: "Rescue Diver",
    price: 245,
    description:
      "The PADI® Rescue Diver course will change the way you dive – in the best possible way. Learn to identify and fix minor issues before they become big problems, gain a lot of confidence and have serious fun along the way.",
    src: rescueDiver,
    duration: "4-7 days",
  },
  {
    name: "Enriched Air (Nitrox) Diver",
    price: 250,
    description:
      "Enriched air, also known as nitrox or EANx, contains less nitrogen than regular air. Breathing less nitrogen means you can enjoy longer dives and shorter surface intervals. No wonder Enriched Air Diver is the most popular PADI® specialty.",
    src: enrichedDiver,
    duration: "1-2 days",
  },
  {
    name: "ReActivate Scuba Refresher Program",
    price: 110,
    description:
      "ReActivate is the engaging, efficient way to refresh your dive knowledge and scuba skills. Move quickly through topics you know well, dive deeper on topics where your knowledge may have lapsed.",
    src: scubaRefresher,
    duration: "2-6 hours",
  },
  {
    name: "Dive Theory",
    price: 120,
    description:
      "Dive Theory will dramatically expand your understanding of dive physics, physiology, equipment, decompression theory and dive planning.",
    src: diveTheory,
    duration: "9-12 hours",
  },
];

export default courseData;
