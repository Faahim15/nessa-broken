import logo from "@/public/images/logo.png"
import Image from "next/image"
import Link from "next/link"


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
        <div className="bg-[#0C0E0F] py-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
                    <div className="space-y-5">
                        <Image src={logo} height={500} width={500} alt="logo" className="h-19 w-34.5" />
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
                                    <span className="w-1 h-1 bg-white rounded-full mr-3 flex-shrink-0"></span>
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

                    </div>
                    <div></div>
                </div>
                {/* Copyright section */}

            </div>
        </div>
    )
}

export default Footer