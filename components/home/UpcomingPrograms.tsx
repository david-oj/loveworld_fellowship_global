"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Button } from "../ui/button";
import {
  adcon26,
  crusade,
  lgfOrdination,
  upwardConference,
} from "@/assets/images";
import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  // DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

const cards = [
  {
    purpose: "Conference",
    title: "ADCON 26",
    description: [
      "ADCON 26 was a powerful gathering of believers from across Nigeria and nations including the USA and Pakistan, united in a shared passion for soul winning and Kingdom expansion.",
      "The conference was a true Holy Ghost drilling exercise—marked by deep impartation, spiritual empowerment, and divine direction for greater impact.",
      "Ministrations from the President, Dr. Daysman Oyakhilome, Chris Oyakhilome, and Pastor Biodun Lawal brought a remarkable release of grace and insight, leaving attendees transformed and equipped for the next phase of global evangelism.",
    ],
    image: adcon26,
    action: "Learn More",
  },
  {
    purpose: "Leadership Ordination",
    title: "Loveworld Global Fellowship",
    description: [
      "This landmark gathering marked a significant moment in the advancement of the Loveworld Global Fellowship, as key leadership appointments and ordinations were carried out in alignment with God’s divine agenda for global impact.",
      "The atmosphere was charged with purpose and spiritual intensity, as ministers and fellowship leaders witnessed a defining transition into a new phase of structure, expansion, and coordinated Kingdom advancement.",
      "Led by the President, Dr. Daysman Oyakhilome, alongside Pastor Chris Oyakhilome and Pastor Biodun Lawal, the moment was marked by a profound release of grace, authority, and divine commissioning for greater exploits in ministry.",
      "This was more than an ordination—it was a strategic alignment for the future, positioning the Loveworld Global Fellowship for unprecedented reach, influence, and effectiveness in soul winning across the nations.",
    ],
    image: lgfOrdination,
    action: "Learn More",
  },
  {
    purpose: "Crusade",
    title: "10 in 1 Crusade",
    description: [
      "The 10 in 1 Crusade was a uniquely coordinated evangelistic outreach by the Loveworld Global Fellowship, designed to reach multiple cities at the same time with one unified message of the Gospel.",
      "Structured as a synchronized crusade across different locations, it brought together believers and audiences in a shared, real-time experience—creating a strong atmosphere of unity, faith, and undeniable supernatural manifestations across every center.",
      "Led by Pastor Chris Oyakhilome, the crusade saw lives changed across the various grounds, with many receiving salvation, healing, and tangible encounters with the power of God",
      "What made it truly remarkable was the way each location carried the same intensity and purpose, with thousands being reached simultaneously through one coordinated move of the Spirit.",
    ],
    image: crusade,
    action: "Learn More",
  },
  {
    purpose: "Conference",
    title: "Upward and Forward Only Conference",
    description: [
      "The Upward and Forward Only Conference in Abuja was a powerful multi-day gathering held at the Moshood Abiola National Stadium, bringing together thousands of believers for an unforgettable time of worship, teaching, and spiritual impartation.",
      "The atmosphere carried the scale and intensity of a crusade, with massive turnouts from across Nigeria and beyond. The city of Abuja was stirred as believers gathered in one place to hear the Word, pray, and receive direction for a higher walk in Christ.",
      "Ministering at the conference, Pastor Chris Oyakhilome brought a strong word centered on revelation, spiritual growth, and living the higher life in Christ Jesus, resulting in moments of deep conviction, healing, and renewed faith among attendees.",
      "What unfolded was more than just a meeting — it was a defining encounter that left participants strengthened, reoriented, and ignited for greater impact in their walk with God and the spread of the Gospel.",
    ],
    image: upwardConference,
    action: "Learn More",
  },
];

const UpcomingPrograms = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="upcoming" className="padding-x padding-y bg-secondary/5">
      <div>
        <div className="flex justify-between items-end">
          <h2 className="sub-heading">Upcoming Programs</h2>

          {/* <Button variant="link" className="p-0 h-fit">
            Participate
          </Button> */}
        </div>
        {/* Horizontal bar */}
        <div className="mt-1 md:mt-2 h-px w-full bg-black" />

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={16}
          slidesPerView={1.3}
          loop={cards.length > 3}
          speed={600}
          autoplay={{
            delay: 4000,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="mt-8"
        >
          {cards.map((card, idx) => (
            <SwiperSlide key={idx}>
              <div
                onClick={() => setSelected(card.title)}
                className="relative group p-4 h-[300px] lg:h-[320px] rounded-2xl hover:cursor-pointer overflow-hidden "
              >
                <div className="absolute inset-0 ">
                  <Image
                    src={card.image}
                    alt={card.title}
                    className="size-full object-cover -z-1 transform  group-hover:scale-110  group-active:scale-110 duration-300 transition-all"
                    fill
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-300 transition-all bg-linear-to-b to-black/30 " />
                </div>

                <div className="relative text-white flex flex-col justify-between h-full">
                  <div>
                    <p className="text-xs font-b uppercase">{card.purpose}</p>
                    <h3 className="mt-0.5 text-xl font-semibold">
                      {card.title}
                    </h3>
                  </div>

                  <Button
                    variant="link"
                    className="w-fit p-0 h-fit text-white group-hover:underline"
                  >
                    {card.action}
                  </Button>
                </div>
              </div>

              <Dialog
                open={card.title === selected}
                onOpenChange={() => setSelected(null)}
              >
                <DialogContent
                  showCloseButton={false}
                  className="max-h-[85vh] w-[600px] max-w-[95vw]! md:max-w-full! p-0 max-md:gap-2 overflow-auto hide-scrollbar"
                >
                  <div className="">
                    <div className="relative h-[200px] sm:h-[260px]">
                      <Image
                        src={card.image}
                        alt={card.title}
                        className="size-full object-cover -z-1 transform  group-hover:scale-110  group-active:scale-110 duration-300 transition-all"
                        fill
                      />
                    </div>
                    <p className="text-center mt-1 text-xs">{card.title}</p>
                  </div>

                  <div className="px-4 pb-6">
                    <DialogHeader className="gap-0">
                      {/* <p className="text-xxs font-medium mt-1 bg-primary/70 hover:bg-primary duration-300 hover:cursor-pointer text-white w-fit self-end px-2 py-1 rounded-full">
                      {card.purpose}
                    </p> */}
                      <DialogTitle className="text-xl font-bold mt-4 md:mt-2 text-center">
                        {card.title}
                      </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-3 mt-1 md:mt-4">
                      {card.description.map((desc, idx) => (
                        <p className="text-sm" key={idx}>
                          {desc}
                        </p>
                      ))}
                    </div>

                    <DialogClose className="w-full mt-6">
                      <Button className="w-full mt-4">Close</Button>
                    </DialogClose>
                  </div>
                </DialogContent>
              </Dialog>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default UpcomingPrograms;
