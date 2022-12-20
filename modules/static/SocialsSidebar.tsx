import { useState } from "react";

const SIDEBAR_SOCIALS = [
  {
    name: "Twitter",
    imgPath: "assets/buttons/twitter.svg",
    link: "https://twitter.com/voyajiofficial",
    isActive: true,
  },
  {
    name: "Medium",
    imgPath: "assets/buttons/medium.svg",
    link: "https://generatelabs.medium.com/",
    isActive: true,
  },
  {
    name: "Discord",
    imgPath: "assets/buttons/discord.svg",
    link: "",
    isActive: false,
  },
];

const SocialsSidebar: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <section className="absolute right-0 top-0 z-20 hidden h-full w-[50%] items-center justify-end md:flex">
      <div
        className={`relative flex h-[200px] w-[80px] flex-col items-center justify-between rounded-lg bg-navy p-4 ${
          !open && "translate-x-[80px]"
        }`}
      >
        {SIDEBAR_SOCIALS.map((e, idx) => (
          <a
            className={`${!e.isActive && "pointer-events-none opacity-40"}`}
            key={idx}
            href={e.link}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className="h-auto w-full transition-all hover:scale-125"
              src={e.imgPath}
              alt={e.name}
            />
          </a>
        ))}
        <img
          className={`absolute left-[-30px] top-[10px] h-auto w-[30px] hover:cursor-pointer ${
            open ? "scale-[-1]" : ""
          }`}
          onClick={() => setOpen((prev) => !prev)}
          src="assets/buttons/sidebar-open.svg"
          alt="Open / Close Sidebar"
        />
      </div>
    </section>
  );
};

export default SocialsSidebar;
