import Image from "next/image";
import VideoPage from "./pages/video/page";
import Matamask from "./components/wallet/Matamask";
import Vtuber from "./pages/user/page";
import VideoIndex from "./components/video/VideoIndex";
import CommentForm from "./components/video/CommentForm";
import Link from "next/link";
import "./styles/Home.css";
<<<<<<< Updated upstream

export default function Home() {
  return (
    <div className="home-container">
      <VideoIndex />
      <CommentForm />
=======
import Site from "./pages/goods/page";

export default function Home() {
  return (
    <div>
      <Site />
      <Link href="/video"></Link>
>>>>>>> Stashed changes
    </div>
  );
}
