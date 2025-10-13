import Image from "next/image";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Hero from "./Components/Hero";
import Details from "./Components/Details";
import LampShapes from "./Components/LampShapes";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <>
      <Navbar/>
      <Slider/>
      <Hero/>
      <Details/>
      <LampShapes/>
      <Footer/>
  </>
  );
}
