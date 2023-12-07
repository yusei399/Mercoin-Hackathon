import Image from "next/image";
import VideoPage from "./pages/video";
import Matamask from "./components/wallet/Matamask";
import Vtuber from "./components/user/vtuber";
import VideoIndex from "./components/VideoIndex";
import CommentForm from "./components/CommentForm";
import "./styles/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <VideoIndex />
      <CommentForm />
    </div>
  );
}
