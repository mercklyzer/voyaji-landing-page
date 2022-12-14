import Link from "next/link";
import { useState } from "react";
import { Container, Button, GradientOverlay } from "modules/common";
import { isWhitelisted } from "modules/utils";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

const SOCIALS = [
  {
    name: "Discord",
    imgPath: "assets/buttons/discord.png",
  },
  {
    name: "Twitter",
    imgPath: "assets/buttons/twitter.png",
  },
];

const NAVIGATION = [
  {
    name: "Home",
    href: "/",
  },
  // {
  //   name: "Contact",
  //   href: "/contact",
  // },
  // {
  //   name: "About",
  //   href: "/about",
  // },
];

export default function Page() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  return (
    <Container>
      {/* NAVBAR */}
      <nav className="fixed z-50 w-screen font-montserrat-regular">
        {/* DESKTOP */}
        <div className="flex w-full justify-center bg-navy">
          <div className="hidden h-[10vh] w-full max-w-[1200px] items-center justify-between bg-navy p-4 text-white md:flex">
            <img
              className="h-[70%]"
              src="assets/buttons/logo.png"
              alt="Voyaji Logo"
            />

            <span className="flex items-center">
              {NAVIGATION.map((e, idx) => (
                <Link className="mx-4 hover:underline" key={idx} href={e.href}>
                  {e.name}
                </Link>
              ))}

              {isConnected && address ? (
                <span className="text-yellow rounded-lg bg-orange p-2 text-sm">
                  {isWhitelisted(address) ? "Whitelisted" : "Not Whitelisted"}
                  <button onClick={() => disconnect()}>&nbsp;X</button>
                </span>
              ) : (
                <Button
                  func={() => connect()}
                  type="connect"
                  styling="h-[50px] mx-4"
                />
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
              className="h-[40%] hover:cursor-pointer"
              onClick={() => setShowMobileNav((prev) => !prev)}
              src="assets/icons/burger.png"
              alt="Menu Icon"
            />
          </div>

          {showMobileNav && (
            <div className="absolute z-40 h-screen w-full bg-navy-dim">
              <div className="h-[10vh]"></div>
              <div className="flex flex-col items-center py-12">
                {NAVIGATION.map((e, idx) => (
                  <Link
                    className="w-full border-b-2 border-white p-4 text-center hover:underline"
                    key={idx}
                    href={e.href}
                  >
                    {e.name}
                  </Link>
                ))}

                {isConnected && address ? (
                  <span className="text-yellow mt-12 rounded-lg bg-orange p-2 text-sm">
                    {isWhitelisted(address) ? "Whitelisted" : "Not Whitelisted"}
                    <button onClick={() => disconnect()}>&nbsp;X</button>
                  </span>
                ) : (
                  <Button
                    func={() => connect()}
                    type="connect"
                    styling="h-[50px] my-12"
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* HEADER */}
      <header className="relative w-full">
        <div className="h-[10vh]"></div>
        <div className="z-10 w-full overflow-hidden">
          <video width="100%" autoPlay muted loop>
            <source src="assets/videos/raining.mp4" type="video/mp4" />
            Your browser does not support video tags
          </video>
        </div>

        {/* ONLY DEKSTOP VISIBLE */}
        <div className="absolute top-0 z-20 hidden h-full w-full justify-end md:flex">
          <aside className="flex h-full w-[50vw] flex-col justify-center p-20">
            <h1 className="mb-4 text-right font-montserrat-bold text-6xl text-white">
              Are you ready?
            </h1>
            <Link
              className="self-end"
              href="https://twitter.com/intent/tweet?text=I'm ready for the next clue, Voyager... @voyajiofficial"
              target="_blank"
            >
              <Button type="voyage" styling="h-[80px]" />
            </Link>
          </aside>
        </div>

        {/* ONLY MOBILE VISIBLE */}
        <div className="z-20 flex w-full flex-col items-center justify-center bg-navy p-20 md:hidden">
          <h1 className="mb-4 w-full text-center font-montserrat-bold text-3xl text-white">
            Are you ready?
          </h1>
          <Link
            href="https://twitter.com/intent/tweet?text=I'm ready for the next clue, Voyager... @voyajiofficial"
            target="_blank"
          >
            <Button type="voyage" styling="h-[50px]" />
          </Link>
        </div>
      </header>

      {/* BODY */}
      <section className="relative w-full bg-navy bg-cover md:h-screen">
        <div className="w-full md:h-full">
          <aside className="flex w-[90vw] flex-col justify-center p-12 md:h-full md:w-[50vw] md:p-20">
            <h1 className="z-20 mb-4 text-left font-montserrat-bold text-3xl text-white md:text-6xl">
              An Adventure by Generate Labs
            </h1>

            <p className="z-20 my-4 font-montserrat-regular text-white md:my-8">
              Voyaji is an Adventure Collectible in the ETH Blockchain, created
              by Generate Labs Studio - an exclusive Metaverse Company, with
              extensive experience in NFT Asset Creation and NFT Management.
            </p>

            <Link
              className="z-20 self-start"
              href="https://www.generatelabs.io/"
              target="_blank"
            >
              <Button type="studio" styling="h-[50px] md:h-[80px]" />
            </Link>
          </aside>
        </div>

        <div className="absolute top-0 z-10 h-full w-full overflow-hidden">
          <video width="100%" autoPlay muted loop>
            <source src="assets/videos/cave.mp4" type="video/mp4" />
            Your browser does not support video tags
          </video>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-navy p-12 font-montserrat-regular md:p-40">
        <div className="grid grid-cols-1 rounded-lg text-white md:grid-cols-[2fr_1fr_2fr] md:gap-20 md:bg-light-navy md:p-20">
          {/* FIRST ROW */}
          <div className="flex flex-col items-center md:block">
            <img
              className="h-[40px]"
              src="assets/buttons/logo.png"
              alt="Voyaji Logo"
            />

            <p className="my-12 text-center md:my-4 md:text-left">
              Are you ready for an epic quest Voyager? We are Voyaji, a
              collective building an IP led by designers, creators and artists
              alike. Together with Generate Labs, We picture a Metaverse united
              by Creatives from all backgrounds.
            </p>

            <p className="mb-2 font-bold">Follow us:</p>
            <div className="mb-12 flex md:mb-0">
              {SOCIALS.map((e, idx) => (
                <img
                  className="mr-2 h-12 hover:cursor-pointer"
                  key={idx}
                  src={e.imgPath}
                  alt={e.name}
                />
              ))}
            </div>
          </div>

          {/* SECOND ROW */}
          <div className="flex h-full flex-col items-center justify-center">
            {NAVIGATION.map((e, idx) => (
              <Link className="my-2 hover:underline" key={idx} href={e.href}>
                {e.name}
              </Link>
            ))}
          </div>

          {/* THIRD ROW */}
          <div className="mt-12 text-center md:text-left">
            <p className="text-md mb-4 font-montserrat-bold">
              Get Latest Updates
            </p>

            <p>Get notified about News. Artworks. Live bid and more.</p>

            <div className="my-4 rounded-lg bg-gray-blue p-4 text-center">
              Subscription Locked
            </div>

            <p className="mb-4 text-sm">
              It&apos;s safe to share your confidential.
            </p>
          </div>
        </div>
      </footer>
    </Container>
  );
}
