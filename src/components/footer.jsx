import Padi from "../../public/Padi_white.svg";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="mx-auto mt-20">
        <footer className="p-4 rounded-lg shadow md:px-6 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-gray-500">certified by</p>
              <a
                href="https://www.padi.com/"
                target="_blank"
                className="flex items-center mb-4 sm:mb-0"
              >
                <Image src={Padi} alt="padi-logo" />
              </a>
            </div>

            <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
              <li>
                <Link
                  href="/courses"
                  className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 Blue Horizon. All Rights Reserved.
          </span>
        </footer>
      </div>
    </>
  );
}
