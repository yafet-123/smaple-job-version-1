import { AboutUs } from "../components/AboutUs";
import { Advice } from "../components/Advice";
import { Hero } from "../components/Hero";
import { LatestJobs } from "../components/LatestJobs";
import { News } from "../components/News";
import { SearchJobs } from "../components/SearchJobs";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <SearchJobs />
      <LatestJobs />
      <News />
      <Advice />
      <AboutUs />
    </div>
  );
}
