import "../styles/globals.css";
import type { AppProps } from "next/app";

import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal, useWeb3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { Footer, Nav } from "modules/common";

const chains = [mainnet];
const projectId = String(process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID);

// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({
    projectId,
  }),
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "web3Modal", chains }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <Nav />
        <Component {...pageProps} />
        <Footer />

      </WagmiConfig>
      <Web3Modal enableNetworkView={true} ethereumClient={ethereumClient} />
    </>
  );
}
