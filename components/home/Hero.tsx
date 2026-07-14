"use client";

import { lfgBackground } from "@/assets/images";
import Image from "next/image";
import { Button } from "../ui/button";
import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 0.3;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.3,
        rootMargin: "100px",
      },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="padding-x relative h-[calc(100vh)]">
      <div className="h-full w-full absolute inset-0 ">
        <Image
          src={lfgBackground}
          alt="hero background image"
          className="size-full object-cover -z-1  "
          fill
          // sizes="100vw"
        />

        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-1 opacity pointer-events-none mix-blend-screen"
        >
          <source src="/fire_burning_hot_sparks.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="h-full w-full z-30 bg-linear-to-b to-90% to-black/40 " />
      </div>

      <div className="pt-25 relative h-full flex flex-col justify-center md:justify-end max-md:items-center pb-[64px] lg:pb-20 ">
        <h1 className="font-semibold text-[32px] max-md:leading-[38px] md:text-4xl max-sm:font-bold text-white max-md:text-center">
          Loveworld Global <br className="" /> Fellowship
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
