import { worldMap } from "@/assets/images";
import Image from "next/image";

const GlobalReach = () => {
  return (
    <section className="pt-12 md:pt-[104px] overflow-hidden ">
      <div >
        <div className="padding-x flex flex-col items-center justify-center">
          <div className="rounded-full py-1.5 px-3 bg-secondary/15">
            <p className="text-xs text-secondary font-medium leading-4.5">
              Our Global Reach
            </p>
          </div>
          <h2 className="sub-heading mt-3 md:mt-4 font-semibold text-center">
            Reaching Nations. Transforming Lives.
          </h2>
          <p className="text-base md:leading-6 max-w-[682px] mt-4 md:mt-3 text-center text-neutral-700 max-md:text-sm">
            From cities to remote communities, lives are being transformed
            through outreaches, fellowships, and global crusades every day.
          </p>
        </div>

        <div className="mt-8 md:mt-9 md:padding-x flex flex-col items-center justify-center">
          <div className="relative h-[305px] w-full max-w-[782px]">
            <div className="absolute left-1/2 h-80 xs:h-100 sm:h-100  w-[140%]  sm:w-[110vw] md:w-full  transform -translate-x-1/2 semi-circle bg-secondary-light rounded-fullmx-auto" />
            <Image
              src={worldMap}
              alt="world map"
              className="size-full object-cover"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
