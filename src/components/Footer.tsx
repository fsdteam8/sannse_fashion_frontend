"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import logoImage from "@/Public/images/logo.svg";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white lg:px-0 px-3 ">
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap justify-between lg:py-[80px] md:py-[60px] py-[50px] gap-10">
        {/* Logo and Description */}
        <div className="w-full lg:w-[400px] mt-6">
          <div className="w-[156px] h-[41px] mb-5">
            <Image
              src={logoImage}
              width={200}
              height={200}
              alt="logoImage"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-[16px] font-normal leading-[150%] text-[#FFFFFF]">
            Lorem ipsum dolor sit amet consectetur. Nisl ut integer eu sit ipsum
            arcu tortor vehicula. Fames dolor nibh cursus pulvinar diam risus.
          </p>
          <div className="flex space-x-4 mt-4">
            <Link
              href="#"
              aria-label="Facebook"
              className="border border-white rounded-full w-10 h-10 flex items-center justify-center"
            >
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white" />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="border border-white rounded-full w-10 h-10 flex items-center justify-center"
            >
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="border border-white rounded-full w-10 h-10 flex items-center justify-center"
            >
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="border border-white rounded-full w-10 h-10 flex items-center justify-center"
            >
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
            </Link>
          </div>
        </div>

        <div className="flex md:flex-nowrap gap-10 lg:gap-[150px] w-full lg:w-auto">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Link</h4>
            <ul className="space-y-[24px] text-sm text-gray-400">
              <li>
                <Link
                  href="#"
                  className="hover:text-white text-[16px] font-normal leading-[150%] text-[#FFFFFF]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white text-[16px] font-normal leading-[150%] text-[#FFFFFF]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white text-[16px] font-normal leading-[150%] text-[#FFFFFF]"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white text-[16px] font-normal leading-[150%] text-[#FFFFFF]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <p className="text-[16px] font-normal leading-[150%] text-[#FFFFFF]">
              208 Olson Boulevard,
            </p>
            <p className="text-[16px] font-normal leading-[150%] text-[#FFFFFF]">
              Toyburgh
            </p>
            <p className="text-[16px] font-normal leading-[150%] text-[#FFFFFF]">
              📞 (303) 555-0105
            </p>
            <p className="text-[16px] font-normal leading-[150%] text-[#FFFFFF]">
              📧 housing@realestate.com
            </p>
          </div>
        </div>

        {/* Subscribe Form */}
        <div className="w-full md:max-w-md">
          <h4 className="text-lg font-semibold mb-4">
            Subscribe for the latest deals
          </h4>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <Button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="container mx-auto mt-8 border-t border-gray-700 py-4 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 gap-2 sm:gap-0">
        <p>© 2025 Drip Swag All rights reserved.</p>
        <div className="flex gap-2">
          <a href="#" className="hover:text-gray-400">
            Privacy Policy
          </a>
          <span>•</span>
          <a href="#" className="hover:text-gray-400">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
