import FeaturedPrograms from "@/components/home/FeaturedPrograms";
import Hero from "@/components/home/Hero";
import JoinTheFellowship from "@/components/home/JoinTheFellowship";
import Header from "@/components/layout/Header";

export default function HomePage() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <FeaturedPrograms />
      <JoinTheFellowship/>
    </div>
  );
}
