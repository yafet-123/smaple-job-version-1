import { History } from "../components/History";
import { Advice } from "../components/Advice";
import { Hero } from "../components/Hero";
import { LatestJobs } from "../components/LatestJobs";
import { News } from "../components/News";
import { SearchJobs } from "../components/SearchJobs";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <History />
      <SearchJobs />
      <LatestJobs />
      <News />
      <Advice />
    </div>
  );
}
