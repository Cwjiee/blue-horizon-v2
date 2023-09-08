import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {

    return (
        <nav class="flex justify-between items-center h-[10vh] bg-slate-900 text-white text-lg">
            <div>
                <a href="#">
                    <Image src="../public/logo.svg" alt="logo" width={230} height={230} />
                </a>
            </div>
            <div class="flex justify-between items-center gap-10">
                <ul id="navbar" class="flex justify-between gap-10">
                    <li class="text-sky-600">
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href="/courses">Courses</Link>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <button class="px-5 py-2 bg-sky-600 hover:bg-sky-700 rounded-full">Get Started</button>
            </div>
        </nav>
    )
}