import Link from "next/link";
import { UnderConstruction, NAVIGATION, SOCIALS } from "modules/common";

const Footer = () => {
  return (
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
            Are you ready for an epic quest Voyager? We are Voyaji, a collective
            building an IP led by designers, creators and artists alike.
            Together with Generate Labs, We picture a Metaverse united by
            Creatives from all backgrounds.
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
                <Link className="my-2 hover:underline" key={idx} href={e.href}>
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
  );
};

export default Footer;
