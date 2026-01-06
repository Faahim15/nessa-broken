"use client"
import Image from 'next/image'
import Link from 'next/link'
import  { useState } from 'react'
import logo from "@/public/images/logo.png"
import { usePathname } from 'next/navigation'
import { HiMenu, HiX } from 'react-icons/hi'

const Header = () => {
    const pathName = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    //=== Header Menubar Name == //
    const menuName = [
        { name: "Home", path: "/" },
        { name: "Book", path: "/book" },
        { name: "Characther", path: "/characther" },
        { name: "World", path: "/world" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
    ]


    return (
        <main className='absolute top-0 left-0  w-full z-50 bg-black/45'>

            <nav className='container mx-auto py-2  backdrop-blur-md '>
                <div className="xl:container mx-auto flex items-center justify-between md:px-2 ">
                    {/* Logo  */}
                    <Link href="/" className="flex items-center gap-2 h-13.5 w-24.5">
                        <Image
                            className=""
                            src={logo}
                            height={600}
                            width={600}
                            alt="logo"
                        />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-black transition-transform duration-500"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span
                            className={`transition-transform text-white duration-500 ${menuOpen ? "rotate-90 duration-500" : "rotate-0"
                                }`}
                        >
                            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                        </span>
                    </button>

                    {/* Desktop Menu Bar */}

                    <div className='hidden  md:flex items-center space-x-4 lg:space-x-6'>

                        <div className=" text-[14px] xl:text-[14px]  space-x-4 lg:space-x-6 ">
                            {menuName.map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`hover:text-[#FFFFFF] text-[#9D9A97] transition duration-300 pb-1 ${pathName === link.path
                                        ? "border-b-2 border-[#FFFFFF] text-[#FFFFFF]"
                                        : "border-b-2 border-transparent"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>


                    {/* Mobile responsive  Menu */}
                    <div
                        className={`md:hidden fixed top-0 left-0 w-full h-full bg-[#2B2F36] z-50 flex flex-col items-center justify-center transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
                            } transition-transform duration-500`}
                    >
                        <button
                            className="absolute top-5 right-5 text-white"
                            onClick={() => setMenuOpen(false)}
                        >
                            <HiX size={28} />
                        </button>
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                className="h-12 w-12"
                                src={logo}
                                height={200}
                                width={200}
                                alt="logo"
                            />
                        </Link>

                        <div className="flex flex-col">
                            {menuName.map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    onClick={() => setMenuOpen(!menuOpen)}
                                    className={`hover:text-[#FFFFFF] text-[#9D9A97] transition duration-300 pb-1 ${pathName === link.path
                                        ? " border-[#FFFFFF] text-[#FFFFFF]"
                                        : " border-transparent"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </main>
    )
}

export default Header