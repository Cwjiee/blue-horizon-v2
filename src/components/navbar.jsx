import Image from "next/image";
import Links from "./Links";
import { v4 } from "uuid";
import Logo from "../../public/logo.svg";
import Link from "next/link";

export default function Navbar({ children }) {
  const links = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/courses",
      label: "Courses",
    },
    {
      href: "/about",
      label: "About",
    },
  ];

  const openNav = () => {
    const navbar = document.querySelector(".navbar-menu");
    navbar.classList.toggle("hidden");
  };

  const closeNav = () => {
    const navbar = document.querySelector(".navbar-menu");
    navbar.classList.toggle("hidden");
  };

  return (
    <>
      <nav className="flex justify-between items-center h-[10vh] bg-slate-900 text-white text-sm md:text-lg">
        <div className="ml-2">
          <Link href="/">
            <Image src={Logo} alt="logo" width={200} height="auto" />
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-white p-3"
            onClick={openNav}
          >
            <svg
              className="block h-6 w-10 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div className="hidden justify-between items-center gap-10 md:flex">
          <ul id="navbar" className="flex justify-between gap-10">
            {links.map((link) => {
              return (
                <li key={v4()}>
                  <Links link={link} current={children} />
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact"
            className="px-5 py-2 bg-sky-600 hover:bg-sky-700 rounded-full"
          >
            Contact Us
          </Link>
        </div>
      </nav>
      <div className="navbar-menu relative z-50 hidden">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <Image src={Logo} alt="logo" width={200} height="auto" />
            </a>
            <button className="navbar-close" onClick={closeNav}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              {links.map((link) => {
                return (
                  <li className="mb-1" key={v4()}>
                    <Link
                      className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <Link
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl"
                href="./contact"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
