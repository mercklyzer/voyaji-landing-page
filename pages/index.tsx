import Link from "next/link";
import { useState } from "react";
import {
  Container,
  Button,
  HoverImage,
  UnderConstruction,
} from "modules/common";
import { SocialsSidebar } from "modules/static";
import { isWhitelisted } from "modules/utils";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

const SOCIALS = [
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

const NAVIGATION = [
  {
    name: "Home",
    href: "/",
    isActive: true,
  },
  {
    name: "Contact",
    href: "/contact",
    isActive: false,
  },
  {
    name: "About",
    href: "/about",
    isActive: false,
  },
];

const BRANDS = [
  {
    name: "Lympo",
    link: "https://twitter.com/Lympo_io",
    imgPath: "assets/images/lympo.png",
  },
  {
    name: "Alex Hawkers",
    link: "https://www.hawkersco.com/en",
    imgPath: "assets/images/hawkers.png",
  },
  {
    name: "Alfa Hanta",
    link: "https://twitter.com/alfahanta",
    imgPath: "assets/images/alfa_hanta.png",
  },
  {
    name: "Game-Fi capital",
    link: "https://twitter.com/gameficapital",
    imgPath: "assets/images/gamefi.png",
  },
  {
    name: "Illiquid Capital",
    link: "https://illiquidcapital.io/",
    imgPath: "assets/images/illiquid_capital.png",
  },
  {
    name: "Psydelve",
    link: "https://twitter.com/psydelve",
    imgPath: "assets/images/psydelve.png",
  },
  {
    name: "Cyber Ronins",
    link: "https://twitter.com/RoninsVIP",
    imgPath: "assets/images/cyber_ronins.png",
  },
  {
    name: "Battle Species",
    link: "https://battlespecies.net/",
    imgPath: "assets/images/battle_species.png",
  },
  {
    name: "",
    link: "",
    imgPath: "",
  },
  {
    name: "Abo Khashem",
    link: "https://www.abokhashem.com/home",
    imgPath: "assets/images/abo_khashem.png",
  },
  {
    name: "King Crown DAO",
    link: "https://twitter.com/KingCrownDAO",
    imgPath: "assets/images/king_crown_dao.png",
  },
  {
    name: "",
    link: "",
    imgPath: "",
  },
];

export default function Page() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  /*
   * @dev page = Home | Contact | About
   */
  const [page, setPage] = useState("Home");

  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  return (
    <Container>
      {/*<Container styling={showMobileNav ? "overflow-hidden" : ""}>*/}
      {/* NAVBAR */}
      <nav className="fixed z-50 w-screen font-montserrat-regular">
        {/* DESKTOP */}
        <div className="flex w-full justify-center bg-navy">
          <div className="hidden h-[10vh] w-full max-w-[1200px] items-center justify-between bg-navy text-white md:flex">
            <img
              className="h-[70%] p-4"
              src="assets/buttons/logo.png"
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

              {isConnected && address ? (
                <span className="rounded-lg bg-orange p-2 p-4 text-sm text-yellow">
                  {isWhitelisted(address) ? "Whitelisted" : "Not Whitelisted"}
                  <button onClick={() => disconnect()}>&nbsp;X</button>
                </span>
              ) : (
                <button onClick={() => connect()}>
                  <HoverImage
                    name="Connect Wallet Button"
                    onHoverImg="assets/buttons/connect-hover.png"
                    onOutImg="assets/buttons/connect.png"
                  />
                </button>
              )}
            </span>
          </div>
        </div>

        {/* MOBILE */}
        <div className="flex w-full flex-col items-center justify-between text-white md:hidden">
          <div className="z-50 flex h-[10vh] w-full items-center justify-between bg-navy p-4">
            <img
              className="h-[60%]"
              src="assets/buttons/logo.png"
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
            <div className="absolute z-40 h-screen w-full bg-navy-dim">
              <div className="h-[10vh]"></div>
              <div className="m-4 flex flex-col items-center rounded-lg bg-light-purple p-12">
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

                {isConnected && address ? (
                  <span className="mt-12 rounded-lg bg-orange p-2 text-sm text-yellow">
                    {isWhitelisted(address) ? "Whitelisted" : "Not Whitelisted"}
                    <button onClick={() => disconnect()}>&nbsp;X</button>
                  </span>
                ) : (
                  <button className="mt-8" onClick={() => connect()}>
                    <HoverImage
                      name="Connect Wallet Button"
                      onHoverImg="assets/buttons/connect-hover.png"
                      onOutImg="assets/buttons/connect-hover.png"
                    />
                  </button>
                )}

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
              </div>
            </div>
          )}
        </div>
      </nav>

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

            <Link
              className="z-20 self-start self-center md:self-start"
              href="https://www.generatelabs.io/"
              target="_blank"
            >
              <Button
                type="studio"
                styling="h-[50px] md:h-[60px] lg:h-[80px]"
              />
            </Link>
          </aside>
        </div>

        {/* SOCIALS SIDERBAR*/}
        <SocialsSidebar />
      </header>

      {/* MOBILE HEADER */}
      <header className="relative block h-[70vh] w-full text-center md:hidden">
        <div className="relative z-10 h-full overflow-hidden">
          <video className="h-full w-full object-cover" autoPlay muted loop>
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

          <Link
            className="z-20 self-start self-center md:self-start"
            href="https://www.generatelabs.io/"
            target="_blank"
          >
            <Button type="studio" styling="h-[50px] md:h-[60px] lg:h-[80px]" />
          </Link>
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
              src="assets/buttons/logo.png"
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
