import { ceLogo } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="padding-x absolute top-8 w-full z-10 text-white">
      <div className="flex justify-between items-center">
        <Image src={ceLogo} alt="Christ Embassy Logo" width={48} height={48} />

        <nav className="max-sm:hidden">
          <ul className="flex gap-8">
            <li>
              <Link href="#" className="">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="">
                Programs
              </Link>
            </li>
            <li>
              <Link href="#" className="">
                Impact
              </Link>
            </li>
            <li>
              <Link href="#" className="">
                Join
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
