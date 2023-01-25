import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import {
  Container,
  Button,
  HoverImage,
  Nav,
  UnderConstruction,
  NAVIGATION,
  SOCIALS,
} from "modules/common";
import { SocialsSidebar } from "modules/static";
import { isWhitelisted } from "modules/utils";
import { InjectedConnector } from "wagmi/connectors/injected";

const BRANDS = [
  {
    name: "Lympo",
    link: "https://twitter.com/Lympo_io",
    imgPath: "assets/images/lympo_web.svg",
  },
  {
    name: "Alex Hawkers",
    link: "https://www.hawkersco.com/en",
    imgPath: "assets/images/alex_hawkers_web.svg",
  },
  {
    name: "Alfa Hanta",
    link: "https://twitter.com/alfahanta",
    imgPath: "assets/images/alfanhanta_web.svg",
  },
  {
    name: "Game-Fi capital",
    link: "https://twitter.com/gameficapital",
    imgPath: "assets/images/g_brand_web.svg",
  },
  {
    name: "Illiquid Capital",
    link: "https://illiquidcapital.io/",
    imgPath: "assets/images/illiquid_capital_web.svg",
  },
  {
    name: "Psydelve",
    link: "https://twitter.com/psydelve",
    imgPath: "assets/images/p_brand_web.svg",
  },
  {
    name: "Cyber Ronins",
    link: "https://twitter.com/RoninsVIP",
    imgPath: "assets/images/cyber_ronins_web.svg",
  },
  {
    name: "Battle Species",
    link: "https://battlespecies.net/",
    imgPath: "assets/images/battle_species_web.svg",
  },
  {
    name: "",
    link: "",
    imgPath: "",
  },
  {
    name: "Abo Khashem",
    link: "https://www.abokhashem.com/home",
    imgPath: "assets/images/abo_khashem_web.svg",
  },
  {
    name: "King Crown DAO",
    link: "https://twitter.com/KingCrownDAO",
    imgPath: "assets/images/king_crown_dao_web.svg",
  },
  {
    name: "",
    link: "",
    imgPath: "",
  },
];

