"use client"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { HiMenu, HiX } from "react-icons/hi"
import logo from "@/public/images/logo.png"

const Header = () => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)


  const menuName = [
    { name: "Home", path: "/" },
    { name: "Books", path: "/books" },
    { name: "Characther", path: "/characther" },
    { name: "World", path: "/world" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ]

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto"
  }, [menuOpen])



useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY

    if (currentScrollY < 80) {
      setShowHeader(true)
      setLastScrollY(currentScrollY)
      return
    }

    const diff = currentScrollY - lastScrollY

    if (diff > 0) {
      if (currentScrollY > 100 && currentScrollY < 700) {
        setShowHeader(false)
      }

      if (currentScrollY >= 700) {
        setShowHeader(true)
      }
    }

    setLastScrollY(currentScrollY)
  }

  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)
}, [lastScrollY])





  return (
    <>
      {/* HEADER BAR */}
      <header
        className={`fixed top-0 left-0 w-full z-100 bg-black/60 backdrop-blur-md
  transform transition-all duration-300
  ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" className="w-24">
            <Image src={logo} alt="logo" />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-6 text-sm">
            {menuName.map(link => (
              <Link
                key={link.path}
                href={link.path}
                className={`${pathname === link.path
                  ? "text-white border-b border-white"
                  : "text-gray-400"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(true)}
          >
            <HiMenu size={28} />
          </button>
        </div>
      </header>

      {/* MOBILE FULLSCREEN MENU  */}
      <div
        className={`fixed inset-0 z-999 bg-[#2B2F36]
        transform ${menuOpen ? "translate-y-0" : "-translate-y-full"}
        transition-transform duration-400 md:hidden`}
      >
        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setMenuOpen(false)}
        >
          <HiX size={28} />
        </button>

        <div className="h-full flex flex-col items-center justify-center gap-6 text-lg">
          {menuName.map(link => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Header
