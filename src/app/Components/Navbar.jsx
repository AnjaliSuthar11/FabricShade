"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-xl  shadow-md fixed w-full top-0 z-50 p-3">
      <div className="container mx-auto flex justify-between items-center p-4 md:px-30">
        {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png" // 👉 put your logo image in public/logo.png
            alt="ShopEase Logo"
            width={100}
            height={40}
            style={{ width: 100, height: 40 }}
            className="rounded"
          />
         
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/about-us" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/all-products" className="hover:text-blue-600">
          Products
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>

         
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link
            href="/"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/all-products"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/about-us"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          
        </div>
      )}
    </nav>
  );
}
