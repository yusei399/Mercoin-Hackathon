import { MetaMaskProvider } from "./context/MetaMaskContextProvider";
import MetaMaskAuth from "./components/login/MetaMaskAuth";
import Link from "next/link";
import Image from "next/image";



export default function Home() {
  return (
    <MetaMaskProvider>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
          <Image src={"/logo.png"} width={683} height={500} alt="logo" style={{marginRight: 60}}/>
        <MetaMaskAuth/>
        <Link href="/pages/video" style={{ margin: '20px auto' }}>配信ページ</Link>
      </div>
    </MetaMaskProvider>
  );
}
