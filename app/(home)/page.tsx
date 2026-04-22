import FeaturedPrograms from "@/components/home/FeaturedPrograms";
import GlobalReach from "@/components/home/GlobalReach";
import Hero from "@/components/home/Hero";
import JoinTheFellowship from "@/components/home/JoinTheFellowship";
import Sponsorship from "@/components/home/Sponsorship";
import UpcomingPrograms from "@/components/home/UpcomingPrograms";
import Header from "@/components/layout/Header";

export default function HomePage() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <FeaturedPrograms />
      <JoinTheFellowship />
      <Sponsorship />
      <UpcomingPrograms />
      <GlobalReach />
    </div>
  );
}
