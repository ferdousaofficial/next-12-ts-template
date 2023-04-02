import CounterSection from "./CounterSection/CounterSection";
import FeatureSection from "./FeatureSection/FeatureSection";
import PriceSection from "./PriceSection/PriceSection";
import VideoSection from "./VideoSection/VideoSection";

export default function Home() {
  return (
    <>
      <FeatureSection />
      <PriceSection />
      <VideoSection />
      <CounterSection />
    </>
  );
}
