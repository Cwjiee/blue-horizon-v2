import Image from "next/image";
import Link from "./Links";
import { v4 } from "uuid";
import Logo from "../../public/logo.svg"

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
    {
      href: "/contact",
      label: "Contact",
    },
  ];

  return (
    <nav className="justify-center items-center h-[10vh] bg-slate-900 text-white text-sm hidden sm:flex md:justify-between md:text-lg">
      <div className="hidden md:block">
        <a href="#">
          <Image src={Logo} alt="logo" width={230} height={230} />
        </a>
      </div>
      <div className="flex justify-between items-center gap-10">
        <ul id="navbar" className="flex justify-between gap-10">
          {links.map((link) => {
            return (
              <li key={v4()}>
                <Link link={link} current={children} />
              </li>
            );
          })}
        </ul>
        <button className="px-5 py-2 bg-sky-600 hover:bg-sky-700 rounded-full">
          Get Started
        </button>
      </div>
    </nav>
  );
}
