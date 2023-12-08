import { MetaMaskProvider } from "./context/MetaMaskContextProvider";
import MetaMaskAuth from "./components/login/MetaMaskAuth";
import Link from "next/link";

export default function Home() {
  return (
    <MetaMaskProvider>
      <MetaMaskAuth />
      <Link href="/pages/video">配信ページ</Link>
    </MetaMaskProvider>
  );
}
