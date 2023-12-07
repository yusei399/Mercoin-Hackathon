import Image from "next/image";
import VideoPage from "./pages/video/page";
import Matamask from "./components/wallet/Matamask";
import Vtuber from "./pages/user/page";
import VideoIndex from "./components/video/VideoIndex";
import CommentForm from "./components/video/CommentForm";
import Link from "next/link";
import "./styles/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <VideoIndex />
      <CommentForm />
    </div>
  );
}
