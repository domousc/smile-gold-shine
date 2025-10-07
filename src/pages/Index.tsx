import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Solution from "@/components/Solution";
import Authority from "@/components/Authority";
import BeforeAfter from "@/components/BeforeAfter";
import SocialProof from "@/components/SocialProof";
import Timeline from "@/components/Timeline";
import Offer from "@/components/Offer";
import Urgency from "@/components/Urgency";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Urgency />
      <PainPoints />
      <Solution />
      <Authority />
      <BeforeAfter />
      <Timeline />
      <SocialProof />
      <Offer />
      <Guarantee />
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default Index;
