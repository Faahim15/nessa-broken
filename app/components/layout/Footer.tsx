import logo from "@/public/images/logo.png"
import { Input } from "antd";
import Image from "next/image"
import Link from "next/link"
import Button from "../common/Button/Button";
import { LuFacebook } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Book", path: "/book" },
        { name: "Characther", path: "/characther" },
        { name: "World Themes", path: "/world" },
        { name: "Blog & Updates", path: "/blog" },
        { name: "Contact Us", path: "/contact" },
    ];
    return (
        <div className="bg-[#0C0E0F] py-10 px-2 md:px-0">
            <div className="container mx-auto px-2  border-b border-[#2B2F36] pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
                    <div className="space-y-5 ">
                        <Image src={logo} height={500} width={500} alt="logo" className="h-19 w-34.5 " />
                        <div className="space-y-2">
                            <p className="text-[16px]">A fractured reality where identity, lss, and my interwine in stores of profound emotion.</p>
                            <p className="text-[#9D9A97] text-[14px]">"Every Fragment tells a story."</p>
                        </div>
                    </div>
                    {/* Footer Explore section  */}
                    <div className="space-y-5">
                        <p className="text-[20px] font-semibold ">Explore</p>
                        <ul className="space-y-2">
                            {menuItems.map((item) => (
                                <li key={item.name} className="flex items-center">
                                    <span className="w-1 h-1 bg-white rounded-full mr-3 shrink-0"></span>
                                    <Link
                                        href={item.path}
                                        className=" hover:text-gray-300 text-[15px] transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Stay Connected Section */}
                    <div className="space-y-5">
                        <p className="text-[20px] font-semibold ">Stay Connected</p>
                        <p className="text-[#9D9A97] text-[14px]">Subscribe to receive updates about new releases. character insight, and exclusive content</p>
                        <Input className="bg-black" placeholder="Basic usage" />
                        <Button name={"Subscribed"}></Button>
                    </div>
                    {/* Connect With Us */}
                    <div className="space-y-5">
                        <p className="text-[20px] font-semibold ">Connect With Us</p>
                        <p className="text-[#9D9A97] text-[14px]">Follow our journey through the broken world on social media.</p>
                        {/* Social Media logo */}
                        <div className="flex items-center gap-5">
                            <div className="border-[#4F4F59] border p-2 rounded-sm cursor-pointer">
                                <LuFacebook size={25} />
                            </div>
                            <div className="border-[#4F4F59] border p-2 rounded-sm cursor-pointer">
                                <FiTwitter size={25} />
                            </div>
                            <div className="border-[#4F4F59] border p-2 rounded-sm cursor-pointer">
                                <FaInstagram size={25} />
                            </div>
                            <div className="border-[#4F4F59] border p-2 rounded-sm cursor-pointer">
                                <CiMail size={25} />
                            </div>
                        </div>

                    </div>
                </div>


            </div>
            {/* Copyright section */}
            <div className="container mx-auto mt-5 flex flex-col md:flex-row justify-between gap-4 items-center">
                <div>
                    <p className="text-xs md:text-sm text-[#9D9A97]">© 2026 The City Of Feather Fields. All rights reserved.</p>
                </div>
                <div className="flex items-center gap-5 text-xs md:text-sm text-[#9D9A97]">
                    <p>About Us</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Condition</p>
                </div>
            </div>
        </div>
    )
}

export default Footer