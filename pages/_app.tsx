import "../styles/globals.css";
import type { AppProps } from "next/app";

import { WagmiConfig, configureChains, createClient, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from "wagmi/providers/alchemy";

// temporary
const { chains, provider, webSocketProvider } = configureChains(
  [mainnet],
  [
    alchemyProvider({ apiKey: "fSvAcm3d2xRvFLFo2VnDQdgtvf_06S3m" }),
    publicProvider(),
  ]
);

const client = createClient({
  autoConnect: false,
  provider,
  webSocketProvider,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}
