"use client";

import { ceLogo } from "@/assets/images";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

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

        {/* Mobile nav */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="sm:hidden">
            <button className="group">
              <Menu className="hover:cursor-pointer block group-data-[state=open]:hidden" />
              <X className="hover:cursor-pointer hidden group-data-[state=open]:block" />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            onCloseAutoFocus={(e) => e.preventDefault()}
            align="end"
            className="mt-1 menu bg-white/30 backdrop-blur-xs text-white border border-white/20"
          >
            <DropdownMenuItem asChild>
              <Link href="#" className="max-sm:text-xs">
                About
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/#upcoming" className="max-sm:text-xs">
                Programs
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#" className="max-sm:text-xs">
                Impact
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#" className="max-sm:text-xs">
                Join
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
