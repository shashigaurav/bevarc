"use client";
import { Calendar, Lock, Mail, Wrench, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-black md:p-4 md:py-2 p-2 shadow-md sticky top-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            alt="Bevarc"
            width={128}
            height={137}
            className="aspect-[128/137] w-16 h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="text-white md:block hidden">
          <ul className="flex md:gap-6 gap-4">
            <li>
              <Link
                href={"/admin"}
                className="flex items-center gap-2 hover:text-accent transition"
              >
                <Lock className="w-4 h-4" />
                <span>Admin</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/#services"}
                className="flex items-center gap-2 hover:text-accent transition"
              >
                <Wrench className="w-4 h-4" />
                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/#contact"}
                className="flex items-center gap-2 hover:text-accent transition"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/booking"}
                className="flex items-center gap-2 hover:text-accent transition"
              >
                <Calendar className="w-4 h-4" />
                <span>Booking</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden block"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-black text-white">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <Link
                href={"/admin"}
                className="flex items-center gap-2 hover:text-accent transition"
                onClick={toggleMobileMenu}
              >
                <Lock className="w-4 h-4" />
                <span>Admin</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/#services"}
                className="flex items-center gap-2 hover:text-accent transition"
                onClick={toggleMobileMenu}
              >
                <Wrench className="w-4 h-4" />
                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/#contact"}
                className="flex items-center gap-2 hover:text-accent transition"
                onClick={toggleMobileMenu}
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/booking"}
                className="flex items-center gap-2 hover:text-accent transition"
                onClick={toggleMobileMenu}
              >
                <Calendar className="w-4 h-4" />
                <span>Booking</span>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
