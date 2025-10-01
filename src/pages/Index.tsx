import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Solution from "@/components/Solution";
import Authority from "@/components/Authority";
import SocialProof from "@/components/SocialProof";
import Offer from "@/components/Offer";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PainPoints />
      <Solution />
      <Authority />
      <SocialProof />
      <Offer />
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default Index;
