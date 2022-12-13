import Link from "next/link";
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
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  return (
    <Container>
      {/* NAVBAR */}
      <nav className="flex h-[10vh] w-screen justify-center bg-navy p-4">
        <div className="flex h-full w-full max-w-[1200px] items-center justify-between text-white">
          <img
            className="h-full"
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
      </nav>

      {/* HEADER */}
      <GradientOverlay>
        <header className="relative h-[90vh] w-full">
          <div className="z-10 h-full w-full overflow-hidden">
            <video width="100%" autoPlay muted loop>
              <source src="assets/videos/raining.mp4" type="video/mp4" />
              Your browser does not support video tags
            </video>
          </div>

          <div className="absolute top-0 z-20 flex h-full w-full justify-end">
            <aside className="flex h-full w-[50vw] flex-col justify-center p-20">
              <h1 className="mb-4 text-right text-6xl font-black text-white">
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
        </header>
      </GradientOverlay>

      {/* BODY */}
      <section className="relative h-screen w-full bg-cover">
        <div className="z-10 h-full w-full overflow-hidden">
          <video width="100%" autoPlay muted loop>
            <source src="assets/videos/cave.mp4" type="video/mp4" />
            Your browser does not support video tags
          </video>
        </div>

        <div className="absolute top-0 h-full w-full">
          <aside className="flex h-full w-[50vw] flex-col justify-center p-20">
            <h1 className="mb-4 text-left text-6xl font-black text-white">
              An Adventure by Generate Labs
            </h1>

            <p className="my-8 text-white">
              Voyaji is an Adventure Collectible in the ETH Blockchain, created
              by Generate Labs Studio - an exclusive Metaverse Company, with
              extensive experience in NFT Asset Creation and NFT Management.
            </p>

            <Link
              className="self-start"
              href="https://www.generatelabs.io/"
              target="_blank"
            >
              <Button type="studio" styling="h-[80px]" />
            </Link>
          </aside>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-navy p-40">
        <div className="grid grid-cols-[2fr_1fr_2fr] gap-20 rounded-lg bg-light-navy p-20 text-white">
          {/* FIRST ROW */}
          <div>
            <img
              className="h-[40px]"
              src="assets/buttons/logo.png"
              alt="Voyaji Logo"
            />

            <p className="my-4">
              Are you ready for an epic quest Voyager? We are Voyaji, a
              collective building an IP led by designers, creators and artists
              alike. Together with Generate Labs, We picture a Metaverse united
              by Creatives from all backgrounds.
            </p>

            <p className="mb-2 font-bold">Follow us:</p>
            <div className="flex">
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
          <div className="flex h-full flex-col justify-center">
            {NAVIGATION.map((e, idx) => (
              <Link className="my-2 hover:underline" key={idx} href={e.href}>
                {e.name}
              </Link>
            ))}
          </div>

          {/* THIRD ROW */}
          <div>
            <p className="text-md mb-4 font-bold">Get Latest Updates</p>

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