export default function Page() {
  return (
    <Container>
      <Head>
        <title>Voyaji</title>
        <meta
          name="description"
          content="Are you ready for an epic quest Voyager? We are Voyaji, a collective building an IP led by designers, creators and artists alike. Together with Generate Labs, We picture a Metaverse united by Creatives from all backgrounds."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Voyaji" />
        <meta name="twitter:url" content="https://voyaji.io/" />
        <meta
          name="twitter:description"
          content="Are you ready for an epic quest Voyager? We are Voyaji, a collective building an IP led by designers, creators and artists alike. Together with Generate Labs, We picture a Metaverse united by Creatives from all backgrounds."
        />{" "}
        <meta
          name="twitter:image"
          content="https://bafybeiajggm7vcbon5n57p27qqmnxs2gptprgd5lvnewlv4zkv5hxsu2qi.ipfs.nftstorage.link/"
        />
        <meta property="og:title" content="Voyaji" />
        <meta property="og:url" content="https://voyaji.io/" />
        <meta
          property="og:description"
          content="Are you ready for an epic quest Voyager? We are Voyaji, a collective building an IP led by designers, creators and artists alike. Together with Generate Labs, We picture a Metaverse united by Creatives from all backgrounds."
        />
        <meta
          property="og:image"
          content="https://bafybeiajggm7vcbon5n57p27qqmnxs2gptprgd5lvnewlv4zkv5hxsu2qi.ipfs.nftstorage.link/"
        />
        <meta property="og:type" content="website" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {/*<Container styling={showMobileNav ? "overflow-hidden" : ""}>*/}

      <Nav />

      {/* DESKTOP HEADER */}
      <header className="relative hidden w-full md:block">
        <div className="h-[10vh] md:hidden"></div>
        <div className="relative z-10 h-screen w-full overflow-hidden">
          <video className="h-full w-full object-cover" autoPlay muted loop>
            <source src="assets/videos/flip.mp4" type="video/mp4" />
            Your browser does not support video tags
          </video>
        </div>

        <div className="absolute top-0 z-20 flex h-full w-full justify-start bg-right-gradient bg-cover">
          <aside className="flex h-full w-[70vw] flex-col justify-center p-16 p-32 lg:w-[60vw]">
            <div className="h-[10vh] md:hidden"></div>
            <h1 className="z-20 mb-4 text-left text-center font-montserrat-bold text-3xl text-white md:text-left md:text-4xl lg:text-6xl">
              An Adventure by Generate Labs
            </h1>

            <p className="z-20 mb-4 text-center font-montserrat-regular text-white md:mt-4 md:mb-16 md:text-left">
              Voyaji is an Adventure Collectible in the ETH Blockchain, created
              by Generate Labs Studio - an exclusive Metaverse Company, with
              extensive experience in NFT Asset Creation and NFT Management.
            </p>

            <div className="flex">
              <Link
                className="z-20 self-start self-center md:self-start"
                href="https://www.generatelabs.io/"
                target="_blank"
              >
                <Button
                  type="enter"
                  styling="h-[50px] md:h-[60px] lg:h-[80px]"
                />
              </Link>
            </div>
          </aside>
        </div>

        {/* SOCIALS SIDERBAR*/}
        <SocialsSidebar />
      </header>

      {/* MOBILE HEADER */}
      <header className="relative block h-[70vh] w-full text-center md:hidden">
        <div className="relative z-10 h-full overflow-hidden">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="assets/videos/flip.mp4" type="video/mp4" />
            Your browser does not support video tags
          </video>
        </div>

        <div className="absolute top-0 z-20 flex h-full w-full flex-col items-center justify-center bg-right-gradient bg-cover p-8">
          <h1 className="z-20 mb-4 font-montserrat-bold text-2xl text-white md:text-left md:text-4xl lg:text-6xl">
            An Adventure by Generate Labs
          </h1>

          <p className="z-20 mb-4 font-montserrat-regular text-white md:mt-4 md:mb-16 md:text-left">
            Voyaji is an Adventure Collectible in the ETH Blockchain, created by
            Generate Labs Studio - an exclusive Metaverse Company, with
            extensive experience in NFT Asset Creation and NFT Management.
          </p>

          <div className="flex flex-col">
            <Link
              className="z-20 mb-4 self-start self-center md:self-start"
              href="https://www.generatelabs.io/"
              target="_blank"
            >
              <Button type="enter" styling="h-[50px] md:h-[60px] lg:h-[80px]" />
            </Link>
          </div>
        </div>
      </header>

      {/* BODY */}
      <section className="relative relative w-full bg-navy">
        <img
          className="hidden w-full md:block"
          src="assets/images/upper_vector.png"
          alt="Union"
        />

        <img
          className="block w-full md:hidden"
          src="assets/images/upper_mobile.png"
          alt="Union"
        />

        <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center">
          <h1 className="z-20 mb-2 text-center font-montserrat-bold text-3xl text-white md:mb-4 md:text-4xl lg:text-6xl">
            Are you Ready?
          </h1>

          <Link
            className="z-20"
            href="https://twitter.com/intent/tweet?text=I'm ready for the next clue, Voyager... @voyajiofficial"
            target="_blank"
          >
            <Button type="voyage" styling="h-[50px] md:h-[60px] lg:h-[80px]" />
          </Link>
        </div>
      </section>

      {/* BRANDS DESKTOP */}
      <section className="hidden w-full flex-col bg-navy py-20 px-40 md:flex">
        <h1 className="mb-8 font-montserrat-bold text-3xl text-white">
          Brands we&apos;ve worked with
        </h1>
        <div className="grid w-full grid-cols-4 gap-[2vw]">
          {BRANDS.map((e, idx) => (
            <>
              {e.link.length !== 0 ? (
                <a
                  className="transition-all hover:scale-110"
                  key={idx}
                  href={e.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img className="w-full" src={e.imgPath} alt={e.name} />
                </a>
              ) : (
                <div className="transition-all hover:scale-110" key={idx}>
                  {/* UNCLICKABLE BLANK IF LINK IS EMPTY */}
                  <img className="w-full" src={e.imgPath} alt={e.name} />
                </div>
              )}
            </>
          ))}
        </div>
      </section>

      {/* BRANDS MOBILE */}
      <section className="flex w-full flex-col bg-navy p-12 md:hidden">
        <h1 className="mb-8 text-center font-montserrat-bold text-3xl text-white">
          Brands we&apos;ve worked with
        </h1>
        <div className="grid w-full grid-cols-2 gap-[2vw]">
          {BRANDS.map((e, idx) => (
            <>
              {e.link.length !== 0 && (
                <a
                  className="transition-all hover:scale-110"
                  key={idx}
                  href={e.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img className="w-full" src={e.imgPath} alt={e.name} />
                </a>
              )}
            </>
          ))}
        </div>
      </section>

      <section className="relative relative w-full bg-navy">
        <img
          className="hidden w-full md:block"
          src="assets/images/lower_vector.png"
          alt="Union"
        />

        <img
          className="block w-full md:hidden"
          src="assets/images/lower_mobile.png"
          alt="Union"
        />
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-navy p-12 font-montserrat-regular md:p-20 lg:p-40">
        <div className="grid grid-cols-1 rounded-lg text-white md:grid-cols-1 md:gap-[2vw] md:bg-light-navy md:p-20 lg:grid-cols-[2fr_1fr_2fr]">
          {/* FIRST ROW */}
          <div className="flex flex-col items-center lg:block">
            <img
              className="h-[40px]"
              src="assets/buttons/logo.svg"
              alt="Voyaji Logo"
            />

            <p className="my-12 text-center md:my-4 lg:text-left">
              Are you ready for an epic quest Voyager? We are Voyaji, a
              collective building an IP led by designers, creators and artists
              alike. Together with Generate Labs, We picture a Metaverse united
              by Creatives from all backgrounds.
            </p>

            <p className="mb-2 font-montserrat-bold">Follow us:</p>
            <div className="mb-12 flex md:mb-0">
              {SOCIALS.map((e, idx) => (
                <>
                  {e.isActive ? (
                    <a
                      key={idx}
                      href={e.link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        className="mr-4 h-12 transition-all hover:scale-125 hover:cursor-pointer"
                        key={idx}
                        src={e.imgPath}
                        alt={e.name}
                      />
                    </a>
                  ) : (
                    <UnderConstruction key={idx}>
                      <a
                        key={idx}
                        href={e.link}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <img
                          className="mr-4 h-12 transition-all hover:scale-125 hover:cursor-pointer"
                          key={idx}
                          src={e.imgPath}
                          alt={e.name}
                        />
                      </a>
                    </UnderConstruction>
                  )}
                </>
              ))}
            </div>
          </div>

          {/* SECOND ROW */}
          <div className="flex h-full flex-col items-center justify-center">
            {NAVIGATION.map((e, idx) => (
              <>
                {e.isActive ? (
                  <Link
                    className="my-2 hover:underline"
                    key={idx}
                    href={e.href}
                  >
                    {e.name}
                  </Link>
                ) : (
                  <UnderConstruction styling="my-2">
                    <Link className="hover:underline" key={idx} href={e.href}>
                      {e.name}
                    </Link>
                  </UnderConstruction>
                )}
              </>
            ))}
          </div>

          {/* THIRD ROW */}
          <div className="mt-12 text-center lg:text-left">
            <p className="text-md mb-4 font-montserrat-bold">
              Get Latest Updates
            </p>

            <p>Get notified about News. Artworks. Live bid and more.</p>

            <UnderConstruction>
              <div className="my-4 grid-cols-[3fr_1fr] gap-0 rounded-xl bg-gray-blue sm:grid">
                <input
                  className="w-full rounded-xl bg-gray-blue p-5 text-center text-white outline-none placeholder:text-white sm:w-auto sm:rounded-l-xl sm:text-left"
                  type="email"
                  placeholder="Type your email"
                />
                <button className="w-full rounded-xl bg-gray p-5 text-white sm:w-auto">
                  Subscribe
                </button>
              </div>
            </UnderConstruction>

            <p className="mb-4 text-sm">
              It&apos;s safe to share your confidential.
            </p>
          </div>
        </div>
      </footer>
    </Container>
  );
}
