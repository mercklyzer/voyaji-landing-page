import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  CustomButton,
  NAVIGATION,
  SOCIALS,
  UnderConstruction,
} from "modules/common";
import { useRouter } from "next/router";

const Nav: React.FC = () => {
  /*
   * @dev page = Home | Contact | About
   */
  const router = useRouter();
  const [page, setPage] = useState(() => {
    const path = router.pathname;
    if(path === "/")    return "Home"
    if(path === "/about") return "About"
  });
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    const container = document.getElementById("container");

    if (!container) return;

    // from Container element
    if (showMobileNav) {
      container.style.height = "100vh";
      container.style.overflowY = "hidden";
    } else {
      container.style.height = "auto";
      container.style.overflowY = "scroll";
    }
  }, [showMobileNav]);

  return (
    <nav className="fixed z-50 w-full font-montserrat-regular">
      {/* DESKTOP */}
      <div className="flex w-full justify-center bg-navy">
        <div className="hidden h-[10vh] w-full max-w-[1200px] items-center justify-between bg-navy text-white md:flex">
          <img
            className="h-[70%] p-4"
            src="assets/buttons/logo.svg"
            alt="Voyaji Logo"
          />

          <span className="flex h-full items-center px-4">
            {NAVIGATION.map((e, idx) => (
              <>
                {e.isActive ? (
                  <Link
                    className={`mx-8 flex h-full flex-col justify-center border-light-purple hover:border-b-8 hover:border-white ${
                      page === e.name ? "border-b-8" : "border-0"
                    }`}
                    onClick={() => setPage(e.name)}
                    key={idx}
                    href={e.href}
                  >
                    <span>{e.name}</span>
                  </Link>
                ) : (
                  <UnderConstruction styling="">
                    <Link
                      className="mx-8 hover:underline"
                      key={idx}
                      href={e.href}
                    >
                      {e.name}
                    </Link>
                  </UnderConstruction>
                )}
              </>
            ))}

            <CustomButton />
          </span>
        </div>
      </div>

      {/* MOBILE */}
      <div className="flex w-full flex-col items-center justify-between text-white md:hidden">
        <div className="z-50 flex h-[10vh] w-full items-center justify-between bg-navy p-4">
          <img
            className="h-[60%]"
            src="assets/buttons/logo.svg"
            alt="Voyaji Logo"
          />

          <img
            className="h-[60%] hover:cursor-pointer"
            onClick={() => setShowMobileNav((prev) => !prev)}
            src={`assets/icons/${showMobileNav ? "close" : "burger"}.svg`}
            alt="Menu Icon"
          />
        </div>

        {showMobileNav && (
          <div className="z-40 h-screen h-[90vh] w-full bg-navy-dim">
            {/* LIGHT BOX */}
            <div className="h-screen overflow-y-scroll rounded-lg pb-24">
              <div className="mx-12 flex flex-col items-center rounded-lg bg-light-purple p-12">
                <h1 className="text-center font-montserrat-bold text-3xl">
                  Are you ready for an epic quest
                </h1>
                <p className="my-8 text-center font-montserrat-regular">
                  We are Voyaji, a community led by designers, creators and
                  artists alike. Together with Generate Labs, We picture a
                  Metaverse united by Creatives from all backgrounds.
                </p>

                <div>
                  {NAVIGATION.map((e, idx) => (
                    <>
                      {e.isActive ? (
                        <Link
                          className="mb-4 flex items-center"
                          key={idx}
                          href={e.href}
                          onClick={() => setPage(e.name)}
                        >
                          <img
                            className="mr-4"
                            src="assets/icons/white-triangle.svg"
                            alt="White Triangle"
                          />
                          {e.name}
                        </Link>
                      ) : (
                        <UnderConstruction>
                          <Link
                            className="mb-4 flex items-center"
                            key={idx}
                            href={e.href}
                          >
                            <img
                              className="mr-4"
                              src="assets/icons/white-triangle.svg"
                              alt="White Triangle"
                            />
                            {e.name}
                          </Link>
                        </UnderConstruction>
                      )}
                    </>
                  ))}
                </div>

                <CustomButton />

                <div className="mt-8 w-full">
                  <h2>Follow the Voyage:</h2>
                  <div className="flex w-full items-center justify-between">
                    <span className="flex grid grid-cols-3 gap-2">
                      {SOCIALS.map((e, idx) => (
                        <a
                          className="transition-all hover:scale-125"
                          onClick={() => setPage(e.name)}
                          key={idx}
                          href={e.link}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <img
                            className="h-[30px]"
                            src={e.imgPath}
                            alt={`${e.name} Logo`}
                          />
                        </a>
                      ))}
                    </span>

                    <a
                      href="https://www.generatelabs.io/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        src="assets/icons/genlabs-logo.svg"
                        alt="Generate Labs Logo"
                      />
                    </a>
                  </div>
                </div>

                <p className="mt-16 text-xs">
                  © GenerateLabs. All rights Reserved.
                </p>
              </div>{" "}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
