import { useEffect, useState } from "react";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount } from "wagmi";
import { HoverImage } from "modules/common";
import { isWhitelisted } from "modules/utils";

const CustomButton: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { open } = useWeb3Modal();
  const { address, isDisconnected } = useAccount();

  const connectButton = (
    <HoverImage
      styling="max-w-[200px]"
      name="Connect Wallet Button"
      onHoverImg="assets/buttons/connect-hover.svg"
      onOutImg="assets/buttons/connect.svg"
    />
  );

  const disconnectButton = (
    <span className="rounded-lg bg-orange p-2 p-4 text-sm text-yellow">
      {isWhitelisted(address as string) ? "Whitelisted" : "Not Whitelisted"}
      <button onClick={onOpen}>&nbsp;X</button>
    </span>
  );

  const [content, setContent] = useState(connectButton);

  async function onOpen() {
    setLoading(true);
    await open();
    setLoading(false);
  }

  useEffect(() => {
    setContent(address ? disconnectButton : connectButton);
  }, [address]);

  return (
    <button className="my-8" onClick={onOpen} disabled={loading}>
      {content}
    </button>
  );
};

export default CustomButton;
