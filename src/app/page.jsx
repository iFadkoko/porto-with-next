import Image from "next/image";
import Navbar from "./components/navbar";
import Sound from "./components/sound";
import ColorBends from "./components/backgroud";
import Loading from "./components/loading";
import MusikCard from "./components/musikcard";
import Hero from "./components/hero";
import ScrollVelocity from "./components/velocity";

export default function Home() {
  return (
    <>
      <Loading />
      <ColorBends />
      <Navbar />
      <MusikCard />
      <Hero />
      <ScrollVelocity
        texts={['React Bits', 'Scroll Down']}
        velocity={100}
        className="custom-scroll-text"
      />
    </>
  );
}
