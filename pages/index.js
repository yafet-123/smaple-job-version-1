import { AboutUs } from "../components/AboutUs";
import { Advice } from "../components/Advice";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { News } from "../components/News";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <News />
      <Advice />
      <AboutUs />
    </div>
  );
}
