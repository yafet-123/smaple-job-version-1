import { AdviceAndNews } from "../components/AdviceAndNews";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <AdviceAndNews />
    </div>
  );
}
