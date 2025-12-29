import Image from "next/image";
import Navbar from "./components/navbar";
import Sound from "./components/sound";
import ColorBends from "./components/backgroud";
import Loading from "./components/loading";
import MusikCard from "./components/musikcard";
import Hero from "./components/hero";

export default function Home() {
  return (
    <>
      <Loading />
      <ColorBends />
      <Navbar />
      <MusikCard />
      <Hero />
    </>
  );
}
