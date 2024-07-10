'use client'

import React from "react";
import Link from "next/link"

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            {/* LOGO HERE */}
            <Link href="/">
                <p className="text-white">Virtual You</p>
            </Link>
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/email">
                  <p>Email Assistant</p>
                </Link>
              </li>
            </ul>
            {/* PROFILE/LOGIN HERE */ }
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;