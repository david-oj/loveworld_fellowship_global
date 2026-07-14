import { lgfOrdination } from "@/assets/images";
import Image from "next/image";
import { Button } from "../ui/button";

const JoinTheFellowship = () => {
  return (
    <section className="padding-x padding-y bg-secondary">
      <div className="flex flex-col md:flex-row justify-between max-w-[1020px] mx-auto gap-6 lg:gap-16 items-center text-white">
        <div className="flex-1">
          <p className="text-xs text-primary italic  w-fit px-2 py-0.5 rounded-full max-md:mx-auto">
            Join The Fellowship
          </p>
          <h2 className="sub-heading max-md:text-center max-md:mt-2">
            Join The Loveworld Global Fellowship
          </h2>
          <p className="mt-2 md:mt-4 text-sm font-light max-md:text-center max-w-[430px] md:max-w-[440px]">
            Connect with believers across nations, participate in{" "}
            <br className="max-lg:hidden" /> life-changing programs, and be a
            part of a global movement impacting lives every day.
          </p>
          <div className="w-fit! max-md:mx-auto!">
            <Button className="mt-4 w-full! ">Join</Button>
          </div>
        </div>

        <div className="relative md:flex-1 h-[28vw] max-h-[299px] min-h-[200px] w-full max-w-[495px] rounded-xl overflow-hidden">
          <Image
            src={lgfOrdination}
            alt="A gosple christian crusade "
            className="size-full object-cover"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default JoinTheFellowship;
