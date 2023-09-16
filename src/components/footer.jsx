import Padi from "../../public/padi.svg";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div class="mx-auto mt-20">
        <footer class="p-4 rounded-lg shadow md:px-6 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://www.padi.com/"
              target="_blank"
              class="flex items-center mb-4 sm:mb-0"
            >
              <Image src={Padi} alt="padi-logo" />
            </a>
            <ul class="flex flex-wrap items-center mb-6 sm:mb-0">
              <li>
                <Link
                  href="/courses"
                  class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
                >
                  courses
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  class="text-sm text-gray-500 hover:underline dark:text-gray-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 Blue Horizon. All Rights Reserved.
          </span>
        </footer>
      </div>
    </>
  );
}
