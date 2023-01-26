import Head from "next/head";

const HTMLHead: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <Head>
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
      {props.children}
    </Head>
  );
};

export default HTMLHead;
