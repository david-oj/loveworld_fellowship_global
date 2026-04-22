import Image from "next/image";
import { facebook, instagram, tiktok, youtube } from "@/assets/icons";
import { Mail, MapPin, Phone } from "lucide-react";

export const footerItems = [
  {
    icon: MapPin,
    title: "Headquarters",
    description: "Asese, ogun state, Nigeria",
  },
  {
    icon: Mail,
    title: "Email",
    description: "support@lfg.com",
  },
  {
    icon: Phone,
    title: "Phone",
    phones: [{ phone: "+234 70 8768 9359" }],
  },
];

export const socialIcons = [
  {
    icon: instagram,
    link: "https://instagram.com",
    alt: "instaram_logo",
  },
  //   {
  //     icon: twitter,
  //     link: "https://twitter.com",
  //     alt: "twitter_logo",
  //   },
  {
    icon: facebook,
    link: " https://facebook.com",
    alt: " facebook_logo",
  },
  {
    icon: youtube,
    link: " https://linkedin.com",
    alt: " facebook_logo",
  },
  {
    icon: tiktok,
    link: " https://whatsapp.com",
    alt: " facebook_logo",
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-secondary pb-2 @container">
      <div className="flex flex-wrap sm:px-14 py-6 px-6 gap-4 justify-between">
        {footerItems.map((item, idx) => {
          return (
            <div className="flex-1 flex gap-2 min-w-[191px]" key={idx}>
              <div className="relative size-6">
                <item.icon className="text-white" />
              </div>
              {item.description ? (
                <div className="space-y-1 ">
                  <h3 className="text-white max-sm:text-base">{item.title}</h3>
                  <p className="text-white leading-[20px]">
                    {item.description}
                  </p>
                </div>
              ) : (
                <div className="">
                  <h3 className="text-white mb-1 max-sm:text-base">
                    {item.title}
                  </h3>
                  {item.phones?.map((phone, idx) => (
                    <p key={idx} className="text-white">
                      {phone.phone}
                    </p>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        <div className="flex-grow @max-[1321px]:flex-1 min-w-[191px] @max-[1321px]:justify-start justify-end  items-center @max-[1321px]:ml-10 mt-1 flex gap-4 sm:gap-6.5">
          {socialIcons.map((icon, idx) => (
            <div className="" key={idx}>
              <Image
                src={icon.icon}
                alt={icon.alt}
                className="w-[24px] h-[24px]"
                width={24}
                height={24}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex justify-center sm:mt-11 mt-8">
        <div className="w-full h-[1px] top-1/2 bottom-0 bg-white absolute max-sm:-top-3 " />
        <p className="text-white z-10 sm:bg-secondary sm:px-8 px-2 max-sm:text-center flex max-sm:flex-col items-center ">
          &copy; {new Date().getFullYear()} Loveworld Fellowship
          Global. <br className="sm:hidden" /> All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
