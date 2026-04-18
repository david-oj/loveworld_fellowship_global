import { lfgBackground } from "@/assets/images";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="padding-x relative h-[calc(100vh-100px)]">
      <div className="h-full w-full absolute inset-0 ">
        <Image
          src={lfgBackground}
          alt="hero background image"
          className="size-full object-cover -z-1"
          fill
        />
        {/* Dark overlay */}
        <div className="h-full w-full z-30 bg-linear-to-b to-90% to-black/50 " />
      </div>

      <div className="pt-25 relative h-full flex flex-col justify-center md:justify-end max-md:items-center pb-[64px] lg:pb-20 ">
        <h1 className="font-semibold text-[32px] max-md:leading-[38px] md:text-4xl max-sm:font-bold text-white max-md:text-center">
          Loveworld Fellowship <br className="" /> Global
        </h1>
        <p className="text-white mt-2 md:mt-4 max-md:text-center max-w-[340px] md:max-w-[360px] text-sm">
          Spreading the gosple to the ends of the earth, it is a race for the
          last man!
        </p>
        <div className="flex gap-4 mt-6">
          <Button className="bg-primary/70 backdrop-blur-xs py-5 px-3 border-white/40 rounded-full">
            Watch Live
          </Button>
          <Button className="py-5 px-3 rounded-full backdrop-blur-xs bg-white/30 border border-white/40">
            Join The Fellowship
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
