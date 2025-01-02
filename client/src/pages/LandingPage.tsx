import LandingHeader from "@/components/public/Header";
import LandingPageBody from "@/components/public/MainContent";
import Trend from "./Trend";

function LandingPage() {
  return (
    <>
      <LandingHeader />
      <LandingPageBody />;
      <Trend />
    </>
  );
}

export default LandingPage;
