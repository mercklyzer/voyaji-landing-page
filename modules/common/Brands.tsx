import { BRANDS } from "modules/common";

const Brands: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default Brands;
