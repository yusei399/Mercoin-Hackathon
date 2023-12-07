import Image from "next/image";
import VideoPage from "./pages/video";
import Matamask from "./components/wallet/Matamask";
import Vtuber from "./components/user/vtuber";

export default function Home() {
  return (
    <div>
      {/* <VideoPage /> */}
      {/* <Matamask /> */}
      <Vtuber />
    </div>
  );
}
