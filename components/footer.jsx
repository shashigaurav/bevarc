import { Calendar, Home, Mail, Map, Phone, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col p-6 items-center ">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 container bg-black text-white">
        <div className="flex flex-col gap-4 items-center">
          <Image
            src={"/logo.svg"}
            width={100}
            height={100}
            objectFit="contain"
            alt="Logo"
          />
          <div className="text-gray-400 text-sm ">
            <div className="flex items-start gap-2  hover:text-accent">
              <Map className="w-4 h-4 shrink-0 transition-colors" />
              <span>
                <p className="transition-colors">B-Hub, BSFC Building,</p>
                <p className="transition-colors">Frazer Road, Patna, 800001</p>
              </span>
            </div>
            <div className="flex items-center gap-2 hover:text-accent">
              <Mail className="w-4 h-4 shrink-0 transition-colors" />
              <a className="transition-colors" href="mailto:contact@bevarc.com">
                contact@bevarc.com
              </a>
            </div>
            <div className="flex gap-2 items-center hover:text-accent">
              <Phone className="w-4 h-4 shrink-0 transition-colors" />
              <a className="transition-colors" href="tel:+918207523052">
                +91 8207523052
              </a>
            </div>
            <div className="flex gap-2 items-center hover:text-accent">
              <Phone className="w-4 h-4 shrink-0 transition-colors" />
              <a className="transition-colors" href="tel:+9608524728">
                +91 9608524728
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li>
              <Link
                href={"#services"}
                className="flex items-center gap-2 hover:text-accent transition"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                href={"#services"}
                className="flex items-center gap-2 hover:text-accent transition"
              >
                <Wrench className="w-4 h-4" />
                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link
                href={"#contact"}
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
        </div>
      </div>
      <p className="text-bold underline bg-black w-full text-center p-3">Code Uploaded on: <a className="text-accent" href="http://https://github.com/shashigaurav/bevarc" target="_blank" rel="noopener noreferrer">Github</a></p>
      <p className="text-sm bg-black w-full text-center p-3">&copy; 2024. All Rights are Reserved.</p>
    </footer>
  );
};

export default Footer;
