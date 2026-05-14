import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { upwardConference } from "@/assets/images";

const Sponsorship = () => {
  return (
    <section className="pl-4 md:pl-16 lg:pl-20 padding-">
      <div className="flex flex-row-reverse gap-3 md:gap-8 xl:gap-[10vw] 2xl:gap-[13vw] justify-center items-center">
        <div className="relative flex-1 h-[482px] md:h-[528px] lg:h-[608px] max-w-[600px]">
          <Image
            src={upwardConference}
            alt="sponsorship section image"
            className="size-full object-cover"
            fill
          />
        </div>

        <div className="flex-1 flex justify-end">
          <div className="">
            <h2 className="sub-heading max-md:text- max-md:mt-2">
              Partner With The <br className="max-lg:hidden" /> Vision
            </h2>
            <div className="mt-1 md:mt-2 h-px w-full max-w-[546px] bg-black" />
            <p className="mt-2 md:mt-4 text-xs md:text-sm font-light max-md:text- max-w-[430px] md:max-w-[400px] text-justify ">
              Join us in taking the message to the world.Your partnership
              supports vital programs, bringing hope where it’s needed most.
            </p>

            <ul className="mt-4 w-fit max-md:mx- grid gap-x-4 lg:gap-x-6 gap-y-1 lg:gap-y-3 md:grid-cols-2 max-w">
              <li className="text-xs md:text-sm md:leading-5.5 flex gap-2 items-center">
                <div className="size-2 bg-primary" />
                Global Outreaches.
              </li>
              <li className="text-xs md:text-sm leading-4.5 md:leading-5.5 flex gap-2 items-center">
                <div className="size-2 bg-primary" />
                Taking the Gospel to New Territories.
              </li>
              <li className="text-xs md:text-sm leading-4.5 md:leading-5.5 flex gap-2 items-center">
                <div className="size-2 bg-primary" />
                Large-Scale Crusades & Gatherings.
              </li>
              <li className="text-xs md:text-sm leading-4.5 md:leading-5.5 flex gap-2 items-center">
                <div className="size-2 bg-primary" />
                Global Broadcast & Digital Reach.
              </li>
              <li className="text-xs md:text-sm leading-4.5 md:leading-5.5 flex gap-2 items-center">
                <div className="size-2 bg-primary" />
                Training & Equipping Believers.
              </li>
            </ul>
            <div className="w-fit! max-md:mx-! mt-1">
              <Button className="mt-4 w-full hover:bg-primary/30 duration-300 rounded-md ">
                Partner Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;
