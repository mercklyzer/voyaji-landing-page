import Link from "next/link";
import {
  Brands,
  Container,
  Button,
  Nav,
  Footer,
  HTMLHead,
} from "modules/common";
import { SocialsSidebar } from "modules/static";

export default function Page() {
  return (
    <Container>
      <HTMLHead>
        <title>Voyaji</title>
      </HTMLHead>

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
                href="https://map.voyaji.io/"
              >
                <Button
                  type="enter"
                  styling="h-[50px] md:h-[60px] lg:h-[80px]"
                />
              </Link>
            <div className="flex">
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
              href="https://map.voyaji.io/"
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

      <Brands />

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

    </Container>
  );
}
